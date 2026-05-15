---
id: notification-management
title: Notification Management
---

# Notification Management

eStay uses Firebase Cloud Messaging (FCM) to send push notifications to users. Configure the Firebase service account and manage notifications from **Settings → Notification Settings**.

---

## 1. Firebase Server Key Setup (FCM)

FCM requires a service account JSON file to authenticate push notification requests.

![Firebase Service Account](/images/panel/firebase-service-account.png)

### Steps to Get the Service Account Key

1. Open the [Firebase Console](https://console.firebase.google.com/) and select your project.
2. Go to **Project Settings** (gear icon) → **Service Accounts** tab.
3. Click **Generate new private key**.
4. Confirm the prompt — a JSON file will be downloaded.

### Upload to Admin Panel

1. Go to **Settings → Notification Settings**.
2. Find the **Firebase Service Account** field.
3. Upload the downloaded JSON file.
4. Click **Save**.

![Notification Settings](/images/panel/notification-settings.png)

:::warning Keep this file secure
The service account JSON contains private credentials. Never expose it publicly or commit it to version control.
:::

---

## 2. Send Manual Notifications

You can send push notifications to all users or a specific user directly from the admin panel.

![Send Notification](/images/panel/notification-send.png)

### Steps

1. Go to the **Notifications** section in the sidebar.
2. Click **Send Notification**.
3. Select the target:
   - **All Users** — broadcasts to every registered user.
   - **Specific User** — search and select a single user.
4. Enter the **Title** and **Message**.
5. Click **Send**.

:::info Delivery
Notifications are delivered in real time to all devices where the user is logged in with the app.
:::

---

## 3. Notification Templates

Notification templates are predefined messages that are sent automatically when specific events occur in the system.

| Template | Trigger |
|---|---|
| Booking Confirmed | When a booking is successfully confirmed |
| Booking Cancelled | When a booking is cancelled by the user or admin |
| Booking Reminder | Sent before the check-in date |
| Payment Received | When a payment is successfully processed |
| Refund Issued | When a refund is initiated |

### Editing Templates

1. Go to **Settings → Notification Settings → Templates**.
2. Select the template you want to edit.
3. Update the **Title** and **Message** body.
4. Use available placeholders (e.g., `{user_name}`, `{booking_id}`) to personalize the message.
5. Click **Save**.
