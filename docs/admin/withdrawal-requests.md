---
id: withdrawal-requests
title: Withdrawal Requests
---

# Withdrawal Requests

When a partner asks to cash out their wallet balance (built up from [Property Payout](./property-payout.md) credits), the request lands here for you to approve or reject.

:::info Multi-mode only, and country-scoped
This page exists only in [Multi Mode](./overview.md#single-mode-vs-multi-mode), scoped to the country selected in the topbar.
:::

---

## The List

| Column | Description |
|---|---|
| **Payout ID** | A padded reference number. |
| **Partner Info** | Avatar, name, partner ID — searchable. |
| **Property Info** | The property the wallet belongs to, with its type. |
| **Amount** | Requested amount, in that country's currency. |
| **Withdrawal Date** | When the partner requested it. |
| **Approval Date** | When you processed it, if you have. |
| **Status** | **Pending**, **Approved**, or **Rejected**. |

Filter by status.

![Withdrawal Requests List](/images/panel/withdrawalrequeststep1.png)

---

## Processing a Request

**Pending** rows show a pencil icon — **Manage** — that opens the partner's details together with the decision. The modal shows the partner (name, location), the property, the requested amount, and the **payout destination**: bank name, masked account number, account holder, and bank code.

- **Submit** approves the withdrawal.
- **Reject Request** (a link inside the same modal) opens its own form requiring a reason (up to 500 characters).

Already-processed rows show an eye icon instead — a read-only version of the same details, plus your admin notes if it was rejected.

:::warning The transfer itself happens outside the system
Approving marks the request as paid out on the platform — it does **not** move money. Send the actual bank transfer yourself using the payout destination shown, the same way [Manual Refunds](./manual-refunds.md) works for customers.
:::

---

## Where to Go Next

- **Where the balance being withdrawn came from** → [Property Payout](./property-payout.md).
- **The partner's own view of their wallet** → [Wallet](/docs/partner/wallet) in the Partner Panel.
