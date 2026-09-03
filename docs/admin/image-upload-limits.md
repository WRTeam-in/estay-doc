---
id: image-upload-limits
title: Image Upload Limits
---

# Image Upload Limits

How many images a room or review can have, and the max file size for room and property photos, aren't set anywhere in the admin panel UI — they're server-level defaults, changed by editing your `.env` file.

:::info Applies to both modes
None of these are gated by [Single or Multi Mode](./overview.md#single-mode-vs-multi-mode) — they apply identically everywhere the relevant upload happens, on both the admin and Partner Panel sides.
:::

---

## The 5 Variables

| Variable | Default | Controls |
|---|---|---|
| `ROOM_MIN_IMAGES` | `8` | Minimum images required when creating/editing a room type. |
| `ROOM_MAX_IMAGES` | `8` | Maximum images allowed for a room type. |
| `ROOM_MAX_IMAGE_SIZE_MB` | `5` | Max file size per room image, in MB. |
| `PROPERTY_MAX_IMAGE_SIZE_MB` | `3` | Max file size per property image, in MB. |
| `REVIEW_MAX_IMAGES` | `5` | Max photos a guest can attach to a review, submitted via the app/website — not something set in either panel. |

:::info Min and max default to the same number
Out of the box, `ROOM_MIN_IMAGES` and `ROOM_MAX_IMAGES` are both `8` — meaning a room type needs **exactly** 8 images by default. Set them to different values (e.g. min `4`, max `10`) to allow a range instead.
:::

---

## Where Each One Shows Up

- **Room image limits** — the Room Types upload step, wherever it appears: admin's [Room Inventory](./room-inventory.md) section (Single Mode), and the partner's own [Room Management](/docs/partner/room-management) and [Adding a Property](/docs/partner/adding-a-property) wizard (Multi Mode).
- **Property image limit** — the Property Images step of both admin's and the partner's property wizard (see [Property Management](./property-management.md), [Adding a Property](/docs/partner/adding-a-property)).
- **Review image limit** — only affects guests submitting a review with photos through the app or website. There's no partner or admin control for it — it's listed here because it's set the same way, not because either panel shows it.

There's no equivalent `PROPERTY_MIN_IMAGES` / `PROPERTY_MAX_IMAGES` — property listings use a fixed image count (a primary showcase set plus gallery groups), not a configurable range like rooms.

---

## Changing a Limit

1. Edit the variable in your server's `.env` file (add it if it isn't there yet — none of the 5 ship in `.env.example`).
2. **Clear the config cache**, or the old value keeps being used even after saving `.env`. If you have server/SSH access, run `php artisan config:clear`. Without SSH, log in as an admin and visit `/clear` — it clears application, config, route, and view caches in one go.

:::warning Don't set min higher than max
If `ROOM_MIN_IMAGES` ends up greater than `ROOM_MAX_IMAGES`, no room type can ever validate — nobody would be able to save enough images to pass the minimum without exceeding the maximum.
:::
