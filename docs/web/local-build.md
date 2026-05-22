---
id: local-build
title: Local Build
---

# How to Build the Project Locally

A local build compiles the Next.js app into optimized static/server output. Run this before deploying to test the production build on your machine.

---

## Step 1 — Build the Project

```bash
npm run build
```

This runs Next.js compilation, optimization, and generates the `.next` folder.

A successful build outputs something like:

```
Route (app)                     Size     First Load JS
┌ ○ /                           5.2 kB   102 kB
├ ○ /property/[id]              3.8 kB   99 kB
└ ...

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
```

---

## Step 2 — Start the Production Server Locally

After a successful build, run:

```bash
npm run start
```

Visit [http://localhost:3000](http://localhost:3000) to preview the production build.

---

## Common Build Errors

| Error | Fix |
|-------|-----|
| `Module not found` | Run `npm install` first |
| `Environment variable missing` | Check all required keys in config |
| `Type errors` | Fix TypeScript/ESLint errors before building |

:::info
Always test a local production build before deploying — it catches issues that dev mode may hide.
:::
