---
id: staff-management
title: Staff Management
---

# Staff Management

Manage admin staff accounts and their permissions from the **System Users** section in the sidebar. You can add users, assign roles, configure role-based permissions, and control account access.

---

## Roles Overview

| Role | Access Level |
|---|---|
| Super Admin | Full access to all features and settings |
| Manager | Can manage bookings, properties, and users |
| Custom Role | Configurable permissions per module |

:::info
Super Admin is the highest-privilege role and cannot have its permissions restricted.
:::

---

## Staff List

![Staff List](/images/panel/staff-list.png)

The staff list displays all system users with their name, email, assigned role, and account status (active / inactive).

---

## Add a Staff Member

![Add Staff](/images/panel/staff-add.png)

1. Go to **System Users** in the sidebar.
2. Click **Add User**.
3. Enter the staff member's **Name**, **Email**, and **Password**.
4. Select a **Role** from the dropdown.
5. Click **Save**.

The new staff member will receive login access with the permissions defined by their assigned role.

---

## Enable / Disable Staff Accounts

From the staff list, toggle the account status to enable or disable a staff member's access without deleting their account.

---

## Roles Management

![Roles List](/images/panel/roles-list.png)

### Add a New Role

1. Go to the **Roles** section (under System Users or Settings).
2. Click **Add Role**.
3. Enter a **Role Name**.
4. Enable or disable permissions per module (see below).
5. Click **Save**.

### Edit an Existing Role

1. Go to **Roles**.
2. Click **Edit** on the role you want to modify.
3. Adjust the permissions as needed.
4. Click **Save**.

---

## Role Permissions

![Roles Permissions](/images/panel/roles-permissions.png)

Permissions are configured per module. Each module supports granular access controls such as view, create, edit, and delete.

| Module | Available Permissions |
|---|---|
| Bookings | View, Update Status, Cancel |
| Properties | View, Create, Edit, Delete |
| Users | View, Edit, Disable |
| Payments | View, Refund |
| Settings | View, Edit |
| Reports | View, Export |

Toggle each permission on or off when creating or editing a role. Staff members inherit only the permissions assigned to their role.

:::warning Role changes take effect immediately
When you update a role's permissions, all staff members assigned to that role are affected immediately — no re-login required.
:::
