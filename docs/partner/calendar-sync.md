---
id: calendar-sync
title: Calendar Sync (iCal / Airbnb, Booking.com)
---

# Calendar Sync (iCal)

**Calendar Sync** keeps a room's availability in step with external booking platforms — Airbnb, Booking.com, MakeMyTrip, or any other site that supports the standard **iCal** calendar format:

- **Share your calendar** — give another platform a link so it always knows when this room is booked here.
- **Import their calendar** — bring in the dates that platform has already blocked, so you never get double-booked.

:::info Periodic, not instant
Updates happen automatically in the background, roughly every 15 minutes — not instantly. A booking made on Airbnb can take a few minutes to appear here, and vice versa.
:::

:::warning Ask your admin to turn this on first
This feature must be enabled by the platform admin before you can use it. If you don't see a **Calendar Sync** option anywhere below, ask your admin to enable it — see [Step 1](#step-1-check-its-turned-on).
:::

---

## Step 1: Check It's Turned On

Calendar Sync has two switches, and **both** need to be on:

1. **Platform-wide** — your admin enables it for all partners (nothing you control).
2. **Your own account** — go to **Settings**, and under the **Calendar Sync** section, turn on **Enable iCal Calendar Sync**.

<!-- SCREENSHOT 1 — partner/calendar-sync — toggle
URL: /partner/settings
Capture: the "Calendar Sync" section with the "Enable iCal Calendar Sync" toggle switched ON. (Only visible once your admin has enabled it platform-wide.)
Save as: static/images/partner/icalstep1-toggle.png -->
![Enable Calendar Sync](/images/partner/icalstep1-toggle.png)

:::tip Turning it off later?
The toggle **locks** while any of your rooms still has an active connection — a lock icon explains how many to disconnect first.
:::

---

## Step 2: Open a Room's Calendar Sync Page

1. Go to **Room Management → All Rooms**.
2. Click the **Calendar Sync** icon on the row for the room you want to connect.

<!-- SCREENSHOT 2 — partner/calendar-sync — entry point
URL: /partner/all-rooms
Capture: the All Rooms table with the Calendar Sync row-action icon visible for one row.
Save as: static/images/partner/icalstep2-entrypoint.png -->
![Open Calendar Sync from All Rooms](/images/partner/icalstep2-entrypoint.png)

---

## Step 3: Connect, Share, and Import

The rest works exactly the same way as the admin side — this page walks through it in full detail with screenshots: **[Calendar Sync (Admin Guide)](../admin/calendar-sync.md#step-3-connect-the-room)**. On your own room's page you'll do the same three things:

1. **Add Connected Room** — creates one sync connection for this room.
2. **Copy Calendar Link** (under "Share your calendar") — paste it into Airbnb/Booking.com's own calendar settings.
3. **Add Calendar to Import** (under "Calendars from other platforms") — paste in the `.ics` link *they* give you, so their bookings block your availability here too.

<!-- SCREENSHOT 3 — partner/calendar-sync — connected room card
URL: /partner/all-rooms/{room-id}/calendar-sync
Capture: one connected room's card, showing both the "Share your calendar" and "Calendars from other platforms" sections.
Save as: static/images/partner/icalstep3-roomcard.png -->
![A connected room](/images/partner/icalstep3-roomcard.png)

:::warning Keep your calendar link private
Anyone with your export link can see this room's booked dates. If it's ever exposed, regenerate it from the **⋮** menu on the room's card — the old link stops working immediately.
:::

---

## Sync Health

Scroll to **Sync Health & Warnings** at the bottom of the room's page for anything that needs your attention — a calendar that failed to sync, for example.

<!-- SCREENSHOT 4 — partner/calendar-sync — sync health
URL: same Calendar Sync page, scrolled to the bottom
Capture: the "Sync Health & Warnings" section.
Save as: static/images/partner/icalstep4-synchealth.png -->
<!-- ![Sync Health](/images/partner/icalstep4-synchealth.png) -->

---

## What You'll See Elsewhere

An active imported booking shows as a distinct, striped **External Calendar Block** on your [Availability Calendar](./availability-calendar.md) — clearly different from a normal booking, with no guest details attached. Connecting or importing a calendar never changes your actual room count, which stays controlled by [Room Inventory](./room-inventory.md).

---

## Where to Go Next

- **Setting up the rooms you're syncing** → [Room Management](./room-management.md).
- **Seeing imported blocks on your calendar** → [Availability Calendar](./availability-calendar.md).
