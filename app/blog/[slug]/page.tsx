import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/lib/sanity";
import { POST_BY_SLUG_QUERY, POST_SLUGS_QUERY } from "@/lib/sanity.queries";
import { PortableText } from "@/components/PortableText";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(POST_SLUGS_QUERY);
  return (slugs ?? []).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<{ title?: string; excerpt?: string } | null>(
    POST_BY_SLUG_QUERY,
    { slug }
  );
  if (!post) return { title: "Post | IRCC Tracker" };
  return {
    title: `${post.title ?? "Post"} | IRCC Tracker`,
    description: post.excerpt ?? undefined,
  };
}

export const revalidate = 60;

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch<{
    _id: string;
    title: string;
    slug: { current: string };
    excerpt: string | null;
    publishedAt: string | null;
    body: unknown;
    author: string | null;
    mainImage: string | null;
    imageAlt: string | null;
  } | null>(POST_BY_SLUG_QUERY, { slug });

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-white px-6 py-16 sm:px-8 sm:py-24">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-sm font-medium text-zinc-500 hover:text-zinc-900"
        >
          ← Back to Blog
        </Link>
        <header className="mt-8 border-b border-zinc-200/80 pb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            {post.title}
          </h1>
          {(post.publishedAt || post.author) && (
            <p className="mt-2 text-sm text-zinc-500">
              {post.publishedAt &&
                new Date(post.publishedAt).toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              {post.author && post.publishedAt && " · "}
              {post.author && `by ${post.author}`}
            </p>
          )}
        </header>
        {post.mainImage && (
          <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl bg-zinc-100">
            <img
              src={post.mainImage}
              alt={post.imageAlt ?? post.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        {post.body && (
          <div className="prose prose-zinc mt-10 max-w-none prose-p:leading-relaxed prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-orange-600 prose-img:rounded-xl">
            <PortableText value={post.body as import("@portabletext/types").PortableTextBlock[]} />
          </div>
        )}
      </article>
    </main>
  );
}
