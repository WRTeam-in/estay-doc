---
id: change-fonts
title: Change Fonts
---

# How to Change Fonts

eStay web uses **Outfit** (Google Fonts) as the global font. It's self-hosted at build time via `next/font` — no external CDN requests at runtime.

---

## How It Works

| Step | What happens | File |
|------|-------------|------|
| 1. Load | `Outfit` imported from `next/font/google` with all 9 weights (100–900), latin subset | `src/app/layout.tsx:12-16` |
| 2. Expose | CSS variable `--font-outfit` injected on `<body>` via `outfit.variable` class | `src/app/layout.tsx:57` |
| 3. Apply | `* { font-family: var(--font-outfit) }` applies it globally | `src/app/globals.css:152` |

Also available as Tailwind utility: `font-[var(--font-outfit)]` via `primaryFont` alias in `globals.css`.

---

## How to Change the Font

### Step 1 — Replace the Import in layout.tsx

Open `src/app/layout.tsx` and replace the `Outfit` import with your chosen font:

```ts
// Before
import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

// After (example: Poppins)
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
```

Also update the class applied to `<body>` on line 57:

```tsx
// Before
<body className={outfit.variable}>

// After
<body className={poppins.variable}>
```

---

### Step 2 — Update the CSS Variable in globals.css

Open `src/app/globals.css` and update the variable reference:

```css
/* Before — line ~138 */
--font-outfit: 'Outfit', sans-serif;

/* After */
--font-poppins: 'Poppins', sans-serif;
```

Update the universal rule on line ~152:

```css
/* Before */
* {
  font-family: var(--font-outfit);
}

/* After */
* {
  font-family: var(--font-poppins);
}
```

---

:::info
Any font available on [Google Fonts](https://fonts.google.com) can be imported via `next/font/google`. `next/font` self-hosts it at build time — no runtime network request to Google CDN.
:::
