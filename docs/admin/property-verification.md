---
id: property-verification
title: Property Verification
---

# Property Verification

Every property a partner submits through their Partner Panel — new or resubmitted — lands here before it can go live. **Property Verification** is where you review submissions and approve, reject, or send them back for correction.

:::info Multi-mode only
This page exists only when the platform is running in [Multi Mode](./overview.md#single-mode-vs-multi-mode).
:::

---

## The Queue

![Property Verification Queue](/images/panel/propertyverificationstep1.png)

| Column | Description |
|---|---|
| **Property Info** | Name, plus city/state. Searchable by property name or ID. |
| **Type** | The property type. |
| **Owner** | The partner's name and email. |
| **Documents** | Progress bar of required [Registration Fields](./registration-fields.md) filled in for that property's country + type. |
| **Status** | **Pending**, **Resubmission**, **Correction Requested**, or **Rejected**. |
| **Submitted Date** | When the partner submitted it. |

A status filter is available. Row action reads **Review** (Pending/Resubmission) or **View Details** otherwise.

---

## Reviewing a Property

Opening a row shows the full property — facilities, rooms, rules, cancellation policy, nearby places, gallery, and uploaded documents — the same tabs you'd see on a normal property detail view, plus three actions:

![Property Verification Review](/images/panel/propertyverificationstep2.png)

### Approve
Approving a property also **creates its wallet** — the account that will later accumulate this property's booking credits (see [Property Payout](./property-payout.md)).

:::warning Disabled until a commission rate exists
**Approve** is disabled (with a tooltip) if there's **no commission rate configured** for this property's country + property type — neither a country default nor a type-specific rate. The platform refuses to take a property live at an undefined (effectively 0%) commission. Set one up first in [Commission Management](./commission-management.md).
:::

### Request Correction
Sends the property back with a required reason (up to 500 characters). Status becomes **Correction Requested**; a resubmission brings it back to the queue as **Resubmission**.

### Reject
**Permanently** rejects the submission — the partner would need to submit it again from scratch. Requires a reason, with a confirmation warning before you submit.

All three actions email and push-notify the partner with your reason, and log to the property's activity history.

---

## Where to Go Next

- **No commission rate yet?** → [Commission Management](./commission-management.md) — set this up before you'll be able to approve anything.
- **Where an approved property's earnings show up** → [Property Payout](./property-payout.md).
- **Reviewing the partner behind the property** → [All Partners](./all-partners.md).
