---
id: pwa-setup
title: PWA Setup
---

# PWA Setup Guide

Progressive Web App (PWA) lets users install eStay on their phone home screen and use it like a native app — with offline support, fast loading, and push notifications.

---

## What's Already Done (No Action Needed)

| Feature | File |
|---------|------|
| Web App Manifest | `public/manifest.json` |
| Service Worker (caching + push) | `public/firebase-messaging-sw.js` |
| Install Banner (mobile) | `src/components/pwa/InstallPrompt.tsx` |
| Offline Page | `src/app/offline/page.tsx` |
| PWA Meta Tags | `src/app/layout.tsx` |

---

## Step 1 — Replace Icons (Required)

Place the following icon files inside `public/`:

| File | Size | Notes |
|------|------|-------|
| `favicon.ico` | 48×48 | Browser tab icon |
| `favicon.svg` | vector | Modern browser tab |
| `favicon-96x96.png` | 96×96 | General purpose |
| `apple-touch-icon.png` | 180×180 | iOS home screen icon |
| `web-app-manifest-192x192.png` | 192×192 | Android install icon |
| `web-app-manifest-512x512.png` | 512×512 | Android splash screen |

:::info
**Maskable icon rule:** For `web-app-manifest-192x192.png` and `web-app-manifest-512x512.png`, keep the logo inside the center **60%** of the canvas. Fill the outer 40% with your brand background color. This prevents Android from cropping the logo when applying circle/squircle shapes.

**Free tool to generate all sizes:** [https://realfavicongenerator.net](https://realfavicongenerator.net)
:::

---

## Step 2 — Update manifest.json

Open `public/manifest.json` and update these fields:

```json
{
  "name": "Your App Full Name",
  "short_name": "ShortName",
  "description": "Your app description",
  "theme_color": "#your-brand-color",
  "background_color": "#ffffff"
}
```

| Field | What It Does |
|-------|-------------|
| `name` | Full name shown on install prompt |
| `short_name` | Name shown under home screen icon (max ~12 chars) |
| `theme_color` | Color of the browser address bar and status bar |
| `background_color` | Splash screen background color while app loads |

---

## Step 3 — Update App Shortcuts (Optional)

Shortcuts appear when a user long-presses the home screen icon on Android.

In `public/manifest.json`, edit the `shortcuts` array:

```json
"shortcuts": [
  {
    "name": "My Bookings",
    "url": "/en/my-bookings",
    "description": "View your bookings"
  },
  {
    "name": "Browse Properties",
    "url": "/en/properties",
    "description": "Browse available properties"
  }
]
```

Change `url` values to match your app's actual routes.

---

## Step 4 — Update Cache Version (When Deploying New Build)

When deploying a new version, bump the cache version in `public/firebase-messaging-sw.js` so old caches are cleared for all users:

```js
// Line ~18 in firebase-messaging-sw.js
const CACHE_VERSION = 'v2';  // increment this on each deploy
```

:::warning
If you don't bump this, users may continue seeing stale cached pages after deployment.
:::

---

## Step 5 — Test PWA (Before Going Live)

### Desktop (Chrome DevTools)

1. Open app in Chrome
2. Press `F12` → go to **Application** tab
3. Check:
   - **Manifest** → app name, icons, all green
   - **Service Workers** → `firebase-messaging-sw.js` status = `activated and running`
   - **Cache Storage** → `estay-static-v1` and `estay-images-v1` should have files

### Android (Chrome)

1. Open app in Chrome on Android
2. Wait a few seconds → floating **"Install eStay"** banner appears at bottom
3. Tap **Install** → app added to home screen
4. Open from home screen → runs in standalone mode (no browser UI)

### iOS (Safari)

1. Open app in Safari on iPhone
2. Tap the **Share** button (box with arrow)
3. Tap **"Add to Home Screen"**
4. App icon appears on home screen

### Test Offline

1. Open the installed app
2. Turn off Wi-Fi / mobile data
3. Navigate to a new page → offline page should show
4. Previously visited pages and images → load from cache

---

## Step 6 — Verify Install Prompt Behavior

The install banner (`InstallPrompt.tsx`) shows only when:

- User is on **mobile** (screen width < 768px)
- App is **not already installed**
- User has **not dismissed** it this session

To make the banner persist across sessions (show again after dismiss), change `sessionStorage` to `localStorage` in `src/components/pwa/InstallPrompt.tsx`:

```ts
// change sessionStorage → localStorage
localStorage.setItem(DISMISS_KEY, '1')
localStorage.getItem(DISMISS_KEY)
```

---

## Caching Rules

| Request Type | Strategy | Reason |
|-------------|----------|--------|
| Images (same origin) | Cache-first | Fast load, works offline |
| `/_next/static/` assets | Stale-while-revalidate | Instant load, refreshes in background |
| Page navigation (HTML) | Network-first → offline fallback | Always fresh, graceful offline |
| `/api/` routes | Not cached | Booking/auth data must always be live |
| External images (CDN) | Not cached | Cross-origin, cannot intercept |

---

## Common Issues

**Install banner not showing on Android?**
- Must be served over **HTTPS** (localhost works for testing)
- Browser requires user to have visited the site for **30+ seconds** before showing prompt
- Already installed = banner won't show again

**Icons not updating after replacing files?**
- Hard refresh: `Ctrl+Shift+R` (Windows) / `Cmd+Shift+R` (Mac)
- Or in DevTools → Application → Service Workers → click **Update**

**Service worker not activating?**
- Check browser console for errors in `firebase-messaging-sw.js`
- In DevTools → Application → Service Workers → click **skipWaiting** to force activate

**Offline page not working?**
- Must visit the app at least once while online first (so SW can cache the offline page)
- Check DevTools → Cache Storage → `estay-static-v1` → `/offline` should be listed
