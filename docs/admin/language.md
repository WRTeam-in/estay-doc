---
id: language
title: Language Management
---

# Language Management

Manage all languages displayed in the eStay app and admin panel from **Settings → Languages**. You can add new languages, set the default, enable or disable languages, edit translations, and configure RTL support.

---

## Language List

![Language List](/images/panel/language-list.png)

The language list shows all configured languages with their:

- Language name and code (e.g., Arabic — `ar`)
- Status (enabled / disabled)
- RTL toggle
- Default language indicator

---

## Add a New Language

![Add Language](/images/panel/language-add.png)

1. Go to **Settings → Languages**.
2. Click **Add Language**.
3. Enter the **Language Name** (e.g., `Arabic`) and **Language Code** (e.g., `ar`).
4. Toggle **RTL** on if the language reads right-to-left (e.g., Arabic, Hebrew, Urdu).
5. Click **Save**.

The new language will appear in the list and is ready for translations.

---

## Edit Translations

![Language Translations](/images/panel/language-translations.png)

Translations are key-value pairs. The key is fixed; you edit only the value for each language.

1. Go to **Settings → Languages**.
2. Find the language you want to edit and click **Edit Translations**.
3. Update the translation values for each key.
4. Click **Save**.

:::info Missing translations
If a translation key has no value set for a language, the system falls back to the default language string.
:::

---

## Set Default Language

1. Go to **Settings → Languages**.
2. Find the language you want to set as default.
3. Click the **Set as Default** option.

The default language is used when the user's preferred language is not available or not set.

---

## Enable / Disable Languages

Toggle any language on or off directly from the language list. Disabled languages will not appear as options in the app or admin panel.

---

## RTL Language Support

When adding or editing a language, enable the **RTL** toggle to flip the entire UI layout for right-to-left reading direction. This applies automatically in both the app and admin panel when a user selects an RTL language.

---

## Import / Export Language Files

Language translations can be exported as a file for offline editing or imported in bulk.

- **Export:** Click **Export** on the language row to download the translation file.
- **Import:** Click **Import**, select your updated translation file, and upload it.

:::warning Import format
Ensure the imported file matches the expected format. Importing an incompatible file may overwrite existing translations incorrectly.
:::
