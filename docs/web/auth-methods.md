---
id: auth-methods
title: Configure Auth Methods
sidebar_position: 5
---

# Configure Auth Methods

Both the **allowed login methods** and the **default country** shown in the country picker (used during phone-number login) are controlled from a single admin-panel screen.

## How to Access

1. Log in to the your **Admin Panel**.
2. Navigate to **Settings → System Configure**.

![System Configure Page](/images/web/appConfig.png)

## Allowed Authentication Methods

In the **Allowed Authentication Methods** section:

- **Select** the login methods you want to enable (Email, Google, Apple, Phone.).
- **Deselect** any method you want to hide from the app.
- Click **Save** — the app fetches the updated list on next launch and shows only the enabled login options.

:::tip
Each enabled method must also be fully configured in Firebase (e.g., Google Sign-In credentials, Apple Sign-In key, Phone OTP billing). Otherwise the option will appear in the app but fail at runtime.
:::