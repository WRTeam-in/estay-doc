---
id: whatsapp-messages
title: WhatsApp Messages
---

# WhatsApp Messages

Your platform can send guests **automatic WhatsApp messages** from your own WhatsApp Business number:

| When | What the guest receives |
|---|---|
| A booking is **confirmed** | The booking details, a **Google Maps link** to the property and the **invoice PDF** |
| A booking is **cancelled** | A short cancellation notice |
| A refund is **processed** | The refund amount |
| You send a **marketing campaign** *(optional)* | Your promotion — to guests who haven't turned WhatsApp promotions off |

Messages go out through **Meta's official WhatsApp Cloud API** — the same company that owns WhatsApp. There is no third-party service in between and nothing to pay your platform. **Meta charges you per message** (see [Costs](#costs)).

<!-- SCREENSHOT 0 — admin/whatsapp-messages — what the guest sees
Capture: a phone screenshot of a real "Booking Confirmed" WhatsApp message (PDF attachment + text + map link). Blur the guest's name and phone number.
Save as: static/images/panel/whatsappstep0-guest-message.png
![The booking confirmation a guest receives](/images/panel/whatsappstep0-guest-message.png) -->

:::info Off until you switch it on
WhatsApp is **off by default**. Until you turn it on, nothing changes anywhere on your platform.
:::

:::info Multi mode
One WhatsApp number is used for the **whole platform**. Only the admin sets it up — partners don't need to do anything.
:::

---

## Before You Start

You need a few things from **Meta** (the company behind WhatsApp and Facebook). Gather these first — the Meta side takes the longest, mainly because of business verification.

| # | What you need | Why |
|---|---|---|
| 1 | A **Facebook account** | You use it to log in to Meta's business tools. |
| 2 | A **Meta Business portfolio** at [business.facebook.com](https://business.facebook.com) | Your business's home at Meta. Everything below belongs to it. |
| 3 | **Business verification** | Meta checks your business before it lets you message real guests. Have your **legal business name, address, phone, website** and a **business document** (for example a registration certificate or utility bill) ready. Review usually takes a few working days. |
| 4 | A **phone number for WhatsApp** | It must **not already be used** on the WhatsApp or WhatsApp Business app (delete that account first, or use a new number), and it must be able to **receive an SMS or a call** for a one-time code. |
| 5 | A **payment method** (card) in WhatsApp Manager | Meta bills you for the messages. |
| 6 | A **display name** for the number | The name guests see. Meta reviews it, so use your real business or brand name. |
| 7 | Your website on **HTTPS** | Meta only sends delivery updates to secure (https://) addresses. |
| 8 | **Cron jobs** running | Messages are sent in the background. See [Cron Jobs Setup](./cron-jobs.md). |

:::tip Just want to try it first?
Meta gives every new app a **free test number** that can message up to **5 phones you choose** — no business verification or payment needed. See [Trying It Out with Meta's Test Number](#trying-it-out-with-metas-test-number).
:::

---

## The Steps at a Glance

**At Meta (once):**
1. [Create your business portfolio and verify your business](#step-1-create-your-business-portfolio-and-get-verified)
2. [Create a Meta app with WhatsApp](#step-2-create-a-meta-app-with-whatsapp)
3. [Add your phone number and a payment method](#step-3-add-your-phone-number-and-a-payment-method)
4. [Copy four values from Meta](#step-4-copy-four-values-from-meta)

**In your Admin Panel:**

5. [Open WhatsApp Settings](#step-5-open-whatsapp-settings)
6. [Enter the connection details](#step-6-enter-the-connection-details)
7. [Test the connection](#step-7-test-the-connection)
8. [Connect the webhook](#step-8-connect-the-webhook)
9. [Create the message templates](#step-9-create-the-message-templates)
10. [Switch each message on](#step-10-switch-each-message-on)
11. [Check that it works](#step-11-check-that-it-works)

:::note Meta's screens change
Meta renames and moves its menus from time to time. If a button below has a slightly different name, look for the closest match.
:::

---

## Part A — At Meta

### Step 1: Create Your Business Portfolio and Get Verified

1. Go to [business.facebook.com](https://business.facebook.com) and log in with your Facebook account.
2. Create a **business portfolio** (or pick the one you already have).
3. Open **Settings → Business info**, find **Business verification** and click **Start verification**.
4. Follow Meta's steps and upload the documents it asks for.

<!-- SCREENSHOT 1 — admin/whatsapp-messages — Meta business verification
URL: business.facebook.com → Settings → Business info (or Security Centre)
Capture: the Business verification panel with the "Start verification" button. Highlight the button.
Save as: static/images/panel/whatsappstep1-meta-verification.png
![Start business verification in Meta](/images/panel/whatsappstep1-meta-verification.png) -->

You can carry on with Steps 2–4 while Meta reviews your documents.

---

### Step 2: Create a Meta App with WhatsApp

1. Go to [developers.facebook.com](https://developers.facebook.com) and click **My Apps → Create App**.
2. Choose the use case **Connect with customers through WhatsApp** (older screens: app type **Business**).
3. Give the app a name (only you will see it) and select your **business portfolio** from Step 1.
4. Finish the wizard. Meta now creates a **WhatsApp Business Account** for you — and a free test number.

<!-- SCREENSHOT 2 — admin/whatsapp-messages — create app with WhatsApp use case
URL: developers.facebook.com → My Apps → Create App
Capture: the use-case list with "Connect with customers through WhatsApp" selected. Highlight it.
Save as: static/images/panel/whatsappstep2-meta-create-app.png
![Create a Meta app with the WhatsApp use case](/images/panel/whatsappstep2-meta-create-app.png) -->

---

### Step 3: Add Your Phone Number and a Payment Method

**Add the number**

1. In your app, open **WhatsApp → API Setup**.
2. Click **Add phone number**.
3. Enter your **display name**, business category and the **phone number**.
4. Type in the code Meta sends to that number by SMS or call.

**Add a payment method**

1. Open [WhatsApp Manager](https://business.facebook.com/wa/manage/home/) (from your business portfolio).
2. Go to **Payment settings** (sometimes under *Account tools*) and **add a card**.

<!-- SCREENSHOT 3 — admin/whatsapp-messages — add phone number
URL: developers.facebook.com → your app → WhatsApp → API Setup
Capture: the "Add phone number" button / dialog. Highlight it. Blur the phone number.
Save as: static/images/panel/whatsappstep3-meta-add-number.png
![Add your phone number in Meta](/images/panel/whatsappstep3-meta-add-number.png) -->

---

### Step 4: Copy Four Values from Meta

Your platform needs **four values**. Paste them somewhere safe for the next part.

| Value | Where to find it |
|---|---|
| **Phone Number ID** | Your app → **WhatsApp → API Setup**, under your phone number. A long number. |
| **WhatsApp Business Account ID** | Same page, just below. **A different number from the Phone Number ID.** |
| **Access token** (permanent) | Created in your business portfolio — see the steps below. |
| **App Secret** | Your app → **App settings → Basic → App secret → Show**. |

<!-- SCREENSHOT 4 — admin/whatsapp-messages — IDs on API Setup
URL: developers.facebook.com → your app → WhatsApp → API Setup
Capture: the "From" phone number with "Phone number ID" and "WhatsApp Business Account ID" visible. Highlight both IDs (1, 2). Blur the phone number.
Save as: static/images/panel/whatsappstep4-meta-ids.png
![Phone Number ID and WhatsApp Business Account ID](/images/panel/whatsappstep4-meta-ids.png) -->

**Create the permanent access token**

1. In [business.facebook.com](https://business.facebook.com) open **Settings → Users → System users** and click **Add**. Give it any name and the **Admin** role.
2. Click **Assign assets** and give it **Full control** of:
   - your **app** (from Step 2), and
   - your **WhatsApp account**.
3. Click **Generate new token**:
   - App: your app
   - Token expiry: **Never**
   - Permissions: tick **whatsapp_business_messaging** and **whatsapp_business_management**
4. Click **Generate** and copy the token. Meta shows it **only once**.

<!-- SCREENSHOT 4b — admin/whatsapp-messages — system user token
URL: business.facebook.com → Settings → Users → System users → Generate new token
Capture: the token dialog with expiry "Never" and the two permissions ticked. Highlight them. Do NOT show the generated token.
Save as: static/images/panel/whatsappstep4-meta-token.png
![Generate a permanent token](/images/panel/whatsappstep4-meta-token.png) -->

:::warning Don't use the token from the API Setup page
The **Generate access token** button on *API Setup* gives a **temporary** token that stops working within about a day. Messages would then fail. Always use the **System user** token above.
:::

:::danger Keep the token and App Secret private
Anyone with them can send WhatsApp messages as your business. Don't email them or share screenshots of them.
:::

---

## Part B — In Your Admin Panel

### Step 5: Open WhatsApp Settings

In the sidebar open **Settings → WhatsApp Settings**.

![WhatsApp Settings in the menu](/images/panel/whatsappstep1-menu.png)

1. **Settings** — open this group.
2. **WhatsApp Settings** — click it.

---

### Step 6: Enter the Connection Details

![The Connection tab](/images/panel/whatsappstep3-connection.png)

1. **Connection** — make sure this tab is selected.
2. **Enable WhatsApp messages** — switch it on.
3. **Phone Number ID** — from Step 4.
4. **WhatsApp Business Account ID** — from Step 4.
5. **Access token** — paste the **permanent** token.
6. **App Secret** — from Step 4.
7. **Default template language** — the language your messages are written in, as a Meta language code: `en` for English (or `en_US`, `hi`, `ar` …).

Then click **Save Settings** at the bottom of the page:

![Save Settings](/images/panel/whatsappstep3-save.png)

1. **Save Settings** — don't forget this click.

:::tip The token field looks empty after saving?
That's on purpose. For safety the token and App Secret are never shown again — the box says **"Saved. Leave blank to keep it."** Only type in it when you want to **replace** the saved value.
:::

:::tip The two IDs look alike
The **Phone Number ID** and the **WhatsApp Business Account ID** are two different numbers. The page refuses to save if you paste the same number into both.
:::

---

### Step 7: Test the Connection

Use the buttons at the top of the page:

![Test buttons](/images/panel/whatsappstep4-test-buttons.png)

1. **Test connection** — checks the saved details with Meta. On success it shows your WhatsApp number and its name.
2. **Send test message** — sends Meta's standard *"Hello World"* message to a phone you choose.
3. **View message logs** — every message your platform has tried to send (see [Step 11](#step-11-check-that-it-works)).

![Send a test message](/images/panel/whatsappstep4-test-modal.png)

1. **Mobile number with country code** — for example `+91 98765 43210`.
2. **Send test message** — click and check the phone.

---

### Step 8: Connect the Webhook

The **webhook** lets Meta tell your platform what happened to each message — **delivered** or **read** — and lets guests reply **STOP** to stop WhatsApp promotions. Messages are still sent without it, but you won't see those updates.

**8a. Copy the two values** from the **Webhook (delivery status)** box on the Connection tab:

![Webhook values](/images/panel/whatsappstep5-webhook.png)

1. **Callback URL** — click the copy icon.
2. **Verify token** — click the copy icon.

**8b. Paste them into Meta:**

1. In [developers.facebook.com](https://developers.facebook.com) open your app → **WhatsApp → Configuration**.
2. Next to **Webhook**, click **Edit**.
3. Paste the **Callback URL** and the **Verify token**, then click **Verify and save**.
4. Under **Webhook fields**, click **Manage** and **Subscribe** to **messages**.

<!-- SCREENSHOT 8b — admin/whatsapp-messages — webhook in Meta
URL: developers.facebook.com → your app → WhatsApp → Configuration
Capture: (a) the Edit webhook dialog with Callback URL + Verify token filled — blur both values; (b) the Webhook fields list with "messages" subscribed. Highlight the fields and the Subscribe toggle.
Save as: static/images/panel/whatsappstep5-meta-webhook.png
![Webhook settings in Meta](/images/panel/whatsappstep5-meta-webhook.png) -->

:::warning Save the App Secret first
Your platform uses the **App Secret** (Step 6) to check that updates really come from Meta. Without it, delivery updates and STOP replies are ignored.
:::

---

### Step 9: Create the Message Templates

WhatsApp only lets a business **start** a conversation with a **template** — a message Meta has approved in advance, with blanks like `{{1}}` that your platform fills in (guest name, booking number…). You don't have to write them yourself: your platform creates the three standard templates in your Meta account for you.

Open the **Templates** tab:

![The Templates tab before anything is created](/images/panel/whatsappstep6-templates-new.png)

1. **Templates** — open this tab.
2. **Create all missing in Meta** — creates every message that isn't created yet, with the standard wording. **Easiest option.**
3. **Not created** — Meta doesn't have this message yet.
4. **Create in Meta** (cloud icon) — create just this one, and edit its wording first if you like.

If you click the cloud icon, you can change the wording before it is sent:

![Create a template](/images/panel/whatsappstep6-create-modal.png)

1. **The variables** — what each `{{1}}`, `{{2}}` … is replaced with. For Booking Confirmed, the invoice PDF is attached as well.
2. **Wording** — change the words freely, but **keep every variable**, and don't start or end the message with a variable.
3. **Create in Meta** — sends it to Meta for review.

:::info Meta reviews every template
Review usually takes **from a few minutes to a few hours**, sometimes up to a day. The standard wording is in English — if your guests use another language, translate it before creating (and keep the variables).
:::

---

### Step 10: Switch Each Message On

Come back to the **Templates** tab later and click **Refresh status**.

![Template statuses](/images/panel/whatsappstep7-templates-status.png)

1. **Refresh status** — asks Meta for the latest status.
2. **Pending Meta review** — Meta hasn't decided yet. Check again later.
3. **Approved, not switched on** — Meta approved it. Your platform does **not** send it yet.
4. **Switch on** (tick icon) — click to start sending this message.

![Switch on a message](/images/panel/whatsappstep8-switch-on-modal.png)

1. **Switch on** — confirm. Your platform checks with Meta once more, then turns it on.

The message is now **Active**:

![An active message](/images/panel/whatsappstep8-templates-active.png)

1. **Active** — guests now receive this message.
2. **Last changed** — when this message was added or switched on/off (shown in your own time).
3. **Switch off** (pause icon) — stop sending it. You can switch it on again any time.
4. **Remove** (bin icon) — forget this template on your platform. It stays in your Meta account.
5. **Last checked with Meta** — when the statuses were last read from Meta.

Click the **eye icon** on any row to see exactly what Meta holds:

![What Meta holds](/images/panel/whatsappstep8-view-modal.png)

1. **Status** — Meta's own status (*APPROVED*, *PENDING*, *REJECTED* …).
2. **Category** — *UTILITY* for booking messages (cheaper), *MARKETING* for promotions.
3. **Wording in Meta** — the exact text guests receive, with `{{1}}` … filled in.

**What each status means**

| Status | Meaning | What to do |
|---|---|---|
| **Not created** | Meta doesn't have this message yet. | Create it (Step 9). |
| **Pending Meta review** | Meta is reviewing it. | Wait, then **Refresh status**. |
| **Approved, not switched on** | Approved, but not used yet. | Click **Switch on**. |
| **Active** | Approved and being sent. | Nothing. |
| **Rejected** | Meta refused it. The reason is shown under the badge. | Fix the wording in WhatsApp Manager and submit again. |
| **Needs attention** | Paused by Meta, or the template has the wrong number of variables. | Read the sentence under the badge. |
| **Not found in Meta** | Your platform points to a template Meta doesn't have. | Create it in Meta, or **Remove** the row. |
| **Can't check right now** | Your platform couldn't reach your Meta account. A red notice above the table says why. | Usually a wrong **Business Account ID** or an expired token — check Step 6. |

---

### Step 11: Check That It Works

1. Make a **test booking** with **your own mobile number** as the guest phone (with the country code).
2. Within a minute or two you should receive the **booking confirmation with the invoice PDF**.
3. Click **View message logs** at the top of the WhatsApp Settings page to see what happened:

![Message logs](/images/panel/whatsappstep10-logs.png)

1. **When** — the time the message was created, shown in **your own time zone**.
2. **Status** — *Read* means the guest opened it.
3. **Failed** — the message could not be sent.
4. **Details** — the reason, in Meta's words with a hint (hover to read it all).
5. **Retry** — send a failed message again after you've fixed the cause.

| Log status | Meaning |
|---|---|
| **Pending** | Waiting to be sent. It should not stay like this for more than a couple of minutes. |
| **Sent** | Meta accepted the message. |
| **Delivered** | It reached the guest's phone. *(Needs the webhook — Step 8.)* |
| **Read** | The guest opened it. *(Needs the webhook — Step 8.)* |
| **Failed** | It could not be sent. See **Details**. |

Messages are sent by a background **worker**. You can see that it is running on **Settings → System Configure → Cron Jobs**:

![The WhatsApp worker card](/images/panel/whatsappstep11-worker.png)

**Active** means messages are being sent. **Inactive** means your cron jobs are not running — see [Cron Jobs Setup](./cron-jobs.md).

---

## More Languages and Marketing Templates *(Optional)*

The **Add template** button on the Templates tab links a template **you created yourself in Meta** to your platform. Use it for:

- **Another language** — for example the booking confirmation in Hindi. Guests whose app language is Hindi then get the Hindi version; everyone else gets your default language.
- **Marketing templates** — needed for [WhatsApp marketing campaigns](#sending-marketing-campaigns-on-whatsapp).
- **A template with your own name** — if you already have an approved template in Meta.

**First, create the template in Meta:** open [WhatsApp Manager](https://business.facebook.com/wa/manage/message-templates/) → **Message templates → Create template**. Use the variables, in the order, shown in the window below.

**Then add it here:**

![Add a template](/images/panel/whatsappstep9-add-template.png)

1. **Language code** — the language of the template in Meta (for example `en` or `hi`).
2. **Event** — which message this template is for. Only messages that don't have a template in this language yet are listed.
3. **Variables** — the `{{1}}`, `{{2}}` … your template in Meta must contain, in this order.
4. **Meta template name** — exactly as it is in Meta (lowercase letters, numbers and underscores).
5. **Add template** — adds it to the table, **switched off**. Click **Switch on** once Meta shows it as approved.

| Template | Meta category | Variables |
|---|---|---|
| **Marketing (text)** | Marketing | `{{1}}` campaign title, `{{2}}` campaign message |
| **Marketing (with image)** | Marketing, with an **image header** | `{{1}}` campaign title, `{{2}}` campaign message |

---

## Sending Marketing Campaigns on WhatsApp

Once a **Marketing (text)** template is **Active**, WhatsApp appears as a channel when you send a campaign from **Marketing → Notifications → Send Notification** (see [Marketing Notifications](./marketing-notifications.md)):

![WhatsApp as a campaign channel](/images/panel/whatsappstep12-marketing-channel.png)

1. **WhatsApp** — tick it, alone or together with Push Notification and Email.

Who receives it:

- **Every guest, unless they turned it off.** **WhatsApp Promotions** is **on** for everyone by default. Guests can turn it off in their notification settings in the app or website.
- Only guests with a **phone number and country code** on their profile.
- A guest who replies **STOP** (or **UNSUBSCRIBE**) is switched off automatically *(needs the webhook — Step 8)*.
- A campaign **with an image** also needs the **Marketing (with image)** template to be Active.

:::warning Tell your guests
Meta expects people to agree before they receive promotions on WhatsApp. Because WhatsApp Promotions is on by default, make sure your **sign-up terms or privacy policy** say guests may receive offers on WhatsApp and can stop them at any time (reply **STOP**, or turn the setting off). If many guests block or report your promotions, Meta can limit your number — and that also affects booking messages.
:::

:::info Not set up? Nothing changes
Until a marketing template is Active, the campaign form looks exactly as before — no WhatsApp option.
:::

---

## Trying It Out with Meta's Test Number

Every Meta app comes with a **free test number**. It's perfect for trying everything before your business is verified.

- **No verification and no payment** are needed.
- It can only message **up to 5 phone numbers** that you add yourself:
  1. In your app open **WhatsApp → API Setup**.
  2. In the **To** field choose **Manage phone number list → Add phone number**.
  3. Enter the number; its owner receives a code on WhatsApp — type it in.
- When you test bookings, use one of those numbers as the **guest phone**.
- The **Generate access token** button on that page gives a token that expires within about a day. For longer testing, create the **permanent token** from [Step 4](#step-4-copy-four-values-from-meta).
- When you're ready for real guests, add your real number ([Step 3](#step-3-add-your-phone-number-and-a-payment-method)) and paste its **Phone Number ID** on the Connection tab.

---

## Costs

- **Your platform charges nothing** for WhatsApp.
- **Meta charges per message**, billed to the payment method in your WhatsApp Manager. The price depends on the **guest's country** and the **message category** — booking messages are *Utility* (cheaper), promotions are *Marketing* (dearer).
- Meta's prices change from time to time — check Meta's current WhatsApp pricing page before you go live.

---

## Troubleshooting

| What you see | What it means | What to do |
|---|---|---|
| **Test connection** fails with *Invalid OAuth access token* (or code 190) | The token has expired or is wrong. | Create a **permanent** token (Step 4) and paste it into **Access token**. |
| Templates tab: **Can't check right now** with a red notice | Your platform can't read your templates from Meta. | Check the **WhatsApp Business Account ID** — it's often the Phone Number ID pasted by mistake. Also check the token has **whatsapp_business_management**. |
| Log **Failed**: *(#132001) Template name does not exist in the translation* | The template isn't approved yet, or the name/language doesn't match Meta. | Wait for approval, then **Retry**. Otherwise check the name and language on the Templates tab. |
| Log **Failed**: *(#131030) Recipient phone number not in allowed list* | You're using Meta's **test number**, and this phone isn't on its list. | Add the number ([test number](#trying-it-out-with-metas-test-number)), or switch to your real number. |
| Log **Failed**: *no valid guest phone number* | The booking has no phone number or no country code. | Make sure the guest phone includes the country code. |
| Log stays **Pending** | The background worker isn't running. | Check the **WhatsApp Worker Status** card and your [cron jobs](./cron-jobs.md). |
| Messages stay **Sent** — never *Delivered* or *Read* | The webhook isn't connected. | Do [Step 8](#step-8-connect-the-webhook) and make sure the **App Secret** is saved. |
| No message at all, and no log row | WhatsApp is switched off, or that message isn't **Active**. | Switch on **Enable WhatsApp messages** (Step 6) and the message (Step 10). |
| A template stays **Pending** for more than a day | Meta hasn't reviewed it. This can happen while your business isn't verified or has no payment method. | Finish business verification and add a payment method. |
| **Needs attention** — *the template has X variables but Y are expected* | The template in Meta doesn't match what your platform sends. | Fix the template in Meta so it has exactly the listed variables. |

---

## Good to Know

- **Off means off.** With *Enable WhatsApp messages* switched off, no WhatsApp message is sent and the rest of the platform works exactly as before.
- **Guests get their own language** when a template exists for it; otherwise your default language.
- **You can't send free text.** WhatsApp only allows approved templates when your business starts the conversation.
- **Changing the wording later:** once a template exists, Meta controls its wording. Edit it in WhatsApp Manager — Meta reviews it again. The eye icon always shows what Meta holds now.
- **Removing a row** on the Templates tab only removes the link on your platform. The template stays in your Meta account.
