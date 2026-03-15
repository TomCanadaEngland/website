const steps = [
  {
    number: "1",
    title: "Add Your Application",
    description:
      "Enter your application type and submission date to create your personal timeline.",
  },
  {
    number: "2",
    title: "See Your Estimated Timeline",
    description:
      "Understand how long your application may take and view your estimated completion date.",
  },
  {
    number: "3",
    title: "Track Your Progress",
    description:
      "Follow your journey step-by-step and stay updated as your timeline moves forward.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-zinc-200/80 bg-zinc-50/50 px-6 pt-10 pb-20 sm:px-8 sm:pt-12 sm:pb-28 lg:px-12 lg:pt-14"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-medium uppercase tracking-wide text-orange-600">
          How it works
        </p>
        <h2
          id="how-it-works-heading"
          className="mt-2 text-center text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
        >
          How It Works
        </h2>
        <p className="mt-3 text-center text-lg text-zinc-600">
          Three simple steps to track your immigration application.
        </p>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {steps.map((step, i) => (
            <article
              key={i}
              className="group flex flex-col rounded-2xl border border-zinc-200/80 bg-white p-8 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-1 flex-col items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-lg font-semibold text-white">
                  {step.number}
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-zinc-900">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-zinc-600">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
