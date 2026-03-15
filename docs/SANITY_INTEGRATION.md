# Sanity CMS Integration Guide

This project is set up to use **Sanity** for editable content. Follow these steps to connect and use it.

---

## 1. Create a Sanity project (one-time)

1. Go to **[sanity.io/manage](https://sanity.io/manage)** and sign in (or create an account).
2. Click **Create project** and choose a name (e.g. “IRCC Tracker”).
3. Copy your **Project ID** from the project settings.
4. Create or pick a **dataset** (e.g. `production`).

---

## 2. Environment variables

Create or edit **`.env.local`** in the project root:

```bash
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
```

Replace `your-project-id-here` with your actual Project ID from step 1.

---

## 3. Run Sanity Studio

You can use Sanity Studio in two ways.

### Option A: Embedded in the site (recommended)

Studio is already wired at **`/studio`** in this Next.js app.

1. Start the dev server:
   ```bash
   npm run dev
   ```
2. Open **http://localhost:3000/studio** in your browser.
3. Log in with your Sanity account when prompted and select your project.

### Option B: Standalone Studio

From the project root:

```bash
npm run sanity
```

This starts the Studio dev server (often on another port). Use it if you prefer a separate Studio app.

---

## 4. What’s already configured

- **Schemas** in `sanity/schemas/`:
  - **post** – Blog posts (title, slug, author, body, etc.)
  - **author** – Authors (name, slug, image, bio)
  - **siteSettings** – Site title, description, app store URLs
  - **testimonial** – Testimonials (quote, author, order)
  - **blockContent** – Rich text for post bodies
- **Config** in `sanity.config.ts` (project id, dataset, structure tool).
- **Client** in `lib/sanity.ts` for querying from Next.js.

---

## 5. Querying content in Next.js

Use the client in Server Components or API routes.

### Example: fetch site settings

```ts
// lib/sanity.queries.ts (create this file)
export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  title,
  description,
  appStoreUrl,
  googlePlayUrl
}`;
```

```tsx
// In a page or component
import { client } from "@/lib/sanity";
import { SITE_SETTINGS_QUERY } from "@/lib/sanity.queries";

export default async function Page() {
  const settings = await client.fetch(SITE_SETTINGS_QUERY);
  return <div>{settings?.title}</div>;
}
```

### Example: fetch testimonials

```ts
export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc){
  quote,
  authorName,
  authorRole,
  authorImage
}`;
```

```tsx
const testimonials = await client.fetch(TESTIMONIALS_QUERY);
```

### Example: fetch blog posts (for a future blog)

```ts
export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  "author": author->name
}`;
```

---

## 6. Caching and revalidation

For static or ISR pages, pass Next.js cache options when fetching:

```ts
const data = await client.fetch(query, params, {
  next: { revalidate: 60 }, // revalidate every 60 seconds
});
```

For on-demand revalidation when content changes in Studio, you can add a Sanity webhook that calls a Next.js API route using `revalidatePath` or `revalidateTag`. See [next-sanity docs](https://github.com/sanity-io/next-sanity) for webhook examples.

---

## 7. Optional: use content on the landing page

- **Testimonials:** Fetch from Sanity in the Testimonials component and replace the hardcoded quote.
- **Site settings:** Fetch app store URLs (or fallbacks) from `siteSettings` and use them in Hero/CTA.
- **Blog:** When you build `/blog`, fetch posts with the `post` schema and render them with `blockContent`.

---

## 8. Deploying Studio

If you use the **embedded** Studio at `/studio`:

- Deploy your Next.js app as usual (e.g. Vercel).
- Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in your deployment environment.
- Add **http://yourdomain.com/studio** to your Sanity project’s **CORS origins** at [sanity.io/manage](https://sanity.io/manage) so the Studio can talk to the API.

If you use **standalone** Studio, you can deploy it with:

```bash
npm run sanity:deploy
```

Follow the prompts to host the Studio on Sanity’s infrastructure.

---

## Quick reference

| Task              | Command / URL                          |
|-------------------|----------------------------------------|
| Run Next.js       | `npm run dev`                          |
| Open Studio       | http://localhost:3000/studio            |
| Standalone Studio | `npm run sanity`                       |
| Deploy Studio     | `npm run sanity:deploy`                |
| Project settings  | https://sanity.io/manage               |
