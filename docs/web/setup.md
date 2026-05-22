---
id: setup
title: Setup
---

# How to Setup Web Version

eStay web is built with **Next.js 16** and **React 19**. This guide walks you through everything needed to get the project running locally and ready for deployment.

---

## Requirements

Before starting, make sure your machine has the following:

| Requirement | Version |
|-------------|---------|
| Node.js | 18 minimum, **20+ recommended** |
| npm | Comes with Node.js |
| Git | Any recent version |

:::info
Check your Node.js version by running `node -v` in your terminal. If it's below 18, upgrade before continuing.
:::

---

## Step 1 — Install Node.js

If Node.js is not installed or your version is below 18, download and install it from the official site.

**Download:** [https://nodejs.org/en/download](https://nodejs.org/en/download)

Choose the **LTS version (20.x)** for best compatibility.

After installation, verify it works:

```bash
node -v
npm -v
```

---

## Step 2 — Extract the Project

After purchasing, you will receive a `.zip` file containing the eStay web source code.

1. Download the source code `.zip` from [CodeCanyon](https://codecanyon.net) or your purchase email.
2. Extract the `.zip` to your preferred folder.
3. Open a terminal and navigate into the extracted folder.

```bash
cd path/to/estay-web
```

---

## Step 3 — Install Dependencies

Run the following command inside the project root to install all required packages:

```bash
npm install
```

This installs all packages listed in `package.json`. It may take a few minutes on first run.

:::warning
Do **not** use `yarn` or `pnpm` — the project uses `package-lock.json`. Mixing package managers can cause version conflicts.
:::

---

## Step 4 — Configure Environment

Before running the project, you need to set up the required configuration:

- **Admin panel URL** — [Domain URL](./domain-url)
- **Firebase credentials** — [Integrate Firebase](./integrate-firebase)
- **Website name & metadata** — [App Name](./app-name), [Change Meta Info](./change-meta-info)

Complete those steps first, then return here to run the project.

---

## Next Step

Once configuration is done, proceed to run the project:

👉 [Run the Project](./run-the-project)
