import Image from "next/image";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-white px-6 pt-12 pb-16 sm:px-8 sm:pt-16 sm:pb-24 lg:px-12 lg:pt-16 lg:pb-32"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,_#f8fafc_0%,_#ffffff_50%,_#f1f5f9_100%)]" />
      <div className="absolute right-0 top-1/4 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]" />
      <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.06)_0%,_transparent_70%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative z-10 max-w-xl">
          <h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]"
          >
            Track Your Canadian Immigration Application
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 sm:text-xl">
            Monitor IRCC processing times, track your application progress, and see
            how your timeline compares with others.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://apps.apple.com/ca/app/ircc-tracker-canada/id6742469994"
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
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.canadianimmigrationtracker"
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
            </a>
          </div>
        </div>

        <div className="relative z-0 flex justify-center lg:justify-end">
          <div className="relative h-[520px] w-[260px] sm:h-[640px] sm:w-[320px]">
            <Image
              src="/phone-mockup-v2.png"
              alt="IRCC Tracker app screenshot"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 260px, 320px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
