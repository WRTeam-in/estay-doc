---
id: partner-registration-fields
title: Partner Registration Fields
---

# Partner Registration Fields

Define the custom fields a partner must (or may) fill in as part of getting verified — business documents, license numbers, tax IDs, whatever your platform requires. These are the fields whose completion drives the **Documents** progress bar on [Partner Verification](./partner-verification.md).

:::info Multi-mode only, and country-scoped
This page exists only in [Multi Mode](./overview.md#single-mode-vs-multi-mode), and fields are configured **per country** (the one selected in the topbar) — a field added while Country A is selected won't appear for partners registering under Country B.
:::

:::info Not the same as Registration Fields
This is a separate page from the customer/property-facing [Registration Fields](./registration-fields.md). That one governs what a property submission collects; this one governs what a **partner sign-up** collects.
:::

---

## The List

| Column | Description |
|---|---|
| **Field Name** | The label shown to the partner. |
| **Input Type** | Number Input, Text Field, Text Area, Checkboxes, Date, Dropdown, or File Upload. |
| **Validation** | Mandatory or Optional. |
| **Status** | Active or Inactive — inactive fields are hidden from the partner form without deleting them. |

![Partner Registration Fields List](/images/panel/partnerregfieldsstep1.png)

---

## Adding or Editing a Field

Click **Add New Field** (or the edit icon on an existing one). The form adapts to the **Input Type** you pick:

| Input Type | Extra options shown |
|---|---|
| Number Input | Min number, Max number |
| Text Field / Text Area | Max length |
| Dropdown / Checkboxes | The list of options (add as tags) |
| File Upload | Max file size |
| Date | No extra options |

Every field also has **Mandatory / Optional** and **Active / Inactive** toggles.

:::warning Deleting a field
Deleting a field removes it from the form going forward, but doesn't retroactively touch a partner's already-submitted values — check with your team before deleting a field partners have already answered against.
:::

![Add New Registration Field](/images/panel/partnerregfieldsstep2.png)

---

## Where to Go Next

- **Review partners against these fields** → [Partner Verification](./partner-verification.md).
- **The equivalent for properties** → [Registration Fields](./registration-fields.md).
