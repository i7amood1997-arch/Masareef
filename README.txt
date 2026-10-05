مصاريف — ملفات الرفع
Build 202610050714 — 5 October 2026

NEW in this build
- Quantity on every expense ("عصير ×3"). The amount is always the TOTAL you
  paid; the app shows the price per item. Receipts and voice now show one item
  with a quantity instead of repeating the same product.
- "تسلّف" — borrow from a savings account. You get reminded on the home screen
  every cycle until you give it back to the same account. You can give it back
  in parts ("رجّع جزء") or all at once ("رجّعتها").
Also includes everything from before: expected expenses, the new logo, sign-in
by code, and all the fixes.

WHAT TO UPLOAD to the public/ folder of the Masareef repo on GitHub
(replace anything with the same name):

  app.js          changed
  app.css         changed
  index.html
  manifest.json
  icons/          the whole folder, all 10 files

Do NOT touch: sw.js, tokens.css, fonts.css, fonts/

If the live site already has the 28 September build, only app.js and app.css
are new. Uploading everything is safe either way.

After uploading, open the app and check Settings says
  build 202610050714

Your data is safe: nothing about the database changed in this build.
