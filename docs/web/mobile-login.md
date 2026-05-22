---
id: mobile-login
title: Mobile Login (OTP)
---

# How to Enable Mobile Login (OTP)

eStay web supports phone number authentication via OTP (One-Time Password) using Firebase Authentication.

---

## Prerequisites

Firebase must be integrated first. See [Integrate Firebase](./integrate-firebase).

---

## Step 1 — Enable Phone Authentication in Firebase

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Go to **Authentication** → **Sign-in method**
4. Click **Phone** and toggle it **Enabled**
5. Click **Save**

---

## Step 2 — Add Authorized Domains

1. In Firebase Console, go to **Authentication** → **Settings** → **Authorized domains**
2. Add your production domain: `yourdomain.com`
3. Add `localhost` for local development

---

## Step 3 — Configure reCAPTCHA (Automatic)

Firebase phone auth uses invisible reCAPTCHA automatically. No extra setup needed — Firebase handles it via the SDK.

:::info
If you see reCAPTCHA errors in development, make sure `localhost` is in Firebase's authorized domains list.
:::

---

## Step 4 — Test OTP Flow

1. Start the dev server: `npm run dev`
2. Go to the login page
3. Enter a valid phone number with country code
4. You should receive an OTP SMS
5. Enter the OTP to complete login

:::warning
SMS OTP delivery may incur charges depending on your Firebase plan and country. Check [Firebase pricing](https://firebase.google.com/pricing) before going live.
:::
