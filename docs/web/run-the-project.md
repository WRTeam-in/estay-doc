---
id: run-the-project
title: Run the Project
---

# How to Run the Web Project

After completing all configuration steps, run the project locally to verify everything works before deploying.

---

## Prerequisites

Make sure you have completed:

- [Setup](./setup) — Node.js installed, dependencies installed
- [Domain URL](./domain-url) — Admin and web URLs configured
- [Integrate Firebase](./integrate-firebase) — Firebase credentials added

---

## Step 1 — Start Development Server

In the project root, run:

```bash
npm run dev
```

The terminal will show:

```
▲ Next.js 16.x.x
- Local:   http://localhost:3000
- Network: http://192.168.x.x:3000
```

---

## Step 2 — Open in Browser

Visit [http://localhost:3000](http://localhost:3000) in your browser.

:::info
Development mode includes hot reload — changes to files reflect instantly without restarting the server.
:::

---

## Step 3 — Verify Core Features

Check the following work correctly before deploying:

- [ ] Home page loads
- [ ] Property listings display
- [ ] Search and filters work
- [ ] Login/OTP flow works (requires Firebase to be configured)
- [ ] Property detail pages load
- [ ] Maps display (requires Maps API key)

---

## Stopping the Server

Press `Ctrl + C` in the terminal to stop the dev server.
