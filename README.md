# Shivam Weld Safe India — website

Static Next.js + TypeScript + Tailwind site. Enquiries open a pre-filled WhatsApp message; there is no backend.

## Run
    npm install
    npm run dev        # http://localhost:3000
    npm run build      # static site in ./out, deploy anywhere

## Before launch (set in .env.local / host env, see .env.example)
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — forms stay disabled with a visible notice until set.
- `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_EMAIL`, `NEXT_PUBLIC_MAPS_URL` — hidden until set.
- `NEXT_PUBLIC_SITE_URL` — drives canonicals, sitemap, robots, structured data.

## Edit content
- Business details: `lib/site.ts` · Products and categories: `lib/products.ts`
- Add real photos to `public/images/products/` and set `image` per product; add verified `specs`.
- Brand colours and fonts: `app/globals.css` (`@theme`) and `app/layout.tsx`.

## Not included (needs the business's input)
Real photography, an Open Graph share image, a favicon/logo, and any specs, certifications or testimonials.
