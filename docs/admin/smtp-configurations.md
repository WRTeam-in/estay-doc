---
id: SMTP Mail-configurations
title: SMTP mail Configurations
---

# MAIL  Configurations

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

