---
id: integrate-firebase
title: Integrate Firebase
---

# How to Connect Firebase with eStay Web

Firebase is required for authentication and push notifications in eStay web. Follow the steps below to connect your Firebase project.

---

## Step 1 — Create a Firebase Project

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project**
3. Enter your project name and follow the setup wizard
4. Once created, click the **Web** icon (`</>`) to register a web app
5. Enter an app nickname and click **Register app**

Please visit our [Firebase Setup Documentation](https://wrteam-in.github.io/common_app_doc/GeneralSettings/firebase/) and follow **every step in the order shown**.

---

## Step 2 — Get Firebase Config

After registering the web app, Firebase will show your config object. Copy it — it looks like this:

```js
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};
```

---

## Step 3 — Add Config to Project

Open the `.env` file in the project root and add your Firebase config values:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

![Firebase configuration](/images/web/firebase_config.png)

---

## Step 4 — Get VAPID Key (Push Notifications)

VAPID key is required for web push notifications.

1. In Firebase Console, go to **Project Settings** → **Cloud Messaging** tab
2. Scroll down to **Web Push certificates**
3. Click **Generate key pair** if no key exists
4. Copy the **Key pair** value

![VAPID Key](/images/web/firebase_vapid_key.png)

---

## Step 5 — Add VAPID Key to Project

Open the `.env` file and add the VAPID key:

```env
NEXT_PUBLIC_FIREBASE_VAPID_KEY=your-vapid-key-here
```
![VAPID Key](/images/web/vapid_key.png)

---

## Step 6 — Enable Authentication

1. In Firebase Console, go to **Authentication** → **Sign-in method**
2. Enable **Phone** (for OTP login)
3. Add your domain to **Authorized domains**

:::info
Add both your production domain and `localhost` to authorized domains during development.
:::
