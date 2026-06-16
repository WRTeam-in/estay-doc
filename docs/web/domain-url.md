---
id: domain-url
title: Domain URL
---

# Where to Set Admin URL & Web URL

eStay web needs two URLs configured — the **Admin Panel URL** and the **Web App URL**. Both are set inside the project's configuration file.

---


## Step 1: Create Your `.env` File

The package includes a .env.example file containing all the required configuration variables. Before starting the setup, create a .env file by copying the contents of .env.example.

:::warning
Make sure to complete this step before running the application. Skipping it may result in errors during startup.
:::

---

## Step 2 — Open the Environment File

Open the `.env` file in the project root:

```
.env
```

:::info
If `.env` does not exist, copy `.env.example` to `.env` and fill in your values.
:::

---

## Step 3 — Set Admin Panel URL

Find `NEXT_PUBLIC_ADMIN_PANEL_URL` and replace the placeholder with your actual admin panel domain.

```env
NEXT_PUBLIC_ADMIN_PANEL_URL=https://admin.yourdomain.com
```

:::warning
Admin panel must be on a **subdomain** (e.g., `admin.yourdomain.com`). Do not use the same domain as the web app. SSL is mandatory.
:::

![Admin URL configuration](/images/web/admin_url.png)

---

## Step 4 — Set Web App URL

Find `NEXT_PUBLIC_WEB_URL` and set it to your main domain.

```env
NEXT_PUBLIC_WEB_URL=https://yourdomain.com
```

![Web URL configuration](/images/web/web_url.png)

