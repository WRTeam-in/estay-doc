---
id: map-provider
title: Map Provider (OSM & Google Maps)
---

# Map Provider

The platform uses a map provider in two places: the **map picker** (dropping a pin on a map when adding/editing a property) and **nearby places search** (finding attractions, airports, and transit stations to attach to a city).

:::info Default: OpenStreetMap — free, no setup
By default the platform runs on **OpenStreetMap (OSM)**. It's free, open-source, and needs **no API key at all** — the map picker and nearby-places search both work immediately on a fresh install. **Google Maps is entirely optional**, only needed if you specifically want Google's data instead.
:::

:::info Applies to both modes
This is a single global setting — it works identically whether the platform is running in Single Mode or Multi Mode.
:::

---

## Where to Find This Setting

In your admin dashboard, go to **Settings > General**, then open the **API Integrations** tab. The **Map Provider** section is at the top.

| Option | Cost | Setup required | Notes |
|---|---|---|---|
| **OpenStreetMap** (default) | Free | None | Selected out of the box — nothing to configure |
| **Google Maps** | Google's usage-based pricing after their free tier | Two API keys | Switch to this only if you specifically want Google's map/places data |

Switching the **Map Provider** dropdown to **Google Maps** reveals a **Google Maps & Places API** section below it for the two keys, described next. Switching back to **OpenStreetMap** hides that section again — no keys are needed, and any keys you'd saved stay in place but unused.

---

## If You Choose Google Maps

Google requires **two** separate keys — this is a security requirement from Google, not a platform quirk. Each key is used in a different place and locked down differently so it can't be stolen and misused:

| Key | Used By | Runs In | How It's Locked Down |
|---|---|---|---|
| **Browser Key** | The map picker | The customer's web browser | **HTTP referrer** restriction (only your website's address can use it) |
| **Server Key** | Nearby places search | Your server | **IP address** restriction (only your server can use it) |

A browser key is visible in the page's code (that's unavoidable for maps to load), so it's locked to your domain. A server key is never shown publicly, so it's locked to your server's IP. **One key cannot do both jobs**, because the two restriction types are mutually exclusive — that's why you create two.

:::tip In short
**Browser Key = "show the map"**, **Server Key = "look things up"**. Each is restricted differently so neither can be abused if leaked.
:::

### Step 1: Open Google Cloud Console

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (or select an existing one) from the project dropdown at the top.

### Step 2: Enable the Required APIs

In the Cloud Console, go to **APIs & Services → Library** and enable:

- **Maps JavaScript API**
- **Places API (New)**

:::warning
Make sure you enable **Places API (New)**, not the older "Places API". The platform uses the new version.
:::

### Step 3: Create the Browser Key

1. Go to **APIs & Services → Credentials**.
2. Click **Create credentials → API key**.
3. Open the new key and set:
   - **Application restrictions:** *HTTP referrers (web sites)* — add your website address (e.g. `https://yourdomain.com/*`).
   - **API restrictions:** allow **Maps JavaScript API** and **Places API (New)**.
4. Copy this key — it's your **Browser Key**.

### Step 4: Create the Server Key

1. Again in **Credentials**, click **Create credentials → API key**.
2. Open this second key and set:
   - **Application restrictions:** *IP addresses* — add your server's public IP address.
   - **API restrictions:** allow **Places API (New)** only.
3. Copy this key — it's your **Server Key**.

:::info Finding your server IP
If you don't know your server's outbound IP, ask your hosting provider, or check your hosting control panel. This is the IP your server uses to make outbound requests.
:::

### Step 5: Enter the Keys and Switch the Provider

Back in **Settings > General > API Integrations**, set **Map Provider** to **Google Maps**, then fill in:

| Field | What to Enter |
|---|---|
| **Google Maps Browser Key** | The Browser Key from Step 3 (starts with `AIza...`). Used for the map picker. Restrict by **HTTP referrer**; allow **Maps JavaScript API + Places API (New)**. |
| **Google Places Server Key** | The Server Key from Step 4 (starts with `AIza...`). Used for nearby-places search. Restrict by **IP**; allow **Places API (New)** only. |

Both fields are masked — click the **eye icon** to reveal a value and confirm it's correct.

![Google Maps API Settings](/images/panel/googleapi.png)

### Step 6: Save

Click **Save**. The map picker and nearby-places search switch to Google Maps immediately.

### Troubleshooting (Google Maps mode)

| Problem | Likely Cause & Fix |
|---|---|
| The map doesn't load / shows "For development purposes only" | The **Browser Key** is missing, or its **HTTP referrer** doesn't match your domain, or **Maps JavaScript API** isn't enabled. |
| Nearby places search returns nothing or errors | The **Server Key** is missing, or its **IP restriction** doesn't match your server's IP, or **Places API (New)** isn't enabled for it. |
| Worked locally but not in production (or vice-versa) | Referrer/IP restrictions are environment-specific. Add your production domain and production server IP to the respective keys. |

:::warning Don't swap the keys
Pasting the server key into the browser field (or vice-versa) is the most common mistake. The browser field needs the **referrer-restricted** key; the server field needs the **IP-restricted** key.
:::

---

## Switching Back to OpenStreetMap

Set **Map Provider** back to **OpenStreetMap** and save. No keys are needed — the map picker and nearby-places search go back to working immediately, free of charge.

---

## Where to Go Next

- **Where the map picker is actually used** → [Property Management](./property-management.md).
