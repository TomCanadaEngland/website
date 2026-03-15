import Link from "next/link";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden px-6 py-20 sm:px-8 sm:py-28 lg:px-12"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,_#f1f5f9_0%,_#e2e8f0_50%,_#f8fafc_100%)]" />
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.1)_0%,_transparent_70%)]" />
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]" />

      <div className="mx-auto max-w-3xl text-center">
        <h2 id="cta-heading" className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
          Take Control of Your Immigration Timeline
        </h2>
        <p className="mt-4 text-lg text-zinc-600">
          Join thousands of applicants who stay informed with IRCC Tracker.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center gap-2 rounded-2xl bg-zinc-900 px-6 text-white shadow-lg shadow-zinc-900/20 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
            aria-label="Download on the App Store"
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.43.07 1.4-.4 2.83-1.13 3.66-.69.84-1.83 1.5-2.81 1.33-.08-1.3.41-2.56 1-3.56z" />
            </svg>
            <span className="text-left text-sm font-medium">
              <span className="block leading-tight">Download on the</span>
              <span className="block text-lg">App Store</span>
            </span>
          </Link>
          <Link
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-6 text-zinc-900 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
            aria-label="Get it on Google Play"
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" aria-hidden>
              <path
                fill="#4285F4"
                d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.16 5.982L3.61 22.186 14.5 12.707zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.8 12l2.299-2.299zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z"
              />
            </svg>
            <span className="text-left text-sm font-medium">
              <span className="block leading-tight">Get it on</span>
              <span className="block text-lg">Google Play</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
