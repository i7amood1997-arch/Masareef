مصاريف — ملفات الرفع
Build 202609221243 — 22 September 2026

Upload BOTH of these to GitHub, into the public/ folder of the Masareef repo,
replacing the files already there:

  app.js    (the app itself)
  app.css   (styles)

Nothing else changed. sw.js, index.html, manifest.json and the fonts stay
exactly as they are.

After uploading, open the app and check the sign-in screen or Settings says
  build 202609221243
If it still shows an older number, the deploy has not gone live yet.

What is new in this build
- NEW: every day heading in the expenses list now shows what that day cost,
  e.g. "اليوم    صرفت 16.250 BHD". Days where money came back read
  "رجع لك ...", and a day that netted zero reads "ما صرفت شي". Days with only
  a salary show nothing.
- Restoring from a Google Drive backup now tells you how many closed cycles
  it is about to erase, before you confirm.
- An item over 10,000 BHD on the receipt/voice review screen shows a warning
  to check the decimal point. It never blocks you from saving.
