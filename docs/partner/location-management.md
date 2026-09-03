---
id: location-management
title: Location Management
---

# Location Management

The list of countries this partner operates properties in — a subset of the platform's countries, not the full list admin manages.

---

## The List

Country, phone code + currency, and whether the partner is **Active** or **Inactive** in that country.

![Countries List](/images/partner/locationmanagementstep1.png)

---

## Adding a Country

**Add New Country** is a 2-step wizard: pick from countries not already added, then set its initial Active/Inactive status.

---

## Editing

Toggling a country to **Inactive**:

:::warning Blocked by active bookings, then cascades
Deactivating is blocked outright if any property in that country has a Confirmed, Checked-in, or Pending-payment booking. If it goes through, every Active property the partner has in that country gets suspended too — the same cascade behavior as an admin suspending the partner entirely, just scoped to one country.
:::

---

## Where to Go Next

- **Properties affected by a country's status** → [Property Management](./property-management.md).
