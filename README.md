# AirBorneSoldier — Sky Brotherhood

Premium heritage streetwear. Understated design, built on a sense of belonging.

## Stack
- Astro
- Tailwind CSS v4 (Vite plugin)

## Local development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Project status
This is the initial storefront foundation. Product catalogue, checkout, fulfilment and customer-facing policies are not yet connected.

## Deployment direction
The intended production architecture is Cloudflare Pages + Workers, with Stripe Checkout and the Inkthreadable API. Do not deploy secrets or API credentials into this repository. Configure them as server-side Cloudflare secrets when integrations are implemented.

The GitHub repository is the source-code home; it is not the intended live ecommerce host.
