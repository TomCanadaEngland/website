export const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  "author": author->name,
  "mainImage": mainImage.asset->url,
  "imageAlt": mainImage.alt
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  body,
  "author": author->name,
  "mainImage": mainImage.asset->url,
  "imageAlt": mainImage.alt
}`;

export const POST_SLUGS_QUERY = `*[_type == "post" && defined(slug.current)].slug.current`;
