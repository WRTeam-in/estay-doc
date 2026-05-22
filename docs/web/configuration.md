---
id: configuration
title: Configuration (.env)
---

# Configuration (.env)

All environment variables for eStay web live in the `.env` file at the project root. Configure everything here before running or building the project.

:::info
If `.env` does not exist, copy `.env.example` to `.env` and fill in your values.
:::

---

## Complete .env Reference

```env
# ─── URLs ────────────────────────────────────────────────
NEXT_PUBLIC_ADMIN_PANEL_URL=https://admin.yourdomain.com
NEXT_PUBLIC_WEB_URL=https://yourdomain.com

# ─── Website Identity ────────────────────────────────────
NEXT_PUBLIC_WEBSITE_NAME=eStay

# ─── Firebase ────────────────────────────────────────────
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
NEXT_PUBLIC_FIREBASE_VAPID_KEY=

# ─── Maps ────────────────────────────────────────────────
NEXT_PUBLIC_MAP_API_KEY=

# ─── SEO & Meta ──────────────────────────────────────────
NEXT_PUBLIC_META_TITLE=eStay — Find Your Perfect Stay
NEXT_PUBLIC_META_DESCRIPTION=Book hotels, homes, and rentals at the best prices.
NEXT_PUBLIC_META_KEYWORDS=hotel booking, stay, rental, accommodation

# ─── Social Media ────────────────────────────────────────
NEXT_PUBLIC_FACEBOOK_URL=
NEXT_PUBLIC_TWITTER_URL=
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_LINKEDIN_URL=
NEXT_PUBLIC_YOUTUBE_URL=

# ─── Monetization ────────────────────────────────────────
NEXT_PUBLIC_GOOGLE_ADSENSE_ID=

# ─── Maintenance ─────────────────────────────────────────
NEXT_PUBLIC_MAINTENANCE_MODE=false
```

---

## Variable Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_ADMIN_PANEL_URL` | ✅ | URL of your admin panel (must be subdomain) |
| `NEXT_PUBLIC_WEB_URL` | ✅ | URL of the web app |
| `NEXT_PUBLIC_WEBSITE_NAME` | ✅ | Site name shown in header and browser tab |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | ✅ | Firebase project API key |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | ✅ | Firebase auth domain |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | ✅ | Firebase project ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | ✅ | Firebase storage bucket |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | ✅ | Firebase messaging sender ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | ✅ | Firebase app ID |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | ⬜ | Firebase analytics (optional) |
| `NEXT_PUBLIC_FIREBASE_VAPID_KEY` | ✅ | Firebase VAPID key for push notifications |
| `NEXT_PUBLIC_MAP_API_KEY` | ✅ | Google Maps API key |
| `NEXT_PUBLIC_META_TITLE` | ✅ | Page title for SEO (max 60 chars) |
| `NEXT_PUBLIC_META_DESCRIPTION` | ✅ | Meta description for SEO (max 160 chars) |
| `NEXT_PUBLIC_META_KEYWORDS` | ⬜ | Comma-separated SEO keywords |
| `NEXT_PUBLIC_FACEBOOK_URL` | ⬜ | Facebook page URL |
| `NEXT_PUBLIC_TWITTER_URL` | ⬜ | Twitter/X profile URL |
| `NEXT_PUBLIC_INSTAGRAM_URL` | ⬜ | Instagram profile URL |
| `NEXT_PUBLIC_LINKEDIN_URL` | ⬜ | LinkedIn page URL |
| `NEXT_PUBLIC_YOUTUBE_URL` | ⬜ | YouTube channel URL |
| `NEXT_PUBLIC_GOOGLE_ADSENSE_ID` | ⬜ | Google AdSense publisher ID |
| `NEXT_PUBLIC_MAINTENANCE_MODE` | ⬜ | Set `true` to enable maintenance mode |

---

:::warning
Never commit your `.env` file to version control. Add it to `.gitignore` to keep credentials private.
:::
