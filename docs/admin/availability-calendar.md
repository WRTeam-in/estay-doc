---
id: availability-calendar
title: Availability Calendar
---

# Availability Calendar

A visual, date-based view of room availability for the currently selected property, with two layouts.

**Navigate to:** Sidebar → Bookings → **Availability Calendar**

:::warning Multi-mode: this page doesn't exist for admins
Like the rest of Room Management, Availability Calendar is **Single Mode only**. In [Multi Mode](./overview.md#single-mode-vs-multi-mode), each partner has their own Availability Calendar in their Partner Panel.
:::

---

## Calendar View

A timeline grid — room types down the side, dates across the top (16 days by default, centered a few days back from today, or a custom range you pick). Each booking renders as a block spanning its check-in to check-out dates. Search narrows blocks to a specific guest name.

Click **Today** to jump the view back to the current date.

![Calendar View](/images/panel/availabilitycalendarstep1.png)

:::info Entire-property listings
For a property listed as a whole-unit rental (see [Property Management](./property-management.md#entire-property-whole-unit-listings)), this view shows a single row for the whole property instead of one row per room type, labeled **Vacant** or **Occupied** rather than a room count.
:::

---

## Room Grid View

Switch views to see actual **rooms**, grouped by floor, each marked **Available**, **Booked**, or **Inactive** for the selected date range. Filter to one room type, or search by room number or guest name. A summary line per room type shows **X Confirmed · Y Checked-in · Z Available** so you can see utilization at a glance.

![Room Grid View](/images/panel/availabilitycalendarstep2.png)

If any of a room type's rooms have an active [Calendar Sync](./calendar-sync.md) import, that utilization line also shows an **External blocks** count alongside Confirmed/Checked-in/Available.

:::info Not available for entire-property listings
Room Grid View is based on physical room numbers, which whole-unit listings don't have (see [Room Inventory](./room-inventory.md)). The toggle to switch views is hidden entirely for those properties.
:::

---

## External Calendar Blocks

If [Calendar Sync](./calendar-sync.md) is turned on and a room has an active imported calendar (from Airbnb, Booking.com, etc.), any dates that platform has blocked show up here too — as a distinct, **diagonally striped purple block**, clearly different from a normal booking.

<!-- SCREENSHOT — admin/availability-calendar — external block
URL: /availability-calendar  (a room with an active imported calendar link must have a blocked date visible in the shown date range)
Capture: the Calendar View with at least one normal booking block AND one striped "External Calendar Block" visible side by side, to show the visual difference.
Save as: static/images/panel/availabilitycalendarstep3-externalblock.png -->
![External Calendar Block](/images/panel/availabilitycalendarstep3-externalblock.png)

Click it to open a read-only **External Calendar Block** panel — source platform, calendar name, connected room, blocked dates, and sync status. It never shows customer, payment, or booking information, because there isn't any: it's not a booking, just inventory another platform has claimed.

<!-- SCREENSHOT — admin/availability-calendar — external block detail
URL: same page, after clicking a striped block
Capture: the "External Calendar Block" detail panel.
Save as: static/images/panel/availabilitycalendarstep4-externaldetail.png -->
![External Calendar Block detail](/images/panel/availabilitycalendarstep4-externaldetail.png)

:::info A room can show both
A room's row can display normal bookings and external calendar blocks side by side — they're independent, and both count toward the same underlying availability.
:::

---

## Checking a Booking

Click a booking block (Calendar view) or a booked room (Room Grid view) to open a read-only summary — guest, room, dates — with a **View Full Details** link through to the complete booking detail page if you need to act on it (cancel, etc.).

---

## Where to Go Next

- **Acting on a specific booking** → [Booking Management](./booking-management.md).
- **Setting up rooms shown here** → [Room Inventory](./room-inventory.md).
- **Connecting a room to Airbnb/Booking.com** → [Calendar Sync](./calendar-sync.md).
