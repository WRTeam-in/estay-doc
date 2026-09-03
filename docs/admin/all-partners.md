---
id: all-partners
title: All Partners
---

# All Partners

**All Partners** is the operating roster — every partner who has been **approved at least once**, with their current status, property count, and revenue. It's different from [Partner Verification](./partner-verification.md), which is the queue of applications still waiting on a first decision; a partner who hasn't been approved yet won't show up here.

:::info Multi-mode only
This page exists only when the platform is running in [Multi Mode](./overview.md#single-mode-vs-multi-mode).
:::

:::info Scoped to your selected country
The list, stats, and revenue figures are scoped to the **country** selected in the topbar. Switch country to see a different roster.
:::

---

## The List

At the top, four stat cards summarize the roster for the selected country: **Total Partners**, **Active**, **Inactive**, **Suspended**.

![All Partners List](/images/panel/allpartnersstep1.png)

| Column | Description |
|---|---|
| **Partner Info** | Avatar, name, and partner ID. |
| **Property Type** | The partner's property type(s) — from their profile, or inferred from their properties if not set. |
| **Contact Info** | Email and phone. |
| **Properties** | Count of properties owned in this country. |
| **Total Revenue** | Sum of `total_amount` across this partner's Confirmed/Checked-in/Completed bookings in this country. |
| **Status** | **Active** (approved), **Suspended**, or **Inactive** (any other non-approved, non-suspended state — shouldn't normally appear here). |
| **Registered On** | Account creation date. |

You can **search** (by name or email), **filter** by status, and **export** the list.

---

## Suspending a Partner

Click the **suspend icon** on an active partner's row (or from their detail page) to take them offline. You must provide a **reason** (required, up to 500 characters) — this is recorded for your own audit trail.

:::warning Blocked if there are active bookings
You **can't suspend** a partner who has a property with a Confirmed, Checked-in, or Pending-payment booking — the action fails with an error until those clear. If suspension goes through, it **cascades**: every one of that partner's currently Active properties is suspended too.
:::

**Unsuspending** reverses the cascade — it reactivates only the properties that were auto-suspended by this same action (not properties you'd suspended separately for another reason) — and requires just a confirmation, no reason.

---

## Partner Detail Page

Click a partner's **view** icon to open their full profile:

![Partner Detail Page](/images/panel/allpartnersstep2.png)

- **Overview** — total/active properties, total bookings, and total revenue for this partner (country-scoped).
- **Properties** — every property this partner owns, with city/state and status.
- **Documents** — any file uploads the partner submitted through their [Partner Registration Fields](./partner-registration-fields.md).
- **Audit Log** — a timestamped history of actions on this partner's account (approvals, suspensions, corrections), filterable by date.
- The same **suspend/unsuspend** action is available here.

---

## Where to Go Next

- **New partner applications waiting on a decision?** → [Partner Verification](./partner-verification.md).
- **Configuring what a partner earns?** → [Commission Management](./commission-management.md).
- **Reviewing payouts or withdrawal requests?** → [Property Payout](./property-payout.md), [Withdrawal Requests](./withdrawal-requests.md).
