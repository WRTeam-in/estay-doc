---
id: calendar-sync
title: Calendar Sync (iCal / Airbnb, Booking.com)
---

# Calendar Sync (iCal)

**Calendar Sync** keeps a room's availability in step with external booking platforms — Airbnb, Booking.com, MakeMyTrip, or any other site that supports the standard **iCal** calendar format. It works in both directions:

- **Share your calendar** — give other platforms a link so they always know when this room is already booked on your site.
- **Import their calendars** — bring in the dates those platforms have already blocked, so you never get double-booked.

:::info Periodic, not instant
Calendar Sync checks for updates automatically in the background, roughly every 15 minutes. It is **not** a real-time channel manager — a booking made on Airbnb can take a few minutes to reflect here, and vice versa.
:::

:::warning Turn it on first
Calendar Sync is **off by default**. Nothing described on this page is visible until you turn it on — see [Step 1](#step-1-turn-on-calendar-sync) below.
:::

---

## Step 1: Turn On Calendar Sync

1. Go to **Settings → System Configure**, then open the **App Configuration** tab.
2. Find the **Calendar Sync** section and turn on **Enable iCal Calendar Sync**.

<!-- SCREENSHOT 1 — admin/calendar-sync — toggle
URL: /system-settings/general  (then click the "App Configuration" tab)
Capture: the "Calendar Sync" section with the "Enable iCal Calendar Sync" toggle switched ON.
Save as: static/images/panel/icalstep1-toggle.png -->
![Enable Calendar Sync](/images/panel/icalstep1-toggle.png)

:::tip Turning it off later?
The toggle **locks** while any room still has an active connection — you'll see a lock icon with a tooltip explaining how many rooms to disconnect first. This prevents accidentally cutting off a live sync.
:::

---

## Step 2: Open a Room's Calendar Sync Page

1. Go to **Room Management → All Rooms**.
2. Find the room you want to connect, and click the **Calendar Sync** icon in its row.

<!-- SCREENSHOT 2 — admin/calendar-sync — entry point
URL: /all-rooms
Capture: the All Rooms table with the Calendar Sync row-action icon visible/highlighted for one row.
Save as: static/images/panel/icalstep2-entrypoint.png -->
![Open Calendar Sync from All Rooms](/images/panel/icalstep2-entrypoint.png)

This opens a dedicated page for that one room. Everything else on this guide happens here.

<!-- SCREENSHOT 3 — admin/calendar-sync — page overview
URL: /all-rooms/{room-id}/calendar-sync   (replace {room-id} with the real id from step 2)
Capture: the top of the Calendar Sync page for a room — heading, description, and the collapsed "How Calendar Sync Works" card.
Save as: static/images/panel/icalstep3-pageoverview.png -->
![The Calendar Sync page](/images/panel/icalstep3-pageoverview.png)

:::tip How Calendar Sync Works card
Click **How Calendar Sync Works** near the top of the page any time for a quick 3-step reminder: *Share your calendar → Import bookings from other sites → Stay in sync automatically*.
:::

---

## Step 3: Connect the Room

Click **Add Connected Room** (or **Connect Calendar Sync** if this is an entire-property listing). This creates one connection — think of it as "one line on your calendar" that you'll share out and/or import into.

<!-- SCREENSHOT 4 — admin/calendar-sync — add connected room
URL: same Calendar Sync page as step 3
Capture: the "Add Connected Room" button, and/or the small modal that appears after clicking it (it only asks for a label/name).
Save as: static/images/panel/icalstep31.png (already captured) -->
![Connect the room](/images/panel/icalstep31.png)

Once created, you'll see a card for it with an **Active** badge and a **⋮** menu (rename, deactivate, regenerate link, delete).

:::info One connection per physical unit
For a room type with several identical rooms, add one connection per room you want to sync individually. A **⋯ has as many active connections as its total rooms** message appears once you've used them all up.
:::

---

## Step 4: Share Your Calendar (Export)

Inside the room's card, find **Share your [App Name] calendar**. Click **Copy Calendar Link** to get a private link.

<!-- SCREENSHOT 5 — admin/calendar-sync — share/export
URL: same Calendar Sync page, room card expanded
Capture: the "Share your calendar" section with the "Copy Calendar Link" button, and the modal/box showing the copyable link.
Save as: static/images/panel/icalstep4.png (already captured) -->
![Share your calendar](/images/panel/icalstep4.png)

Paste that link into Airbnb/Booking.com/etc. wherever they ask for an **iCal export URL** (usually under their own calendar-sync settings). From then on, they'll know when this room is booked on your site.

:::warning Keep this link private
Anyone with this link can see this room's booked dates. If it's ever exposed, use **Regenerate Link** from the **⋮** menu — the old link stops working immediately.
:::

---

## Step 5: Import Their Calendar (Bring In Other Platforms' Bookings)

In the same room's card, find **Calendars from other platforms**, then click **Add Calendar to Import**.

<!-- SCREENSHOT 6 — admin/calendar-sync — add import feed button
URL: same Calendar Sync page
Capture: the "Calendars from other platforms" section with the "Add Calendar to Import" button.
Save as: static/images/panel/icalstep6.png (already captured) -->
![Add a calendar to import](/images/panel/icalstep6.png)

Fill in:

| Field | What to enter |
|---|---|
| **Calendar Name** | Any label to help you recognize it later, e.g. "Airbnb – Sunset Villa". |
| **Provider** | Free text — e.g. `airbnb`, `booking.com`, `makemytrip`. Used only for display. |
| **Calendar URL** | The **export/iCal URL** copied from the other platform's own calendar-sync settings (usually a `.ics` link). Must be a secure (`https://`) link. |

<!-- SCREENSHOT 7 — admin/calendar-sync — add import feed form
URL: same page, modal open
Capture: the "Add Calendar to Import" modal with Calendar Name / Provider / Calendar URL fields filled in.
Save as: static/images/panel/icalstep5.png (already captured) -->
![Fill in the calendar link](/images/panel/icalstep5.png)

After saving, the calendar appears in a table below with its status, last sync time, and how many events it found.

<!-- SCREENSHOT 8 — admin/calendar-sync — import feeds table
URL: same page
Capture: the table listing a connected import calendar — columns like Calendar Name, Provider, Status, Last Sync, Events.
Save as: static/images/panel/icalstep8-importtable.png (already captured) -->
![Imported calendars list](/images/panel/icalstep8-importtable.png)

:::tip Sync Now
Don't want to wait for the next automatic check? Use the **Sync Now** action on that row to fetch it immediately.
:::

:::danger "This calendar link is not allowed or is already in use"
This means the URL either isn't reachable over HTTPS, points to a private/internal address, or is already connected elsewhere on your platform. Double-check the URL and try again — it usually just means it was copied from the wrong place.
:::

---

## Step 6: Check Sync Health

Scroll to the **Sync Health & Warnings** section at the bottom of the room's Calendar Sync page. It shows anything that needs your attention — a calendar that failed to sync, or a booking that needs manual review — without ever showing guest personal details.

<!-- SCREENSHOT 9 — admin/calendar-sync — sync health
URL: same Calendar Sync page, scrolled to the bottom
Capture: the "Sync Health & Warnings" section.
Save as: static/images/panel/icalstep7.png (already captured) -->
![Sync Health](/images/panel/icalstep7.png)

---

## Cron Jobs Are Required

Calendar Sync runs on your platform's regular scheduled tasks — the same cron jobs described in [Cron Jobs Setup](./cron-jobs.md). If those aren't set up, imported calendars will never update automatically (though **Sync Now** still works on demand). See that page's **iCal Worker Status** card to confirm the background worker is actually running.

---

## What You'll See Elsewhere

- **Availability Calendar** — an active imported booking shows as a distinct, striped **External Calendar Block** on the [Availability Calendar](./availability-calendar.md), clearly different from a normal booking.
- **Room Inventory** — importing/exporting calendars never creates or removes rooms. Your room count is always controlled by [Room Inventory](./room-inventory.md).

---

## Frequently Confusing Bits

:::info "Connected Room" vs. a physical Room
A "connected room" here is a calendar-sync connection, not a new physical room. It always points at one of your existing rooms — it never adds inventory.
:::

:::info Why does a disabled calendar still show as occupied?
If you disable an imported calendar link, dates it already blocked stay blocked until they naturally expire (checkout date passes). Disabling stops **future** syncing — it doesn't instantly release inventory that platform had already claimed, since a guest may genuinely still be staying there.
:::

:::info Missing the pcntl PHP extension?
If your server doesn't have PHP's `pcntl` extension, Calendar Sync still works — background syncs still run — but a sync that hangs won't be automatically stopped after its time limit. You'll see a note about this next to the toggle in **Settings → System Configure → App Configuration** if it applies to your server.
:::
