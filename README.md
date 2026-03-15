# IRCC Tracker – Landing Page

Modern SaaS landing page for **IRCC Tracker**, built to convert visitors into app downloads.

## Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Sanity CMS** (content schemas ready; blog coming later)
- **Vercel** (deploy target)

## Project structure

```
/app
  page.tsx          # Landing page
  layout.tsx        # Root layout + SEO metadata
  blog/             # Placeholder for future blog
  contact/
  privacy/
  terms/
/components
  Header.tsx
  Hero.tsx
  Stats.tsx
  Features.tsx
  HowItWorks.tsx
  Testimonials.tsx
  CTA.tsx
  Footer.tsx
/sanity/schemas
  post.ts           # Blog posts
  author.ts         # Authors
  siteSettings.ts   # Site title, description, app store URLs
  testimonial.ts    # Testimonials
  blockContent.ts   # Rich text for posts
/lib
  sanity.ts         # Sanity client
```

## Getting started

1. **Install and run**

   ```bash
   npm install
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

2. **Environment variables**

   Copy `.env.example` to `.env.local` and set:

   - `NEXT_PUBLIC_SANITY_PROJECT_ID` – from [sanity.io/manage](https://sanity.io/manage)
   - `NEXT_PUBLIC_SANITY_DATASET` – e.g. `production`
   - `NEXT_PUBLIC_APP_STORE_URL` – App Store link (or `#` for placeholder)
   - `NEXT_PUBLIC_GOOGLE_PLAY_URL` – Google Play link (or `#` for placeholder)

3. **Sanity Studio**

   Create a Sanity project and link it:

   ```bash
   npx sanity init
   ```

   Use the same `projectId` and `dataset` as in `.env.local`. Schemas are in `sanity/schemas/` (blog posts, authors, site settings, testimonials). Run the studio with:

   ```bash
   npm run sanity:studio
   ```

   Or embed the studio in the app later by adding a route that renders the Sanity Studio component.

## Deploy on Vercel

1. Push the repo to GitHub and import the project in [Vercel](https://vercel.com).
2. Add the env vars above in the Vercel project settings.
3. Deploy; the app is static-friendly and works with the default Next.js build.

## Design

- Large typography, generous whitespace, subtle gradients, soft shadows, rounded corners.
- Mobile-first, responsive, accessible (semantic HTML, focus states, ARIA where needed).
- SEO: metadata in `app/layout.tsx`; extend with Sanity-driven fields when you connect content.

## Next steps

- Implement blog: fetch posts from Sanity and add `app/blog/[slug]/page.tsx`.
- Pull testimonials and optional hero/CTA copy from Sanity using `siteSettings` and `testimonial` schemas.
- Replace placeholder app mockup in `Hero` with a real screenshot or illustration.
