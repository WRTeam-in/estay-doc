---
id: ad-spaces
title: Ad Spaces
---

# Ad Spaces

Ad Spaces let you manage advertisement placements inside the eStay app. You can configure Google AdMob ad units for Android and iOS separately, or disable ads globally.

Navigate to the **Ad Spaces** section in the admin sidebar.

![Ad Spaces List](/images/panel/ad-spaces-list.png)

## Supported Ad Types

| Ad Type | Description |
|---|---|
| Banner | Persistent banner shown at the top or bottom of a screen |
| Interstitial | Full-screen ad shown between navigation transitions |
| Native | Ads styled to match the surrounding app content |

## Supported Ad Providers

- **Google AdMob** — enter Ad Unit IDs from your AdMob account
- **Custom Image Ads** — upload your own promotional banners

## Ad Space Fields

| Field | Description |
|---|---|
| Ad Space Name | Display name identifying the placement (e.g., Home Page Banner) |
| Ad Type | Banner, Interstitial, or Native |
| Platform | Android, iOS, or Both |
| Android Ad Unit ID | Ad Unit ID from your AdMob account for Android |
| iOS Ad Unit ID | Ad Unit ID from your AdMob account for iOS |
| Status | Active (ads shown) or Inactive (ads hidden) |

## Steps to Configure an Ad Space

1. Go to **Ad Spaces** in the admin sidebar.
2. Click on the ad space you want to configure (e.g., **Home Page Banner**).

![Ad Spaces Edit](/images/panel/ad-spaces-edit.png)

3. Enter the **Android Ad Unit ID** from your AdMob dashboard.
4. Enter the **iOS Ad Unit ID** from your AdMob dashboard.
5. Set **Platform** to Android, iOS, or Both.
6. Toggle **Status** to **Active**.
7. Click **Save**.

:::info
Ad Unit IDs are unique per placement and per platform. Get them from your [Google AdMob](https://admob.google.com) account under **Apps → Ad Units**.
:::

:::warning
Test Ad Unit IDs provided by Google should only be used during development. Always replace them with your real Ad Unit IDs before going live.
:::

## Disabling Ads Globally

To turn off all ads without deleting configuration, set each ad space status to **Inactive**. This prevents any ads from rendering in the app while preserving your Ad Unit IDs for future use.
