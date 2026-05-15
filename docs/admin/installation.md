---
id: installation
title: Installation
---

# Installation

Install the eStay admin panel on your server via cPanel. Before starting, ensure your server meets the minimum requirements.

:::info Server Requirements
- PHP **8.2** or higher
- `upload_max_filesize` set to **100M**
- MySQL 5.7+ or MariaDB 10.3+
- BCMath, Ctype, Fileinfo, JSON, Mbstring, OpenSSL, PDO, Tokenizer, XML PHP extensions
:::

---

## Step 1: Login to cPanel

Log in to your hosting account's cPanel dashboard.

![cPanel Login](/images/panel/install-cpanel-login.png)

---

## Step 2: Create a Database

1. In cPanel, navigate to **MySQL Databases**.
2. Create a **new database** (e.g., `estay_db`).
3. Create a **new database user** with a strong password.
4. **Assign the user to the database** and grant **All Privileges**.

![Create Database](/images/panel/install-create-db.png)

:::warning
Note down your **DB Hostname**, **DB Name**, **DB Username**, and **DB Password** — you will need these during installation.
:::

---

## Step 3: Open File Manager

In cPanel, open **File Manager** and navigate to either:
- `public_html` — for the main domain
- Your subdomain's root folder — if installing on a subdomain

![File Manager](/images/panel/install-file-manager.png)

---

## Step 4: Upload the Zip File

Upload the downloaded zip file named **`Code vX.X - upload this on server.zip`** into the folder from Step 3.

![Upload Zip](/images/panel/install-upload-zip.png)

:::info
Only upload the file named **"upload this on server"** — do not upload the full package zip directly.
:::

---

## Step 5: Extract the Zip File

Right-click the uploaded zip file and select **Extract**. Confirm the extraction path is your target folder (`public_html` or subdomain root).

Once extracted, verify that files such as `index.php`, `artisan`, and the `app/` directory are present in the folder.

![Extract Zip](/images/panel/install-extract.png)

---

## Step 6: Find Your Purchase Code

You will need your Envato purchase code during installation.

Find it here: [Where Is My Purchase Code?](https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code)

---

## Step 7: Run the Installer

Open your browser and visit:

```
http://yourdomain.com/install
```

The installation wizard will appear. Fill in the following fields:

| Field | Description |
|---|---|
| **DB Hostname** | Usually `localhost` |
| **DB Username** | The database user created in Step 2 |
| **DB Password** | The database user's password |
| **DB Name** | The database name created in Step 2 |
| **Admin Email** | Email address for the admin account |
| **Admin Password** | Password for the admin account |
| **Purchase Code** | Your Envato purchase code |

![Installation Wizard](/images/panel/install-wizard.png)

---

## Step 8: Complete Installation

Click the **Install** button. The installer will:

1. Verify the database connection
2. Run database migrations and seeders
3. Generate the application key
4. Create the admin account

Once complete, you will see a success screen with a link to your admin panel.

![Installation Complete](/images/panel/install-complete.png)

:::info
After installation, the `/install` route is automatically disabled for security. Attempting to visit it again will redirect you to the admin panel.
:::

---

## Logging In

Navigate to your admin panel at:

```
http://yourdomain.com/admin
```

Use the **Admin Email** and **Admin Password** you set during installation.
