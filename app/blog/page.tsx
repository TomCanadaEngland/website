import Link from "next/link";
import { client } from "@/lib/sanity";
import { POSTS_QUERY } from "@/lib/sanity.queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | IRCC Tracker",
  description: "News and updates from IRCC Tracker.",
};

export const revalidate = 60;

export default async function BlogPage() {
  let posts: Array<{
    _id: string;
    title: string;
    slug: { current: string };
    excerpt: string | null;
    publishedAt: string | null;
    author: string | null;
    mainImage: string | null;
    imageAlt: string | null;
  }> | null = null;
  let error: string | null = null;

  try {
    posts = await client.fetch(POSTS_QUERY);
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to load posts";
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          Blog
        </h1>
        <p className="mt-2 text-zinc-600">
          News and updates from IRCC Tracker.
        </p>

        {error ? (
          <div className="mt-12 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800">
            <p className="font-medium">Couldn’t load posts</p>
            <p className="mt-1 text-sm">{error}</p>
            <p className="mt-2 text-sm">
              Check that <code className="rounded bg-amber-100 px-1">NEXT_PUBLIC_SANITY_PROJECT_ID</code> and{" "}
              <code className="rounded bg-amber-100 px-1">NEXT_PUBLIC_SANITY_DATASET</code> in <code className="rounded bg-amber-100 px-1">.env.local</code> match your Sanity project.
            </p>
          </div>
        ) : !posts || posts.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-8">
            <p className="text-zinc-700">No posts yet.</p>
            <p className="mt-2 text-zinc-600">
              Add your first post in Sanity Studio. Give it a <strong>title</strong> and a <strong>slug</strong> (e.g. &quot;my-first-post&quot;) so it can appear here.
            </p>
            <Link
              href="/studio"
              className="mt-4 inline-flex items-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
            >
              Open Sanity Studio →
            </Link>
          </div>
        ) : (
          <ul className="mt-12 space-y-10 border-t border-zinc-200/80 pt-10">
            {posts.map((post) => (
              <li key={post._id}>
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="group block rounded-2xl border border-zinc-200/80 p-6 transition hover:border-zinc-300 hover:shadow-md sm:p-8"
                >
                  {post.mainImage && (
                    <div className="relative mb-4 aspect-video overflow-hidden rounded-xl bg-zinc-100">
                      <img
                        src={post.mainImage}
                        alt={post.imageAlt ?? post.title}
                        className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                      />
                    </div>
                  )}
                  <h2 className="text-xl font-semibold text-zinc-900 group-hover:text-orange-600 sm:text-2xl">
                    {post.title}
                  </h2>
                  {(post.publishedAt || post.author) && (
                    <p className="mt-1 text-sm text-zinc-500">
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
                  {post.excerpt && (
                    <p className="mt-3 leading-relaxed text-zinc-600">
                      {post.excerpt}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
