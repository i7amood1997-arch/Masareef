مصاريف — ملفات الرفع
Build 202609281242 — 28 September 2026

This build = the expected-expenses feature and the new logo, rebuilt on top of
all the fixes from 22-23 September. It replaces "masareef-public 20".

WHAT TO UPLOAD to the public/ folder of the Masareef repo on GitHub
(replace anything with the same name):

  app.js          changed
  app.css         changed
  index.html      same as the one you uploaded yesterday
  manifest.json   same as the one you uploaded yesterday
  icons/          the whole folder, all 10 files (same as yesterday's)

Do NOT touch: sw.js, tokens.css, fonts.css, fonts/

Strictly only app.js and app.css differ from what is live now, but uploading
all of the above is safe and makes sure nothing is missed.

After uploading, open the app and check Settings says
  build 202609281242

Your data is safe: this build opens the same database the live version
created, and keeps any expected expenses you already entered.

IMPORTANT for the future: never upload an older build over this one.
The database moved to a newer format, and an older build would not be
able to open it.
