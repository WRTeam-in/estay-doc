---
id: user-management
title: User Management
---

# User Management

View and manage all registered guests on your eStay platform.

**Navigate to:** Sidebar → **Users**

![User List](/images/panel/user-list.png)

---

## Viewing Users

The user list displays all registered accounts with key details:

| Column | Description |
|---|---|
| **Name** | Full name of the registered user. |
| **Email** | User's email address. |
| **Phone** | User's phone number (if provided). |
| **Joined Date** | Date the account was created. |
| **Total Bookings** | Number of bookings made by this user. |
| **Status** | Whether the account is active or blocked. |

---

## Searching and Filtering

Use the **search bar** to find users by name, email, or phone number.

---

## Viewing a User Profile

Click the **View** icon next to any user to open their full profile.

![User Detail](/images/panel/user-detail.png)

The profile view includes:

| Section | Details Shown |
|---|---|
| **Personal Info** | Name, email, phone, profile picture. |
| **Account Info** | Registration date, account status. |
| **Booking History** | List of all bookings made by this user with status and dates. |

---

## Blocking and Unblocking Users

To block a user:

1. Open the user's profile or use the action button in the list.
2. Click **Block User**.
3. Confirm the action.

A blocked user cannot log in or make new bookings. Their existing data is preserved.

To unblock, click **Unblock User** from the same location.

:::warning
Blocking a user does not cancel their active or upcoming bookings. Handle those separately in Booking Management if needed.
:::

---

## Deleting a User

To delete a user:

1. Click the **Delete** icon next to the user in the list.
2. Confirm the deletion.

:::info
User deletion is a **soft delete**. The user's account and booking history are retained in the database but the account becomes inaccessible.
:::

---

## Exporting Users

To export the user list:

1. Apply any search or filters as needed.
2. Click the **Export** button in the toolbar.
3. Select the export format: **CSV** or **Excel (XLSX)**.
4. The file will download automatically.
