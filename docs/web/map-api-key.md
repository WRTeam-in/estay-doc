---
id: map-api-key
title: Map & Place API Key
---

# How to Get Map & Place API Key

eStay uses two Google APIs:

| API | Purpose |
|-----|---------|
| **Maps JavaScript API** | Display property locations on map |
| **Places API** | Location search and autocomplete |

Both are enabled under the same Google Cloud project and the key is added to `.env`.

---

## Step 1 — Open Google Cloud Console

Go to [https://console.cloud.google.com](https://console.cloud.google.com) and select or create your project.

![GCP Console](/images/web/gcp_page.png)

---

## Step 2 — Enable Maps JavaScript API

1. Go to **APIs & Services** → **Library**
2. Search **Maps JavaScript API**
3. Click it → press **Enable**

![Enable Maps JavaScript API](/images/web/gcp_map.png)

---

## Step 3 — Enable Places API

1. Stay in **APIs & Services** → **Library**
2. Search **Places API**
3. Click it → press **Enable**

![Enable Places API](/images/web/gpc_place.png)

---

## Step 4 — Open Credentials Page

Go to **APIs & Services** → **Credentials**.

![GCP Credentials](/images/web/gcp_creds.png)

---

## Step 5 — Create Map API Key

1. Click **+ Create Credentials** → **API Key**
2. Key is generated

![Create Map API Key](/images/web/gcp_create_map_api.png)

3. Copy the key

![Copy Map API Key](/images/web/copy_map_key.png)

---

## Step 6 — Create Place API Key

1. Click **+ Create Credentials** → **API Key** again
2. Key is generated

![Create Place API Key](/images/web/gcp_create_place_api.png)

3. Copy the key

![Copy Place API Key](/images/web/copy_place_key.png)

---

## Step 7 — Add Map Key to .env

Open `.env` in the project root and paste the Maps JavaScript API key:

```env
NEXT_PUBLIC_MAP_API_KEY=your-maps-javascript-api-key
```

![Map API Key in env](/images/web/map_api.png)

---

## Step 8 — Add Place Key to Admin Panel

Place API key goes into the admin panel, not `.env`.

1. Open your admin panel
2. Go to **Settings** → **System Configure** → **API Integrations**
3. Find **Google Place API**
4. Paste your Place API key into **Google Place API Key** field
5. Click **Save Settings**

![Paste Place API Key in Admin](/images/web/paste_place_key.png)

:::warning
Restrict both keys to your domain in Google Cloud Console → **Credentials** → **Edit Key** → **Website restrictions**. Unrestricted keys are a billing risk.
:::
