---
id: cron-jobs
title: Cron Jobs (Scheduled Tasks) Setup
---

# Cron Jobs (Scheduled Tasks) Setup

Your platform relies on **background tasks** to keep things running — confirming payments, expiring abandoned bookings, updating exchange rates, and sending notifications. These only run if you set up **two cron jobs** on your server.

To make this easy on shared hosting (cPanel / hPanel), the platform provides two simple **web endpoints** that your cron jobs just need to "visit" with `curl`. You don't need command-line access.

:::warning You need TWO cron jobs
Both are required and serve different purposes:

1. **Scheduler** — decides *when* each task should run.
2. **Queue worker** — actually *performs* the heavier jobs (like sending notifications) that the scheduler hands off.

Setting up only one of them will leave the platform half-working (for example, payments confirmed but notifications never sent).
:::

---

## The Two Cron Jobs

Replace `yourdomain.com` with your actual domain. Both should run **every minute**.

| # | Purpose | Command |
|---|---|---|
| 1 | **Scheduler** | `curl -s "https://yourdomain.com/run-scheduler" > /dev/null 2>&1` |
| 2 | **Queue worker** | `curl -s "https://yourdomain.com/run-queue" > /dev/null 2>&1` |

---

## Step 1: Add the Cron Jobs in cPanel / hPanel

1. Open **Cron Jobs** in your hosting control panel.
2. Under **Common Settings**, choose **Once Per Minute** (`* * * * *`).
3. Paste the **first** command (scheduler) and add it.
4. Repeat for the **second** command (queue worker).

![cPanel Cron Job](/images/panel/cronpage.png)

:::tip Why every minute?
Running every minute is correct. The scheduler checks each task and only runs the ones that are actually due (some run every 5 minutes, some once a day). The queue worker processes whatever jobs are waiting, then exits.
:::

---

## Cron 1 — Scheduler (`/run-scheduler`)

This runs the platform's scheduled tasks. That single endpoint manages all of these:

| Task | Runs | What It Does |
|---|---|---|
| **Expire Inventory Locks** | Every minute | Releases rooms that were held during checkout but never paid for, returning them to available inventory. |
| **Expire Ghost Bookings** | Every 5 minutes | Cancels bookings whose payment was never completed, and marks those payments as expired. |
| **Reconcile Pending Payments** | Every 5 minutes | Double-checks any still-pending payment directly with the payment gateway — the safety net for payments where a webhook was missed. |
| **Sync Exchange Rates** | Once a day | Fetches the latest currency exchange rates for all active countries. |
| **Process Scheduled Marketing Messages** | Every minute | Finds marketing notifications whose send time has arrived and **queues** them for delivery (the queue worker then sends them — see Cron 2). |

:::info Why this matters for payments
**Reconcile Pending Payments** confirms a payment if its webhook didn't arrive. If the scheduler cron isn't running, a payment with a missing webhook could stay **pending indefinitely**. See [Payment Gateway Settings](/payment-gateway-settings) for how webhooks and reconciliation work together.
:::

---

## Cron 2 — Queue Worker (`/run-queue`)

Some tasks are too heavy to run instantly, so the platform places them on a **queue** and processes them in the background. The queue worker is what actually carries them out.

The clearest example is **marketing notifications**. The flow is two-stage:

```
Marketing message  →  placed on the queue  →  Queue worker sends it
```

This applies to **both** scheduled campaigns and "send now" notifications — in every case the message is queued first, then delivered by the queue worker.

:::warning Without the queue worker, notifications never send
If you set up only the scheduler and **not** the queue worker, marketing notifications will be queued up but **never actually delivered** — they'll silently pile up. The queue worker cron is required for them to go out.
:::

---

## Step 2: Verify Everything Is Working

The platform includes a small **monitor page** so you can confirm both crons are running. Visit:

```
https://yourdomain.com/cron
```

It shows the last time the **scheduler** and the **queue worker** each ran. If either timestamp is stale (not updating every minute), that cron isn't firing — re-check the cron entry in your hosting panel.

You can also test end-to-end:

- Place a test booking and pay → it should confirm on its own (scheduler + webhook).
- Send a test marketing notification → it should arrive shortly (queue worker).

:::info Quick checklist
- ✅ Cron 1: `curl … /run-scheduler` — every minute
- ✅ Cron 2: `curl … /run-queue` — every minute
- ✅ `/cron` monitor shows both updating
:::
