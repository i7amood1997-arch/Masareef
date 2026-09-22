مصاريف — ملفات الرفع
Build 202609221315 — 22 September 2026

Upload BOTH of these to GitHub, into the public/ folder of the Masareef repo,
replacing the files already there:

  app.js    (the app itself)
  app.css   (styles)

Nothing else changed. sw.js, index.html, manifest.json and the fonts stay
exactly as they are.

After uploading, open the app and check the sign-in screen or Settings says
  build 202609221315
If it still shows an older number, the deploy has not gone live yet.

What is new in this build
- FIXED: paying a fixed expense (rent, subscriptions) no longer inflates the
  daily spend rate. It was being counted twice — once when the money left the
  balance, and again as if it would repeat every month. Paying rent on time
  could turn the pace line under "تقدر تصرف اليوم" red and warn you would run
  out weeks early, when you would not.
- NEW: every day heading in the expenses list shows what that day cost, e.g.
  "اليوم    صرفت 16.250 BHD". Days where money came back read "رجع لك ...",
  and a day that netted zero reads "ما صرفت شي".
- Restoring a Drive backup now says how many closed cycles it will erase.
- An item over 10,000 BHD on the review screen warns about the decimal point.
  It never blocks saving.
