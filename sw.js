/**
 * §10 — the cache must be assumed EMPTY after any gap in use, because iOS
 * purges site storage after ~7 days of inactivity (§9.1). So this worker
 * re-fetches and re-caches the critical assets on every activation rather than
 * trusting whatever survived.
 *
 * iOS gives no Background Sync, so nothing here schedules work for later.
 */
const CACHE = 'masareef-v3';

const CRITICAL = [
  './',
  './index.html',
  './app.js',
  './tokens.css',
  './app.css',
  './fonts.css',
  './manifest.json',
  './fonts/plex-arabic-arabic-400.woff2',
  './fonts/plex-arabic-arabic-500.woff2',
  './fonts/plex-arabic-arabic-600.woff2',
  './fonts/plex-arabic-latin-400.woff2',
  './fonts/plex-arabic-latin-500.woff2',
  './fonts/plex-arabic-latin-600.woff2',
];

async function recache() {
  const cache = await caches.open(CACHE);
  await Promise.all(CRITICAL.map(async (url) => {
    try {
      const res = await fetch(url, { cache: 'reload' });
      if (res.ok) await cache.put(url, res);
    } catch {
      // Offline at launch: whatever is already cached still serves.
    }
  }));
}

self.addEventListener('install', (e) => {
  e.waitUntil(recache().then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const key of await caches.keys()) if (key !== CACHE) await caches.delete(key);
    await recache();
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const { request } = e;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  // Network-first: while online, always fetch the latest deployed file and
  // refresh the cache with it. Cache-first was tried initially and rejected —
  // it meant a redeploy went unseen until this file's OWN bytes changed
  // enough for the browser to notice a new service worker, which is easy to
  // forget to bump and impossible for the person deploying to detect from
  // outside. §10's offline requirement is unaffected: the cache fallback
  // below still serves everything when there is no network at all.
  e.respondWith((async () => {
    try {
      const res = await fetch(request);
      if (res.ok) (await caches.open(CACHE)).put(request, res.clone());
      return res;
    } catch {
      const cached = await caches.match(request);
      return cached ?? (await caches.match('./index.html')) ?? Response.error();
    }
  })());
});
