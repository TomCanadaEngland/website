const testimonial = {
  quote:
    "IRCC Tracker helped me understand exactly where my application stood.",
  authorName: "Sarah M.",
  authorRole: "PR applicant",
};

export function Testimonials() {
  return (
    <section
      className="px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="testimonials-heading" className="sr-only">
          Testimonials
        </h2>
        <blockquote className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm sm:p-8">
          <p className="mb-3 text-lg text-orange-500 sm:text-xl" aria-hidden>
            ★★★★★
          </p>
          <p className="text-xl font-medium leading-relaxed text-zinc-800 sm:text-2xl">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <footer className="mt-4">
            <p className="font-semibold text-zinc-900">{testimonial.authorName}</p>
            <p className="mt-0.5 text-sm text-zinc-500">{testimonial.authorRole}</p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
