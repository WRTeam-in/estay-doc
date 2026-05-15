---
id: payment-settings
title: Payment Gateway Settings
---

# Payment Gateway Settings

Configure payment gateways from the admin panel at **Settings → Payment Settings**. Each gateway requires API credentials and a webhook endpoint.

---

## Stripe

![Stripe Payment Settings](/images/panel/payment-settings-stripe.png)

### Get API Keys

1. Log in to [Stripe Dashboard](https://dashboard.stripe.com/login).
2. Go to **Developers → API Keys**.
3. Copy the **Publishable Key** and **Secret Key**.

### Configure Webhook

1. Go to **Developers → Webhooks**.
2. Click **Add endpoint**.
3. Enter the webhook URL:
   ```
   https://yourdomain.com/stripe/webhook
   ```
4. Under **Events to listen to**, select:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Save the endpoint.

### Add to Admin Panel

Go to **Settings → Payment Settings → Stripe** and paste the **Publishable Key** and **Secret Key**.

---

## Razorpay

![Razorpay Payment Settings](/images/panel/payment-settings-razorpay.png)

### Get API Keys

1. Log in to [Razorpay Dashboard](https://dashboard.razorpay.com/).
2. Go to **Settings → API Keys**.
3. Click **Generate Key**.
4. Copy the **Key ID** and **Key Secret**.

### Configure Webhook

1. Go to **Settings → Webhooks**.
2. Click **Add new webhook**.
3. Enter the webhook URL:
   ```
   https://yourdomain.com/razorpay/webhook
   ```
4. Save the webhook.

### Add to Admin Panel

Go to **Settings → Payment Settings → Razorpay** and paste the **Key ID** and **Key Secret**.

---

## Paystack

![Paystack Payment Settings](/images/panel/payment-settings-paystack.png)

### Get API Keys

1. Log in to [Paystack Dashboard](https://dashboard.paystack.com/).
2. Go to **Settings → API Keys & Webhooks**.
3. Copy the **Public Key** and **Secret Key**.

### Configure Webhook

On the same **API Keys & Webhooks** page, enter the webhook URL:
```
https://yourdomain.com/paystack/webhook
```

### Add to Admin Panel

Go to **Settings → Payment Settings → Paystack** and paste the **Public Key** and **Secret Key**.

---

## PayPal

![PayPal Payment Settings](/images/panel/payment-settings-paypal.png)

### Get API Credentials

1. Log in to the [PayPal Developer Dashboard](https://developer.paypal.com/).
2. Go to **My Apps & Credentials**.
3. Click **Create App**, enter an app name, and select **Merchant**.
4. Copy the **Client ID** and **Secret**.

### Configure Webhook

1. Inside your PayPal app, scroll to the **Webhooks** section.
2. Click **Add Webhook**.
3. Enter the webhook URL:
   ```
   https://yourdomain.com/paypal/webhook
   ```
4. Save the webhook.

### Add to Admin Panel

Go to **Settings → Payment Settings → PayPal** and paste the **Client ID** and **Secret**.

:::info Sandbox vs Live
PayPal provides separate credentials for Sandbox (testing) and Live (production). Use **Live** credentials in production.
:::

---

## Flutterwave

![Flutterwave Payment Settings](/images/panel/payment-settings-flutterwave.png)

### Get API Keys

1. Log in to [Flutterwave Dashboard](https://dashboard.flutterwave.com/).
2. Go to **Developers → API Keys**.
3. Copy the **Public Key**, **Secret Key**, and **Encryption Key**.

### Configure Webhook

1. Go to **Settings → Webhooks**.
2. Enter the webhook URL:
   ```
   https://yourdomain.com/flutterwave/webhook
   ```
3. Save the webhook.

### Add to Admin Panel

Go to **Settings → Payment Settings → Flutterwave** and paste the **Public Key**, **Secret Key**, and **Encryption Key**.

---

:::warning Webhook URLs
Replace `yourdomain.com` with your actual domain in all webhook URLs. Webhooks must be reachable over **HTTPS** for payment events to be delivered correctly.
:::
