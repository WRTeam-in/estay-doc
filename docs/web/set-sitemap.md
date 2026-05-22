---
id: set-sitemap
title: Set Sitemap
---

# Sitemap

eStay web generates a sitemap automatically — no manual build step or config file needed.

---

## How It Works

The sitemap is served dynamically at `/sitemap.xml` via a Next.js route handler:

```
src/app/sitemap.xml/route.ts
```

- Runs **server-side only** — no client JS involved
- Fetches latest data from the backend API on every request
- **Cached for 1 hour** (`revalidate: 3600`) — auto-busts on every new deploy
- Browser view renders as a styled HTML table (via `public/sitemap.xsl`) — crawlers ignore the stylesheet and read raw XML directly, so hreflang, URLs, and priorities are all indexed normally

---

## What's Included

| Type | Source | Update Frequency |
|------|--------|-----------------|
| Static pages (home, about, blogs, etc.) | Hardcoded | Daily / Weekly |
| Property pages | `/api/properties` | Daily |
| Room pages | `/api/properties/rooms` | Daily |
| Blog pages | `/api/blogs` | Weekly |

---

## Multi-Language Support

Languages are fetched dynamically from `/api/settings`.

- Every URL is generated for **all active language codes** (e.g. `/en/`, `/ar/`, `/hi/`)
- Each URL includes `xhtml:link` hreflang alternates pointing to all other language versions
- Adding a new language in the admin panel → appears in sitemap automatically within 1 hour

---

## Sitemap URL

Once deployed, your sitemap is available at:

```
https://yourdomain.com/sitemap.xml
```

---

## Submit to Search Engines

### Google Search Console

1. Go to [https://search.google.com/search-console](https://search.google.com/search-console)
2. Select your property
3. Click **Sitemaps** in the left menu
4. Enter `sitemap.xml` and click **Submit**

### Bing Webmaster Tools

1. Go to [https://www.bing.com/webmasters](https://www.bing.com/webmasters)
2. Select your site
3. Go to **Sitemaps**
4. Enter `https://yourdomain.com/sitemap.xml` and submit

:::info
No need to resubmit after content updates — the sitemap refreshes automatically every hour and reflects new properties, rooms, blogs, and languages.
:::
