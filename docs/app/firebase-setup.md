---
id: firebase-setup
title: Firebase Setup
sidebar_position: 2
---

# Firebase Setup

The app uses Firebase for push notifications, authentication, and other Google services. Follow **every step in the order shown** below.

:::caution
You must use the **same Firebase project** for the app, web, and panels to ensure seamless integration.
:::

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

## Step 1: Install Firebase CLI

Before creating a Firebase app from Flutter, you must install the **Firebase CLI**. Follow the official guide: [Firebase CLI Installation Guide](https://firebase.google.com/docs/cli).

## Step 2: Create a Firebase Project

1. Open the **Firebase Console** and click **Create a Project**.

   ![firebase](./images/firebase1.png)

2. Enter your **project name** and press **Continue**.

   ![firebase](./images/firebase2.png)

3. Press **Continue** on the next screen.

   ![firebase](./images/firebase3.png)

4. Click **Create Project** and wait for the setup to complete.
5. Once done, press **Continue**.

## Enable Firebase Authentication

1. **Open Firebase Console**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project

2. **Enable Authentication Methods**
   - Go to **Authentication** > **Sign-in method**
   - Click **Add New Provider**
   - Enable the required sign-in methods (e.g., Apple, Phone, Google)

   ![firebase](./images/firebase15.png)

   :::note
   To enable mobile authentication, please upgrade your Firebase plan from Spark to Blaze.
   :::

3. **Enable SMS Authentication for specific regions**
   - Go to **Authentication** > **Settings**
   - Go to **SMS region policy** in the SMS section
   - Click on **Allow**
   - Add the regions where you want to enable SMS authentication for OTP log-in.

   ![firebase](./images/firebase20.png)

## Step 3: Create a Firebase App for Flutter

1. Select **Flutter** as the app type (refer to the image below).

   ![firebase](./images/firebase6.png)

2. Press **Next** to continue.

   ![firebase](./images/firebase7.png)

## Step 4: Log in to Firebase via Terminal

1. Open a **CLI Terminal** (e.g., Visual Studio Code, Android Studio).
2. Run the following command to log in `(if you are already logged in, then you can move to step 5)`:

   ```
   firebase login
   ```

   ![firebase](./images/firebase8.png)

3. A browser window will open—log in to your Firebase account.
4. When prompted, allow Firebase to collect CLI usage data by entering `YES` and pressing Enter.

## Step 5: Run Firebase Initialization Commands

1. In the **CLI Terminal**, run the first Firebase setup command (as per the provided image).

   ![firebase](./images/firebase9.png)

2. Run the second Firebase setup command in the terminal.

   ![firebase](./images/firebase10.png)

3. When the terminal asks for confirmation, press Enter.

   ![firebase](./images/firebase11.png)

4. If prompted again, press Y to confirm.

   ![firebase](./images/firebase12.png)

## Step 6: Finalizing Firebase Setup

1. Press **Next** to continue.

   ![firebase](./images/firebase13.png)

2. Click **Continue to Console**.

   ![firebase](./images/firebase14.png)

## Add SHA-1 & SHA-256 Keys in Firebase

### For Android

For Android, you need to add a total of three pairs of SHA-1 and SHA-256 keys to Firebase by following the steps below.

#### For Debug Build

1. Open your project code in a **CLI Terminal** (e.g., Visual Studio Code, Android Studio).
2. Run the following command in your project's root folder:

   **For Mac/Linux**

   ```
   cd android
   ./gradlew signingReport
   ```

   **For Windows**

   ```
   cd android
   gradlew signingReport
   ```

3. Copy the SHA1 and SHA256 keys from the output.

   ![firebase](./images/firebase16.png)

4. Open the Firebase Console.
5. Go to **Project Settings > General > Android App**.
6. Add the copied SHA1 and SHA256 keys.

   ![firebase](./images/firebase17.png)

#### For Release Build

1. To generate a **keystore file**, run the following command in your project's terminal:

   **For Mac/Linux**

   ```
   keytool -genkey -v -keystore YOUR-KEYSTORE-FILE.jks -keyalg RSA -keysize 2048 -validity 10000 -alias YOUR-ALIAS
   ```

   **For Windows**

   ```
   keytool -genkey -v -keystore YOUR-KEYSTORE-FILE.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias YOUR-ALIAS
   ```

   :::note
   - You can replace **"YOUR-KEYSTORE-FILE.jks"** with your preferred filename, but ensure you keep the **".jks"** extension. Similarly, you can change **"YOUR-ALIAS"** as needed, but make sure to remember it.
   - During this process, you will be prompted to set a password; please note that the password characters won't be visible on the screen.
   - Additional information may be requested, but you can simply press Enter to skip those as they are optional fields.
   :::

2. Create a file named **key.properties** in your project's `android` folder.
3. Add the following details, which correspond to the information you used in the previous step:

   ```
   storePassword=[your-password-from-previous-step]
   keyPassword=[your-password-from-previous-step]
   keyAlias=[your-alias-from-previous-step]
   storeFile=[your-keystore-file-location]
   ```

   :::note
   Replace the placeholders ("[]" brackets) with the actual details you used.
   :::

4. You need to add the release SHA keys to Firebase.
5. Get the release SHA keys by running the following command:

   ```
   keytool -list -v -keystore "YOUR_KEYSTORE_FILE_PATH" -alias YOUR_ALIAS_NAME
   ```

   :::note
   Replace **YOUR_KEYSTORE_FILE_PATH** with your own keystore file path and also replace **YOUR_ALIAS_NAME** with your own keystore alias.
   :::

6. Enter the keystore password when prompted.
7. Copy and paste the SHA keys into the Firebase Console.

   ![firebase](./images/firebase19.png)

:::note
Please do not forget to add the following keys to the Firebase Console. Without these, **authentication** will not be allowed for your app when it's in production.
:::

#### For App Signing

1. After creating the app on the Google Play Console, go to **View app**.
2. Go to **Test and release > Setup > App Signing**.
   - Copy the SHA1 and SHA256 keys from the `App signing key certificate` and paste them into the Firebase Console.

   ![firebase](./images/firebase18.png)

### For iOS Authentication Setup

1. Open Xcode > open your project's **ios** folder.
2. Go to the **Signing & Capabilities** tab.
3. Add the **Sign In With Apple** capability.
4. Select a Team in the Code Signing section.

   ![firebase](./images/firebase21.png)

#### Configure URL Schemes for Firebase Authentication

1. Select the **Info** tab under your project.
2. Expand **URL Types**.
3. Click + and add a new URL scheme.
4. Find `REVERSED_CLIENT_ID` inside **GoogleService-Info.plist**.
5. Copy and paste it into the URL Schemes field.

   ![firebase](./images/firebase22.png)

6. Go to the **Firebase Console > Project Settings > Apple apps**.
7. Copy the **Encoded App ID**.

   ![firebase](./images/firebase23.png)

8. Click + and add a new URL scheme (in Xcode).
9. Paste the **Encoded App ID** into the URL Schemes field.

   ![firebase](./images/firebase24.png)

:::tip
Do not skip the SHA-key steps for Android or the URL scheme steps for iOS — Google Sign-In and Apple Sign-In will silently fail without them.
:::
