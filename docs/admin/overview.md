---
id: overview
title: Admin Panel Overview
---

# Admin Panel Overview

Welcome to your platform's **admin panel** — the control center for your entire hotel booking business. From here you manage properties and rooms, handle bookings and customers, process payments and refunds, run marketing campaigns, publish content, and configure how the whole platform behaves.

This page gives you the big picture. Each section links to a detailed guide.

:::tip New here?
Start with [Installation](./installation.md), then work through the **Platform Setup** checklists ([Add Cities](./add-cities.md), [Tax Configuration](./tax-configuration.md), [Cancellation Policy](./cancellation-policy.md), [Legal Policy](./legal-policy.md)) to get your platform live.
:::

---

## The Most Important Concept: Country & Property Context

At the top of the admin panel you'll find **country** and **property** switchers in the topbar. **Most of what you see is scoped to your currently selected country (and property).**

- Switch the **country** to view that country's bookings, customers, properties, promo codes, payments, and so on.
- Switch the **property** to narrow further to a single property where relevant.        

Some pages are **global** and ignore these switchers — for example **Events**, **Languages**, **Notification (Firebase) Settings**, and most items under **Settings**. Each guide notes when a page is global.

:::info Keep this in mind
If a customer, booking, or transaction "isn't showing up," the first thing to check is the **country/property selected in the topbar** — you may simply be looking at a different region.
:::

---

## The Dashboard

When you log in, you land on the **Dashboard** — an at-a-glance overview of your business with key stats and analytics for your selected country. Use it as your daily starting point, then dive into the sections below.

---

## Navigation Map

The left sidebar groups everything into sections. Here's what each one is for:

| Section | What you manage | Guide |
|---|---|---|
| **Property Management** | Add and manage properties, plus custom onboarding fields. | [Property Management](./property-management.md) · [Registration Fields](./registration-fields.md) |
| **Room Management** | Room types, rooms, and amenities/facilities. | [Property Management](./property-management.md) |
| **Bookings** | Reservations, today's check-ins/check-outs, availability. | [Booking Management](./booking-management.md) |
| **Customers** | Customer accounts, activity, insights, and manual refunds. | [Customers](./user-management.md) · [Manual Refunds](./manual-refunds.md) |
| **Marketing** | Promo codes, the referral program, and notifications. | [Promo Codes](./promocodes.md) · [Refer & Earn](./refer-and-earn.md) · [Marketing Notifications](./marketing-notifications.md) |
| **Event Management** | Event types and customer event inquiries. | [Events & Inquiries](./events-and-inquiries.md) |
| **Location & Policies** | Countries, cities, currencies, taxes, and policies. | [Countries](./countries.md) · [Add Cities](./add-cities.md) · [Tax](./tax-configuration.md) · [Cancellation](./cancellation-policy.md) · [Legal](./legal-policy.md) |
| **Payments** | Gateway configuration and the full transaction ledger. | [Payment Settings](./payment-settings.md) · [Payment Transactions](./payment-transactions.md) |
| **Staff & Access** | Staff accounts, roles, and permissions. | [Roles & Staff](./roles-and-staffs.md) |
| **Content** | Homepage, banners, blogs, FAQs, and other content. | [Other Pages](./other-pages.md) |
| **Settings** | Branding, web/app, languages, integrations, and more. | [General Settings](./general-settings.md) |

---

## Configuration & Integrations

Beyond day-to-day management, the admin panel connects to several external services. Set these up once:

| Area | Guide |
|---|---|
| **Push notifications** (Firebase) | [Notification Settings](./notification-management.md) |
| **Email delivery** (SMTP) | [SMTP / Mail](./smtp-configurations.md) |
| **Languages & translations** | [Manage Languages](./language.md) |
| **Maps & places** | [Google Maps API](./api-google-maps.md) |
| **Currency conversion** | [Currency Exchange API](./currency-exchange-api.md) |
| **Visitor country detection** | [IP Geolocation API](./api-ip-geolocation.md) |
| **Background tasks** (scheduler + queue) | [Cron Jobs Setup](./cron-jobs.md) |
| **Keeping the system updated** | [Update System](./update-system.md) |

:::warning Don't skip the cron setup
Several features — payment confirmation, expiring abandoned bookings, and sending notifications — rely on background tasks. Make sure the [Cron Jobs](./cron-jobs.md) are running, or these won't happen automatically.
:::

---

## Access & Permissions

What you can see and do in the admin panel depends on your **role**. The main administrator has full access; staff members only see the sections their assigned role allows. To create staff accounts and control their access, see [Roles & Staff](./roles-and-staffs.md).

---

## Where to Go Next

- **Setting up for the first time?** → [Installation](./installation.md) and the setup checklists.
- **Running day-to-day?** → [Bookings](./booking-management.md), [Customers](./user-management.md), [Payment Transactions](./payment-transactions.md).
- **Growing your business?** → [Promo Codes](./promocodes.md), [Refer & Earn](./refer-and-earn.md), [Marketing Notifications](./marketing-notifications.md).
- **Configuring the platform?** → [General Settings](./general-settings.md) and the integration guides above.
