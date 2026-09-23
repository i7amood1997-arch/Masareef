مصاريف — ملفات الرفع
Build 202609231212 — 23 September 2026

Upload BOTH of these to GitHub, into the public/ folder of the Masareef repo,
replacing the files already there:

  app.js    (the app itself — changed today)
  app.css   (unchanged since yesterday; included so this folder is complete)

Nothing else changed. sw.js, index.html, manifest.json and the fonts stay
exactly as they are.

After uploading, open the app and check the sign-in screen or Settings says
  build 202609231212
If it still shows an older number, the deploy has not gone live yet.

What this build fixes (no new features — a stability pass)
- Amounts typed on an Arabic number keypad (١٢٫٥٠٠) were saved 1000x too
  large (12,500 instead of 12.500). Fixed on every amount field. The salary
  field on the very first screen rejected Arabic digits entirely — fixed too.
- "Edit savings balance" left empty no longer resets the account to zero.
- The CSV and report exports showed the previous day for anything bought
  between midnight and 3am. Fixed.
- A bank SMS handed to the app is no longer thrown away when no API key is
  saved on the device. It is read and put in the review list.
- Day counts now read correctly in Arabic: "30 يوم", "يومين", "5 أيام"
  (it used to say "30 أيام").
