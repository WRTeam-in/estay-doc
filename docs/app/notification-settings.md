---
id: notification-settings
title: Notification Settings
sidebar_position: 4
---

# Notification Settings

Configure push notifications across the admin panel, Firebase, Android, and iOS so users receive real-time updates from the app. This guide walks you through integrating Firebase Cloud Messaging (FCM) for your Flutter project.

To enable FCM notifications, first register your application with Firebase. If you haven't already created a Firebase project, set one up. If a project already exists, you can skip that step.

## Admin Panel

Find the **Notification settings** in your Admin panel and add the **Firebase Project ID** & **Service Account File** there to link with your Firebase project.

- Find the **Firebase Project ID** from **Project Settings > General Properties** in the [Firebase Console](https://console.firebase.google.com/).
- Find the **Service Account File** from **Project Settings > Service accounts** tab, and click the **Generate new private key** button there. Once the JSON file is downloaded, go to the Admin panel and upload it. You're done with the Admin panel settings for Notifications.

![notifications](./images/notifications-firebase.png)

## Android

All necessary dependencies, service classes, and configurations are already included in the project, so no additional coding is required. Simply download the **`google-services.json`** file and place it in your Flutter project at **`android/app/`** (replace the existing file if needed).

## iOS

Follow these steps:

1. Open your **ios folder** from your IDE (VS Code or Android Studio) OR open the **Runner.xcworkspace** file from Finder in Xcode and select your app's target.
2. Enable **Push Notifications** under the **Capabilities** tab.
3. Enable **Remote Notifications** and **Background Fetch** under **Background Modes**.

   ![notifications](./images/notifications-xcode-capabilities.png)

4. Replace the existing **`GoogleService-Info.plist`** with the latest one after following the guide below, or add it to your Flutter project at **`ios/Runner/`**.

An **Apple Developer Account** is required to generate Apple Push Notifications for your project.

APNs supports two connection methods: **Token-based (.p8)** and **Certificate-based (.p12)**. You can use one based on your requirements.

:::tip
The `.p8` token-based method is preferred over `.p12` certificates — tokens don't expire and a single key works for both development and production.
:::

### Token-based (.p8) [Preferred]

1. Log in to the [Apple Developer Portal](https://developer.apple.com/account/).
2. Enable Push Notifications:
   - Navigate to **Certificates, Identifiers & Profiles > Identifiers**.
   - Select your App ID and enable **Push Notifications** under **Capabilities**.

     ![notifications](./images/notifications-apn.png)

3. Create a Universal APNs Key (Recommended):
   - In the Developer Portal, go to **Certificates, Identifiers & Profiles > Keys**.
   - Click the add button (+) to create a new key.
   - Enable **Apple Push Notifications service (APNs)** and click **Continue**.
   - Name the key, register it, and download the **.p8** file. **Save this file securely**, as it can only be downloaded once.
     - Key ID (found in the Apple Developer Portal under "Keys")
     - Team ID (found under Apple Developer account settings)

     ![notifications](./images/notifications-apn-3.png)

     ![notifications](./images/notifications-apn-4.png)

4. Configure Firebase:
   - In the [Firebase Console](https://console.firebase.google.com/), navigate to your project settings.
   - Under the **Cloud Messaging** tab > Apple app configuration section, select your iOS App, upload the **.p8** file, and enter the **Key ID** and **Team ID** in the APNs Authentication Key.

     ![notifications](./images/notifications-firebase-p8.png)

By following these steps, you'll successfully set up Push Notifications for your iOS app.

### Certificate-based (.p12)

1. Log in to the [Apple Developer Portal](https://developer.apple.com/account/).
2. Go to **Certificates, IDs & Profiles > Identifiers** and select your App ID.
   - Enable **Push Notifications** under **Capabilities** and save.
3. Create an APNs Certificate:
   - Follow Apple's guide to [create a Certificate Signing Request (CSR)](https://developer.apple.com/help/account/certificates/create-a-certificate-signing-request/).
   - In the Developer Portal, go to **Push Notifications > Configure** and create a **Development** or **Production SSL Certificate**.
   - Upload the CSR, generate the certificate, and **download** it, then export to .p12:
   - Open the **.cer** file in Keychain Access.
   - Go to **File > Export Items**, select **.p12 format**, and save it securely.
4. Provisioning Profile:
   - Navigate to **Provisioning Profiles**, select the profile, edit if needed, and download it.
   - Double-click to install it in Xcode.
5. Upload to Firebase:
   - Use the **.p12 file** in the [Firebase Console](https://console.firebase.google.com/) under the **Cloud Messaging** tab > Apple app configuration section, select your iOS App, and upload the certificate in the APNs Certificates option.

     ![notifications](./images/notifications-firebase-p12-1.png)

     ![notifications](./images/notifications-firebase-p12-2.png)

Now, your app is set up to receive push notifications!
