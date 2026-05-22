---
id: favicon
title: Favicon
---

# How to Change the Favicon

The favicon is the small icon shown in browser tabs and bookmarks. Replace it with your brand icon.

---

## Step 1 — Prepare Your Favicon

Recommended formats and sizes:

| File | Size |
|------|------|
| `favicon.ico` | 16×16, 32×32 (multi-size ICO) |
| `icon.png` | 512×512 |
| `apple-icon.png` | 180×180 |

Use a tool like [favicon.io](https://favicon.io) or [realfavicongenerator.net](https://realfavicongenerator.net) to generate all sizes from a single image.

---

## Step 2 — Replace the Files

Place your favicon files in the app directory:

```
src/app/favicon.ico
src/app/icon.png
src/app/apple-icon.png
```

Replace the existing files with yours. Keep the same filenames.

---

## Step 3 — Verify

Open [http://localhost:3000](http://localhost:3000) and check the browser tab for the new favicon.

:::info
Browser cache may show the old favicon. Hard reload with `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac) to force refresh.
:::
