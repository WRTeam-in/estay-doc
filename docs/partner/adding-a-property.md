---
id: adding-a-property
title: Adding a Property
---

# Adding a Property

An 8-step wizard, the same shape as the admin's own property setup wizard — progress saves after every step (**Save Draft** included), so a partner can stop and resume anytime; the properties list tracks how far they've gotten (`X/8 Steps`).

---

## The 8 Steps

1. **Basic Details** — name, description, SEO fields, contact info, address (with the same OpenStreetMap-based location picker used platform-wide — see [Map Provider](/docs/admin/map-provider)), floor count, and **Bank Details** (account holder, bank name, account number, bank code). This is the same bank account [Wallet](./wallet.md) withdrawals pay out to.
2. **Property Facilities** — select from the platform's global amenities.
3. **Rooms & Pricing** — add rooms from the partner's [Room Types](./room-management.md), with pricing.
4. **Property Rules** — check-in/out times, pet policy, and any admin-configured policy questions.
5. **Cancellation Policy** — choose to **inherit the admin's default policy** for this country and property type, or set a **custom** one (cutoff time plus tiered refund rules, same structure as the admin default). If the admin hasn't configured a default at all, this is forced to custom.
6. **Payment Configuration** — whether guests can Pay At Property, and if so, what percentage must be paid online upfront.
7. **Property Images** — primary showcase media and gallery groups (max file size per image is a server setting — see [Image Upload Limits](/docs/admin/image-upload-limits)).
8. **Legal & Compliance** — any [Registration Fields](/docs/admin/registration-fields) required for the country/property type, then submit.

![Step 1: Basic Details](/images/partner/addingapropertystep1.png)

![Step 5: Cancellation Policy — admin default vs. custom](/images/partner/addingapropertystep2.png)

---

## After Submitting

Finishing step 8 sends the property straight into the admin's [Property Verification](/docs/admin/property-verification) queue — it starts as **Pending**, and stays invisible to guests until approved. Unlike single-mode's admin-created properties (which go live immediately), a partner-created property always needs that review first, no exceptions.

---

## Where to Go Next

- **Where the property shows up while waiting** → [Property Management](./property-management.md).
- **What the admin does with it** → [Property Verification](/docs/admin/property-verification).
