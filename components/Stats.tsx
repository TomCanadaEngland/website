const stats = [
  { value: "40,000+", label: "Downloads" },
  { value: "4.9★", label: "Average rating" },
  { value: "Free", label: "Core features included" },
];

export function Stats() {
  return (
    <section
      className="px-6 pt-10 pb-6 sm:px-8 sm:pt-12 sm:pb-8 lg:pt-16 lg:pb-10"
      aria-labelledby="stats-heading"
    >
      <h2 id="stats-heading" className="sr-only">
        Social proof and metrics
      </h2>
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-zinc-200/60 border-t-2 border-t-orange-200 bg-gradient-to-br from-white via-white to-orange-50/30 px-8 py-6 shadow-lg shadow-orange-100/20 ring-1 ring-zinc-100/80 sm:px-10 sm:py-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center"
              >
                <p className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                  {i === 1 ? (
                    <>
                      4.9<span className="text-orange-500">★</span>
                    </>
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="mt-2.5 text-sm font-medium text-zinc-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
