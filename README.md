# Kahuripan Sejahtera

Company profile website for Kahuripan Sejahtera, a secondhand goods business serving Jabodetabek.

## Run locally

```bash
npm install
npm run dev
```

## Available scripts

- `npm run dev` — start the Vite development server
- `npm run build` — create a production build in `dist/`
- `npm run preview` — preview the production build locally
- `npm run format` — format JavaScript and JSX files with Prettier

## Project structure

```text
src/
├── components/       Reusable page sections and UI components
├── data/              Navigation, services, gallery, and highlight content
├── utils/             Shared helpers, including WhatsApp links
├── main.jsx           App composition and React entry point
└── styles.css         Global styles and responsive layout
public/images/         Local illustrations, photos, and image attributions
```

## Common updates

- Change the WhatsApp number in `src/utils/whatsapp.js`.
- Edit company text and gallery items in `src/data/siteContent.js`.
- Add or replace local images in `public/images/`.
- Add or adjust sections in `src/components/`.

## Google tag

Copy `.env.example` to `.env` if you want to override the Google Tag Manager container ID:

```env
VITE_GOOGLE_TAG_ID=GTM-M2WC6WXD
```

The project uses `GTM-M2WC6WXD` by default. Do not commit `.env`.

The app sends these events to Google Tag Manager's `dataLayer`:

- `page_view` — records each page visit with `page_path` and `page_title`.
- `whatsapp_contact_click` — records WhatsApp clicks with `button_label`, `button_location`, and `destination`.

Create Custom Event triggers with these names in Google Tag Manager, then connect them to your GA4 Event tags.
