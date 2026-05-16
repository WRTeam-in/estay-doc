---
id: firebase-setup
title: Firebase Setup
sidebar_position: 2
---

# Firebase Setup

The app uses Firebase for push notifications, authentication, and other Google services. A full step-by-step guide (with screenshots) is maintained on our common docs site.

Please visit our [Firebase Setup Documentation](https://wrteam-in.github.io/common_app_doc/GeneralSettings/firebase/) and follow **every step in the order shown**.

## Authentication Methods

The following authentication methods should be enabled in the Firebase console as per your app requirements:

| Method | Where to configure |
|--------|-------------------|
| Phone | Firebase console → Authentication → Sign-in method |
| Google | Firebase console → Authentication → Sign-in method |
| Apple | Firebase console → Authentication → Sign-in method |

:::note
**Email/Password** authentication is handled by the backend — no Firebase configuration needed for it.
:::

## What the Guide Covers

- Installing the Firebase CLI
- Creating a new Firebase project
- Registering the Flutter app with Firebase
- Logging in via terminal and running the FlutterFire configuration commands
- Generating and adding **Android SHA-1 / SHA-256** keys (debug, release, and Play App Signing)
- Configuring **iOS URL schemes** and `GoogleService-Info.plist`

:::tip
Do not skip the SHA-key steps for Android or the URL scheme steps for iOS — Google Sign-In  and Apple Sign-In will silently fail without them.
:::
