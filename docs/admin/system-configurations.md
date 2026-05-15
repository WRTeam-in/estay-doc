---
id: system-configurations
title: System Configurations
---

# System Configurations

Manage core system integrations from **Settings → System Configurations**. This includes email (SMTP), Firebase, and Google Maps.

---

## SMTP / Email Settings

Configure outgoing email so the system can send booking confirmations, password resets, and other transactional emails.

Go to: **Settings → System Configurations → Email Settings**

![SMTP Settings](/images/panel/system-config-smtp.png)

| Field | Description |
|---|---|
| SMTP Host | Your mail server hostname (e.g., `smtp.gmail.com`) |
| SMTP Port | Port number (e.g., `587` for TLS, `465` for SSL) |
| SMTP Username | Your email address or SMTP login |
| SMTP Password | Your email account password or app password |
| Encryption | Select `TLS` or `SSL` |
| From Name | Sender name shown to recipients (e.g., `eStay Support`) |
| From Email | Sender email address (e.g., `no-reply@yourdomain.com`) |

### Steps

1. Go to **Settings → System Configurations → Email Settings**.
2. Fill in all SMTP fields.
3. Click **Save**.
4. Use the **Send Test Email** button to verify delivery.

:::info Gmail users
If you use Gmail, enable **2-Step Verification** on your account and generate an **App Password** to use as the SMTP password instead of your regular password.
:::

---

## Firebase Configuration

Firebase powers real-time features including push notifications and web push. Enter your Firebase project credentials here.

Go to: **Settings → System Configurations → Firebase Settings**

![Firebase Settings](/images/panel/system-config-firebase.png)

| Field | Where to Find It |
|---|---|
| API Key | Firebase Console → Project Settings → General → Web API Key |
| Auth Domain | `<project-id>.firebaseapp.com` |
| Project ID | Firebase Console → Project Settings → General |
| Storage Bucket | `<project-id>.appspot.com` |
| Messaging Sender ID | Firebase Console → Project Settings → Cloud Messaging |
| App ID | Firebase Console → Project Settings → General → Your apps |
| Measurement ID | Firebase Console → Project Settings → General (if Analytics enabled) |
| Vapid Key | Firebase Console → Project Settings → Cloud Messaging → Web Push certificates → Key pair |

### Steps

1. Open the [Firebase Console](https://console.firebase.google.com/) and select your project.
2. Go to **Project Settings → General → Your apps**.
3. If no web app exists, click **Add app → Web**, register the app, and copy the config values.
4. For the **Vapid Key**, go to **Project Settings → Cloud Messaging → Web Push certificates** and click **Generate key pair** if none exists.
5. Paste all values into **Settings → System Configurations → Firebase Settings**.
6. Click **Save**.

---

## Google Map API Key

The Google Map API key enables property location selection, address geocoding, and map display across the platform.

Go to: **Settings → System Configurations → Google Map API Key**

![Google Map Settings](/images/panel/system-config-google-map.png)

### Steps to Get the API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Select or create a project.
3. Navigate to **APIs & Services → Library**.
4. Enable the following APIs:
   - **Maps JavaScript API**
   - **Geocoding API**
   - **Places API**
5. Go to **APIs & Services → Credentials**.
6. Click **Create Credentials → API Key**.
7. Copy the generated key.

### Add to Admin Panel

1. Go to **Settings → System Configurations → Google Map API Key**.
2. Paste the key into the **API Key** field.
3. Click **Save**.

:::warning Restrict your API key
In Google Cloud Console, restrict the API key to your domain under **API restrictions** and **Application restrictions** to prevent unauthorized usage and unexpected billing.
:::
