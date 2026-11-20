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
