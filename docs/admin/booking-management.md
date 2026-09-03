---
id: booking-management
title: Booking Management
---

# Booking Management

View and manage all guest bookings on your eStay platform from a single interface.

**Navigate to:** Sidebar → **Bookings**

:::info Multi-mode: oversight, not day-to-day operations
In [Multi Mode](./overview.md#single-mode-vs-multi-mode), this page shows bookings across **every partner property** in your selected country (there's no single-property narrowing — the topbar's property switcher is hidden here) and stats are country-wide rather than per-property. It's also **view-only for operations**: admins don't check guests in/out or assign rooms from here — that's the owning partner's job, from their own Bookings pages in the Partner Panel. The admin's own **Availability Calendar** is also gone in Multi Mode, for the same reason — see the [partner-side Availability Calendar](/docs/partner/availability-calendar) instead. Three related pages exist only in Multi Mode: [Reserved Bookings](./reserved-bookings.md), [Pay At Property Bookings](./pay-at-property.md), and [Cancellations & Refunds](./cancellations-refunds.md).
:::

![Booking List](/images/panel/booking-list.png)

---

## Booking Statuses

Every booking has one of the following statuses:

| Status | Description |
|---|---|
| **Pending** | Booking has been initiated but payment has not yet been confirmed. |
| **Confirmed** | Payment was successful and the booking is active. |
| **Cancelled** | Booking was cancelled by the guest or admin. |
| **Completed** | The guest has checked out and the stay is complete. |

---

## Filtering Bookings

Use the filter options at the top of the booking list to narrow results.

![Booking Filters](/images/panel/booking-filter.png)

| Filter | Description |
|---|---|
| **Status** | Filter by Pending, Confirmed, Cancelled, or Completed. |
| **Date Range** | Show bookings within a specific check-in or booking creation date range. |
| **Property** | Show bookings for a specific property. |

---

## Viewing Booking Details

Click on any booking row or the **View** icon to open the full booking detail page.

![Booking Detail](/images/panel/booking-detail.png)

The detail view shows:

| Section | Details Shown |
|---|---|
| **Guest Info** | Guest name, email, and phone number. |
| **Property & Room** | Property name, room type selected. |
| **Stay Dates** | Check-in date, check-out date, and number of nights. |
| **Guests** | Number of adult and child guests. |
| **Payment** | Total amount, payment method, and payment status. |
| **Booking Status** | Current status with status history if applicable. |

---

## Cancelling a Booking

To cancel a booking:

1. Open the booking detail view.
2. Click the **Cancel Booking** button.
3. Enter a **cancellation reason**.
4. Confirm the cancellation.

:::warning
Cancelling a booking is irreversible from the admin panel. Ensure any applicable refund is processed separately through your payment provider if required.
:::

---

## Exporting Bookings

To export the booking list:

1. Apply any filters you need (status, date range, property).
2. Click the **Export** button in the toolbar.
3. Select the export format: **CSV** or **Excel (XLSX)**.
4. The file will download automatically.

:::info
The exported file reflects the current filter state. Apply filters before exporting to get a targeted report.
:::
