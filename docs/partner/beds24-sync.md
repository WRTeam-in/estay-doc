---
id: beds24-sync
title: Beds24 Sync (Airbnb, Booking.com & more)
---

# Beds24 Sync

**Beds24** is a *channel manager* — one place that connects your property to booking sites such as **Airbnb** and **Booking.com**. **Beds24 Sync** links your property here to your own Beds24 account, so every calendar stays in step and **the same night is never sold twice**.

```
Airbnb · Booking.com · other sites   ⇄   Beds24   ⇄   Your property here
```

It works in both directions:

- **Bookings come in.** A booking made on Airbnb, Booking.com or inside Beds24 blocks those nights here.
- **Availability goes out.** A booking made here closes the same nights in Beds24, which passes it on to your booking sites.

:::info What is shared — and what is not
Only **which nights are free or taken** is shared. **Prices, photos, descriptions and guest details are not.** Prices stay in Beds24, and a booking made here does not appear as a *booking* inside Beds24 — it simply closes those nights there.
:::

:::warning Ask your admin to turn this on first
The platform admin must enable Beds24 Sync for partners before you can use it. If you don't see **Beds24 Sync** under **Room Management**, ask your admin — see [Step 1](#step-1-check-its-available).
:::

:::warning Beds24 Sync or Calendar Sync — one per room
A room can use **Beds24 Sync** *or* [Calendar Sync (iCal)](./calendar-sync.md), not both. If a room already has active Calendar Sync connections, deactivate them before linking that room to Beds24.
:::

---

## Before You Start

Have these ready so the setup runs smoothly:

- A **Beds24 account** with your property and rooms set up in it.
- Your **Airbnb, Booking.com or other listings connected to Beds24** (Step 2 shows where). Skip this if you've already done it.
- **Prices set in Beds24** for the nights you want to sell. Nothing here sends prices, and nights without a price are skipped.
- A Beds24 plan that allows booking-site sync. Beds24's free trial shows the notice *"Synchronisation with booking channels becomes available after the free trial"*, so check your plan.

---

## Step 1: Check It's Available

1. Select your property in the top bar.
2. In the Partner Panel open **Room Management** and look for **Beds24 Sync**.

![Beds24 Sync in the menu](/images/partner/beds24step1-menu.png)

1. **Room Management** — open this group in the sidebar.
2. **Beds24 Sync** — click it.

There is no setting for you to turn on — if it is missing, your admin has not enabled it for partners yet. (Your account also needs to be an approved partner.)

---

## Step 2: Connect Your Booking Sites to Beds24

This step is done **inside Beds24**, not here. Skip it if your listings are already connected there.

For **Airbnb**, for example:

1. In Beds24 go to **Settings → Channel Manager → Airbnb → Accounts** and click **Connect with Airbnb**. Log in to Airbnb and click **Allow**.
2. Open **Settings → Channel Manager → Airbnb → Mapping**.
3. Link your Beds24 room to the Airbnb listing and choose the **Sync Type**. We suggest **Prices & Availability** — it leaves your Airbnb description and photos alone.

![Beds24 Airbnb mapping page](/images/panel/beds24step2-airbnb-mapping.png)

1. **Where you are:** Channel Manager → Airbnb → Mapping.
2. **Airbnb account:** shows *Not connected* until you finish the Accounts step.
3. **Sync Type:** pick **Prices & Availability**.

:::warning Read this before you connect a live listing
- Once a listing is linked, Beds24 starts sending **prices and availability** to it. Before you finish, use Beds24's **View actual data** preview to see exactly what will be sent.
- Dates you have **blocked on Airbnb are not imported**. Block them in the Beds24 calendar *first*, or they will be opened for sale.
- The **currency** must be one Airbnb supports; if it isn't, use Beds24's *Multiplier* to convert.
:::

For Booking.com and other sites, follow Beds24's own guide for that site: [wiki.beds24.com](https://wiki.beds24.com/).

---

## Step 3: Get an Invite Code from Beds24

The invite code lets this platform read bookings and update availability. It works **once** and is never stored.

1. In Beds24 open **Settings → Marketplace → API** and click **Generate invite code**.
2. Tick **exactly these four permissions — and nothing else:** **Bookings — read**, **Properties — read**, **Inventory — read** and **Inventory — write**.
3. Do **not** tick any other write, delete or "all" permission, and do not allow linked properties. You may restrict the code to your one property.
4. Copy the code.

<!-- SCREENSHOT 3 — partner/beds24-sync — invite code (Beds24 side)
Same screenshot as the admin guide: static/images/panel/beds24step3-invitecode.png
![Generate the invite code in Beds24](/images/panel/beds24step3-invitecode.png) -->

:::danger Too many or too few permissions
The code is checked before connecting. It is **refused** if a permission is missing, and also if it grants more than needed. Just generate a new code with exactly the four above.
:::

---

## Step 4: Connect Your Property

1. Open **Room Management → Beds24 Sync**.
2. Click **Connect Beds24**.
3. Paste the **Invite code**, and type your **Beds24 property ID**.
4. Click **Connect Beds24**.

![Not connected yet](/images/partner/beds24step4-notconnected.png)

1. **Connect Beds24** — click it to open the window shown next.
2. **How to use Beds24 sync** — a short reminder built into the page. Click it any time to expand it.

![Connect Beds24](/images/panel/beds24step4-connect.png)

1. **Invite code** — paste the code from [Step 3](#step-3-get-an-invite-code-from-beds24). It shows as dots; click the eye icon to check it.
2. **Beds24 property ID** — type your Beds24 property ID.
3. **Connect Beds24** — click to finish.

:::tip Where do I find the Beds24 property ID?
It is the **number shown after your property's name** in Beds24 — for example *Nairobi Diamond Villa - **362257*** means the ID is `362257`.
:::

When it works, the **Status** on the page changes to **Connected**:

![The connected page](/images/panel/beds24step5-connected.png)

1. **Status** — **Connected**.
2. **Reservation polling** — when the platform last checked Beds24 for bookings. **On schedule** means it is checking regularly.
3. **Receiving bookings from Beds24** — **On**.
4. **Sending availability to Beds24** — **On**.

---

## Step 5: Link Your Rooms

A room shares nothing until it is linked to its Beds24 room.

1. In the **Room mappings** section, click **Map a room**.
2. Pick the Beds24 room that is the same as your room.
3. Save.

If your property is booked **as one unit** (a villa or whole home), click **Link this villa to Beds24** instead — there is no room to pick on your side. If only one Beds24 room fits, it links in one click.

![Link a room to Beds24](/images/panel/beds24step6-maproom.png)

1. **Your room** — the room of your property (here *Family Suite*).
2. **Beds24 room** — the matching room in Beds24. Each choice shows the room's name, quantity and ID.
3. **Save** — links the two rooms.

Rules to know:

- The Beds24 room **cannot have more units** than your room.
- Each room links to **one** Beds24 room, and each Beds24 room to one room.
- The room must be **active and bookable**.
- If the button is hidden, the page tells you why and what to do.

---

## Step 6: Add Prices in Beds24

Only **which nights are free or taken** is shared — your **prices stay in Beds24**. Make sure every night you want to sell has a price there.

Nights **without a price are skipped**. The room shows **Partly in sync** until you add them, and it is checked again **about every hour**. That is not an error — it just means some nights are waiting for a price.

---

## Step 7: Check That It Works

On the **Beds24 Sync** page, look for:

| Where | What you should see |
|---|---|
| **Status** | **Connected** |
| **Receiving bookings from Beds24** | **On** |
| **Sending availability to Beds24** | **On** |
| **Last successful poll** | A recent time, marked **On schedule** |
| **Availability updates** (per room) | **In sync** |

What the **Availability updates** messages mean:

| Message | Meaning |
|---|---|
| **Nothing sent yet** | The first update has not run yet. Give it up to 15 minutes. |
| **In sync** | Every night in the next 365 days was sent and checked. |
| **Partly in sync** | Some nights have no price in Beds24 yet. Hover over **Details** to see which. |
| **Failing** | Something needs your attention. Hover over **Details** to read why. |

![Room mappings status](/images/panel/beds24step7-status.png)

1. **Status** — *Quantities match*: your room and the Beds24 room have the same number of units.
2. **Availability updates** — *In sync*: everything was sent and checked.
3. **Last update sent** — when availability was last sent to Beds24.
4. **Details** — empty (—) when all is well. Otherwise hover over it to read a short note.

---

## Step 8 (Optional): Make It Faster with the Webhook

Without this step, bookings made elsewhere show up here within about **15–20 minutes**. A **webhook** makes Beds24 tell this platform *the moment* a booking changes, so it shows up in about a minute.

1. On the Beds24 Sync page click **Webhook setup**. Two values appear: **Webhook URL** and **Custom header**.
2. In Beds24 open **Settings → Properties → Access → Booking Webhook**.
3. Set **Webhook Version** to **2 – no personal data**.
4. Paste the **Webhook URL** into **URL**, and the **Custom header** into **Custom Header**.
5. Click **Save**.

![Webhook setup window](/images/panel/beds24step8-webhook-modal.png)

1. **Webhook URL** — click the copy icon and paste it into Beds24.
2. **Custom header** — shown as dots. Use the copy icon to copy it. Click the eye icon only if nobody else can see your screen.

:::danger Treat the Custom header like a password
It contains a secret. Never share it or post a screenshot of it. If it is ever exposed, click **Regenerate secret** on the Beds24 Sync page and paste the new header into Beds24 — the old one stops working immediately.
:::

You can skip this step: everything still syncs, just a little later.

---

## Day to Day

Once set up, nothing needs doing:

| What happens | How fast |
|---|---|
| A guest books here → the nights close in Beds24 (and your booking sites) | About **1–2 minutes** |
| A booking is cancelled here → the nights reopen | About **1–2 minutes** |
| A booking is made, changed or cancelled on Airbnb, Booking.com or in Beds24 → it shows here | About **15–20 minutes**, or about **1 minute** with the [webhook](#step-8-optional-make-it-faster-with-the-webhook) |

Bookings that come from Beds24 appear on your [Availability Calendar](./availability-calendar.md) as **Beds24 · #number** bars. **Guest names are never shared** from Beds24.

![Beds24 reservation on the Availability Calendar](/images/panel/beds24step9-calendar.png)

1. **A Beds24 booking** — an orange bar showing the Beds24 booking number and how many rooms it holds.
2. **Beds24 reservation** — the legend entry for these orange bars.
3. **Beds24 conflict (not blocked)** — the legend entry for a clash (see [below](#if-two-bookings-clash)).

Click a bar for its details (booking number, status, channel and the nights it holds) — never guest details.

---

## If Two Bookings Clash

Beds24 usually stops this before it happens: if you try to add a booking in Beds24 for nights already taken here, Beds24 warns **"The room is not available on these dates"**.

![Beds24 refusing a booking](/images/panel/beds24step9-beds24-refuses.png)

1. **The warning.** The nights are already taken here.
2. **"Continue anyway!"** Using this override — or two guests booking within the minute or two before the systems catch up — is the only way a clash can happen.

If it does happen, **the night is never double-booked here.** The booking you already had stays confirmed, and the clashing Beds24 booking appears as a red, dashed **Conflict** bar on your Availability Calendar.

![A clashing booking on the Availability Calendar](/images/panel/beds24step9-conflict.png)

1. **Your booking** — stays confirmed.
2. **The clashing Beds24 booking** — shown as a conflict; it does **not** block the nights again.

**What to do:** decide which of the two bookings to keep, then cancel or move the other. Nothing is cancelled for you automatically.

---

## Troubleshooting

| What you see | What it means | What to do |
|---|---|---|
| Status **Needs attention** | Beds24 no longer accepts the saved credentials. | Click **Reconnect Beds24** and use a new invite code. |
| **Last successful poll** says **Overdue** | Nothing has checked Beds24 for a while. | Tell your admin — the platform's scheduled tasks may not be running. |
| Invite code refused: *missing permissions* | One of the four permissions was not ticked. | Generate a new code with exactly the four in [Step 3](#step-3-get-an-invite-code-from-beds24). |
| Invite code refused: *grants more access than needed* | Extra permissions were ticked. | Generate a new code with only the four required. |
| Invite code refused: *invalid, expired or already used* | Codes work once. | Generate a fresh code in Beds24. |
| **Partly in sync** | Some nights have no price in Beds24. | Add prices in Beds24 — it re-checks about hourly. |
| **Failing** | The last update could not be sent or checked. | Hover over **Details** for the reason. If it mentions permissions, reconnect with a new code. |
| A booking made elsewhere is not showing | It can take up to about 20 minutes. | Wait, or set up the [webhook](#step-8-optional-make-it-faster-with-the-webhook). Also confirm the listing is connected in Beds24. |

---

## Disconnecting

Click **Disconnect** on the Beds24 Sync page, then confirm. Then:

- the saved credentials are removed and access is revoked at Beds24;
- any nights that were blocked by Beds24 bookings are **released** here;
- the room links are removed (booking history is kept).

:::warning Beds24 keeps the last dates it was sent
Disconnecting stops syncing, but **Beds24 keeps the last availability this platform sent**. Nights left open there stay open on your booking sites. Right after disconnecting, check your calendar in Beds24 and close or reopen dates yourself.
:::

---

## Good to Know

- **Manage dates from here.** If you edit availability for a linked room **by hand in Beds24**, it is overwritten at the next update.
- **Only free or taken nights are shared** — never prices, photos or guest details.
- **A booking made here does not create a booking inside Beds24.** It only closes the nights.
