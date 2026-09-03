---
id: setup-wizard
title: Setup Wizard & Getting Verified
---

# Setup Wizard & Getting Verified

After [creating a basic account](./registration.md) and logging in for the first time, a partner is dropped straight into the **Setup Wizard** — and kept there on every page they try to visit until it's done and an admin has approved them. This one page covers the whole journey: filling in the wizard, submitting, and what they see while waiting.

:::info Locked in until setup is complete
A partner can't reach anything else in the Partner Panel — Dashboard, Bookings, Properties, nothing — until they've completed the wizard **and** an admin has approved their account. Every request redirects back here in the meantime.
:::

---

## The Steps

Progress saves automatically after every "Next" click, so refreshing the page mid-way resumes exactly where they left off — nothing is lost.

### 1. Select Country
The country the partner will operate in.

### 2. Property Type
Filtered to only the property types enabled for the country picked in step 1.

### 3–4. Tell Us Who You Are (Profile, then Address)
Two screens under one heading:

- **Profile** — avatar, first/last name, email, phone, date of birth, gender. If the partner signed up with email (rather than phone), their email is locked here — it's their login identity.
- **Address** — street address, ZIP/PIN code, state, and city. Entering a ZIP code triggers an automatic lookup (via OpenStreetMap, the platform's default free map provider — see [Map Provider](/docs/admin/map-provider)) that tries to pre-fill state, city, and coordinates, saving the partner from picking them manually.

### 5. Verify Your Identity
Only appears if the selected country has any active [Partner Registration Fields](/docs/admin/partner-registration-fields) configured — a country with none skips straight from Address to submission. Shows whatever custom fields the admin configured: text, numbers, dropdowns, checkboxes, dates, or document uploads, each required or optional as configured.

---

## Submitting

Completing the last step saves everything at once — profile, address, the selected country and property type, and any registration field values or documents — and takes the partner to a **status screen** instead of their new Dashboard.

---

## While Waiting: the Status Screen

What a partner sees here depends on their verification status:

| Status | What they see |
|---|---|
| **Pending** | A blue notice that their account is pending admin review, and they'll be emailed once it's decided. |
| **Resubmission** | Same waiting message, shown after they've corrected and resubmitted following a correction request. |
| **Correction Requested** | An amber banner with the admin's correction notes and a **Make Changes** button. |
| **Rejected** | A red banner explaining the rejection (with the admin's reason, if given) and a **Make Changes** button. |

Every state also shows a shared "Your Verification is Under Review" panel underneath.

:::info Auto-Approve Partners
If the admin has turned on **Auto-Approve Partners** (Settings → General → Partner Settings, see [Partner Verification](/docs/admin/partner-verification)), a partner may never see the Pending state at all — they can be approved the instant they submit, and go straight to their Dashboard on their next visit.
:::

### Make Changes

Clicking **Make Changes** (Rejected or Correction Requested only — not available while Pending or waiting on a resubmission) reopens the wizard at the **Profile** step, pre-filled with everything already on file, so the partner doesn't redo Country or Property Type unless they specifically go back. Submitting again moves their status to **Resubmission** and puts them back in the [Partner Verification](/docs/admin/partner-verification) queue for another look — unless Auto-Approve is on, in which case they're approved immediately.

---

## Where to Go Next

- **What an admin sees and does with a submitted application** → [Partner Verification](/docs/admin/partner-verification).
- **Once approved** → [Dashboard](./dashboard.md).
