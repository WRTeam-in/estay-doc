---
id: beds24-sync
title: Beds24 Sync (Airbnb, Booking.com & more)
---

# Beds24 Sync

**Beds24** is a *channel manager* — one place that connects your property to booking sites such as **Airbnb** and **Booking.com**. **Beds24 Sync** links your platform to your Beds24 account, so every calendar stays in step and **the same night is never sold twice**.

```
Airbnb · Booking.com · other sites   ⇄   Beds24   ⇄   Your platform
```

It works in both directions:

- **Bookings come in.** A booking made on Airbnb, Booking.com or inside Beds24 blocks those nights on your platform.
- **Availability goes out.** A booking made on your platform closes the same nights in Beds24, which passes it on to your booking sites.

:::info What is shared — and what is not
Only **which nights are free or taken** is shared. **Prices, photos, descriptions and guest details are not.** Prices stay in Beds24, and a booking made on your platform does not appear as a *booking* inside Beds24 — it simply closes those nights there.
:::

:::warning Beds24 Sync or Calendar Sync — one per room
A room can use **Beds24 Sync** *or* [Calendar Sync (iCal)](./calendar-sync.md), not both. If a room already has active Calendar Sync connections, deactivate them before linking that room to Beds24.
:::

:::info Multi mode
In **multi mode**, partners connect their own properties from the Partner Panel — you only switch the feature on for them (see [Step 1](#step-1-turn-on-beds24-sync)). Partners follow the Partner Panel version of this guide.
:::

---

## Before You Start

Have these ready so the setup runs smoothly:

- A **Beds24 account** with your property and rooms set up in it.
- Your **Airbnb, Booking.com or other listings connected to Beds24** (Step 2 shows where). Skip this if you've already done it.
- **Prices set in Beds24** for the nights you want to sell. Your platform never sends prices, and it skips nights that have none.
- A Beds24 plan that allows booking-site sync. Beds24's free trial shows the notice *"Synchronisation with booking channels becomes available after the free trial"*, so check your plan.

---

## Step 1: Turn On Beds24 Sync

Beds24 Sync is **off by default**, and nothing below appears until you switch it on.

1. Go to **Settings → System Configure** and open the **App Configuration** tab.
2. Find the **Beds24 Sync** section and turn on **Enable Beds24 sync**.
3. Save.

![Enable Beds24 sync](/images/panel/beds24step1-toggle.png)

1. **The Beds24 Sync section** — on the **App Configuration** tab.
2. **Enable Beds24 sync** — switch it on. (The small lock beside it, as in this picture, appears once a property is connected — see the tip below.)
3. **Save Settings** — don't forget this last click.

This **one switch** turns on both directions — receiving bookings *and* sending availability. There is nothing else to enable.

:::info Multi mode
In multi mode the same switch lives in **Partner Settings** and is called **Allow partners to use Beds24 sync**.
:::

:::tip Turning it off later?
The switch **locks** while any property is still connected to Beds24 — hover the lock icon to see how many connections to remove first. This stops you cutting off a live sync by accident.
:::

---

## Step 2: Connect Your Booking Sites to Beds24

This step is done **inside Beds24**, not on your platform. Skip it if your listings are already connected there.

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

The invite code lets your platform read bookings and update availability. It works **once** and is never stored.

1. In Beds24 open **Settings → Marketplace → API** and click **Generate invite code**.
2. Tick **exactly these four permissions — and nothing else:**

| Permission | Why it is needed |
|---|---|
| **Bookings — read** | To bring in bookings made on other sites. |
| **Properties — read** | To find your Beds24 property and rooms. |
| **Inventory — read** | To check what Beds24 currently shows. |
| **Inventory — write** | To close and reopen nights. |

3. Do **not** tick any other write, delete or "all" permission, and do not allow linked properties. You may restrict the code to your one property.
4. Copy the code.

<!-- SCREENSHOT 3 — admin/beds24-sync — invite code (Beds24 side)
URL: Beds24 → Settings → Marketplace → API
Capture: the "Generate invite code" screen with the four permissions ticked (Bookings read, Properties read, Inventory read, Inventory write). Blur the generated code itself.
Save as: static/images/panel/beds24step3-invitecode.png
![Generate the invite code in Beds24](/images/panel/beds24step3-invitecode.png) -->

:::danger Too many or too few permissions
Your platform checks the code before connecting. It is **refused** if a permission is missing, and also if it grants more than needed — it never needs to change bookings or property settings. Just generate a new code with exactly the four above.
:::

---

## Step 4: Connect Your Property

**4a. Open the page.** In the Admin Panel open **Room Management**, then **Beds24 Sync**.

![Beds24 Sync in the menu](/images/panel/beds24step4-menu.png)

1. **Room Management** — open this group in the sidebar.
2. **Beds24 Sync** — click it.

:::tip Don't see Beds24 Sync?
Either Beds24 Sync is still switched off ([Step 1](#step-1-turn-on-beds24-sync)) or your role does not include Room Management.
:::

**4b. Click Connect Beds24.** Make sure your property is selected in the top bar first.

![Not connected yet](/images/panel/beds24step4-notconnected.png)

1. **Connect Beds24** — click it.
2. **How to use Beds24 sync** — a short reminder built into the page. Click it any time to expand it.

**4c. Paste the code and your property ID.**

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
2. **Reservation polling** — when your platform last checked Beds24 for bookings. **On schedule** means it is checking regularly.
3. **Receiving bookings from Beds24** — **On**.
4. **Sending availability to Beds24** — **On**.

---

## Step 5: Link Your Rooms

A room shares nothing until it is linked to its Beds24 room.

1. In the **Room mappings** section, click **Map a room**.
2. Pick the Beds24 room that is the same as your room.
3. Save.

If your property is booked **as one unit** (a villa or whole home), there is no room to choose on your side — click **Link this villa to Beds24** instead. If only one Beds24 room fits, it links in one click.

![Link a room to Beds24](/images/panel/beds24step6-maproom.png)

1. **Your room** — the room on your platform (here *Family Suite*).
2. **Beds24 room** — the matching room in Beds24. Each choice shows the room's name, quantity and ID.
3. **Save** — links the two rooms.

Rules to know:

- The Beds24 room **cannot have more units** than your room. (*Beds24 has fewer units* is allowed — Beds24 simply can't sell more than it has.)
- Each room links to **one** Beds24 room, and each Beds24 room to one room.
- The room must be **active and bookable**.
- If the button is hidden, the page tells you why and what to do (for example: *All rooms of this property are linked*, or *This room uses Calendar Sync*).

The **Status** column then shows **Quantities match**, or a note if the numbers differ (for example *Beds24 has fewer units*).

---

## Step 6: Add Prices in Beds24

Your platform shares which nights are free or taken — your **prices stay in Beds24**. Make sure every night you want to sell has a price there.

Nights **without a price are skipped**. The room shows **Partly in sync** until you add them, and your platform checks again **about every hour**.

:::tip Pricing a few months at a time is fine
You don't have to price a full year. Partly in sync simply means *some nights are still waiting for a price* — it is not an error.
:::

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
3. **Last update sent** — when your platform last sent availability to Beds24.
4. **Details** — empty (—) when all is well. Otherwise hover over it to read a short note.

---

## Step 8 (Optional): Make It Faster with the Webhook

Without this step, your platform checks Beds24 about **every 15 minutes**. A **webhook** makes Beds24 tell your platform *the moment* a booking changes, so it shows up in about a minute.

1. On the Beds24 Sync page click **Webhook setup**. Two values appear: **Webhook URL** and **Custom header**.
2. In Beds24 open **Settings → Properties → Access → Booking Webhook**.
3. Set **Webhook Version** to **2 – no personal data**.
4. Paste the **Webhook URL** into **URL**, and the **Custom header** into **Custom Header**.
5. Click **Save**.

![Webhook setup window](/images/panel/beds24step8-webhook-modal.png)

1. **Webhook URL** — click the copy icon and paste it into Beds24.
2. **Custom header** — shown as dots. Use the copy icon to copy it. Click the eye icon only if nobody else can see your screen.

<!-- SCREENSHOT 8b — admin/beds24-sync — Beds24 side of the webhook (still to capture)
URL: Beds24 → Settings → Properties → Access → Booking Webhook (filled in)
Capture: the form with Webhook Version "2 - no personal data", URL and Custom Header filled. IMPORTANT — blur the URL and the custom header completely; they contain a secret.
Save as: static/images/panel/beds24step8-webhook-beds24.png
![Beds24 webhook form](/images/panel/beds24step8-webhook-beds24.png) -->

:::danger Treat the Custom header like a password
It contains a secret. Never share it or post a screenshot of it. If it is ever exposed, click **Regenerate secret** on the Beds24 Sync page and paste the new header into Beds24 — the old one stops working immediately.
:::

You can skip this step entirely: without it everything still syncs, just up to about 20 minutes later.

---

## Day to Day

Once set up, nothing needs doing. This is what happens:

| What happens | How fast |
|---|---|
| A guest books on your platform → the nights close in Beds24 (and your booking sites) | About **1–2 minutes** |
| A booking is cancelled on your platform → the nights reopen | About **1–2 minutes** |
| A booking is made, changed or cancelled on Airbnb, Booking.com or in Beds24 → it shows on your platform | About **15–20 minutes**, or about **1 minute** with the [webhook](#step-8-optional-make-it-faster-with-the-webhook) |

Bookings that come from Beds24 appear on the [Availability Calendar](./availability-calendar.md) as **Beds24 · #number** bars. Click one for its details. **Guest names are never shared** from Beds24.

![Beds24 reservation on the Availability Calendar](/images/panel/beds24step9-calendar.png)

1. **A Beds24 booking** — an orange bar showing the Beds24 booking number and how many rooms it holds.
2. **Beds24 reservation** — the legend entry for these orange bars.
3. **Beds24 conflict (not blocked)** — the legend entry for a clash (see [below](#if-two-bookings-clash)).

Click a bar to see its details:

![Beds24 reservation details](/images/panel/beds24step9-reservation.png)

1. **Reservation ID** — the booking number in Beds24.
2. **Status** — *Active* means it is blocking those nights here.
3. **Channel** — the booking site it came from (here *booking*, meaning Booking.com).
4. **Blocked dates** — the nights it holds here. Only dates — never guest details.

---

## If Two Bookings Clash

Beds24 usually stops this before it happens: if you try to add a booking in Beds24 for nights your platform has already closed, Beds24 warns **"The room is not available on these dates"**.

![Beds24 refusing a booking](/images/panel/beds24step9-beds24-refuses.png)

1. **The warning.** The nights are already taken on your platform.
2. **"Continue anyway!"** Using this override — or two guests booking within the minute or two before the systems catch up — is the only way a clash can happen.

If it does happen, **your platform never double-books the night.** The booking you already had stays confirmed, and the clashing Beds24 booking appears as a red, dashed **Conflict** bar on the Availability Calendar.

![A clashing booking on the Availability Calendar](/images/panel/beds24step9-conflict.png)

1. **Your booking** — stays confirmed.
2. **The clashing Beds24 booking** — shown as a conflict; it does **not** block the nights again.

**What to do:** decide which of the two bookings to keep, then cancel or move the other (usually the one made in Beds24 or on the booking site). Nothing is cancelled for you automatically.

---

## Troubleshooting

| What you see | What it means | What to do |
|---|---|---|
| Status **Needs attention** | Beds24 no longer accepts the saved credentials. | Click **Reconnect Beds24** and use a new invite code. |
| **Last successful poll** says **Overdue** | Nothing has checked Beds24 for a while. | Check your scheduled tasks are running — see [Cron Jobs Setup](./cron-jobs.md). The **Beds24 Worker Status** card there shows whether the background worker is alive. |
| Invite code refused: *missing permissions* | One of the four permissions was not ticked. | Generate a new code with exactly the four in [Step 3](#step-3-get-an-invite-code-from-beds24). |
| Invite code refused: *grants more access than needed* | Extra permissions were ticked. | Generate a new code with only the four required. |
| Invite code refused: *invalid, expired or already used* | Codes work once. | Generate a fresh code in Beds24. |
| **Partly in sync** | Some nights have no price in Beds24. | Add prices in Beds24 — it re-checks about hourly. |
| **Failing** | The last update could not be sent or checked. | Hover over **Details** for the reason. If it mentions permissions, reconnect with a new code. |
| A booking made elsewhere is not showing | It can take up to about 20 minutes. | Wait, or set up the [webhook](#step-8-optional-make-it-faster-with-the-webhook). Also confirm the listing is connected in Beds24. |
| Can't turn Beds24 Sync off | A property is still connected. | Disconnect it and remove its room links first. |

---

## Disconnecting

Click **Disconnect** on the Beds24 Sync page, then confirm. Your platform then:

- removes the saved credentials and revokes its access at Beds24;
- **releases** any nights that were blocked by Beds24 bookings;
- removes the room links (the booking history is kept).

:::warning Beds24 keeps the last dates it was sent
Disconnecting stops syncing, but **Beds24 keeps the last availability your platform sent**. Nights left open there stay open on your booking sites. Before or right after disconnecting, check your calendar in Beds24 and close or reopen dates yourself.
:::

---

## A Quick Reminder Inside the Panel

You don't have to come back to this page every time. The **Beds24 Sync** page has a short guide built in — click **How to use Beds24 sync** at the top to open it.

![The built-in guide](/images/panel/beds24step0-guide.png)

1. **How to use Beds24 sync** — click to open or close the guide.
2. **Good to know** — four short reminders about what is shared, how fast it is, and what happens when you disconnect.

---

## Good to Know

- **Manage dates from your platform.** If you edit availability for a linked room **by hand in Beds24**, your platform overwrites it at its next update.
- **Only free or taken nights are shared** — never prices, photos or guest details.
- **A booking made on your platform does not create a booking inside Beds24.** It only closes the nights.
- **Same scheduled tasks as everything else.** Beds24 Sync uses your platform's regular cron setup — no extra cron entry — see [Cron Jobs Setup](./cron-jobs.md).
