---
id: nextjsdeploy
title: Deploy to Server
---

# Deploy eStay Web to Server

Deploy the Next.js app to a VPS (Virtual Private Server) using PM2 and Nginx as a reverse proxy.

---

## Requirements

- Ubuntu 20.04+ VPS with root/sudo access
- Domain pointed to your server IP
- SSL certificate (Let's Encrypt recommended)
- Node.js 20+ installed on server

---

## Step 1 — Upload Project to Server

Copy your project files to the server via SCP or Git:

```bash
# Using Git (recommended)
git clone https://github.com/your-repo/estay-web.git /var/www/estay-web

# Or using SCP
scp -r ./estay-web user@yourserver:/var/www/estay-web
```

---

## Step 2 — Install Dependencies on Server

```bash
cd /var/www/estay-web
npm install
```

---

## Step 3 — Build the Project

```bash
npm run build
```

---

## Step 4 — Install PM2

PM2 keeps the Next.js server running as a background process:

```bash
npm install -g pm2
```

---

## Step 5 — Start with PM2

```bash
pm2 start npm --name "estay-web" -- start
pm2 save
pm2 startup
```

Run the command output by `pm2 startup` to enable auto-restart on reboot.

---

## Step 6 — Configure Nginx

Install Nginx and create a site config:

```bash
sudo apt install nginx
sudo nano /etc/nginx/sites-available/estay-web
```

Paste this config:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable it:

```bash
sudo ln -s /etc/nginx/sites-available/estay-web /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## Step 7 — Enable SSL

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Certbot auto-renews the certificate every 90 days.

---

## Step 8 — Verify Deployment

Visit `https://yourdomain.com` — the site should load over HTTPS.

:::info
After any code update, repeat steps 3 and restart PM2: `pm2 restart estay-web`
:::
