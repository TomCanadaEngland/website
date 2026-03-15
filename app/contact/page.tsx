import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | IRCC Tracker",
  description:
    "Get support for IRCC Tracker. We typically respond within 24–48 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-3 text-center text-lg text-zinc-600">
            Have a question about IRCC Tracker? We&apos;re here to help.
          </p>

          <section className="mt-14" aria-labelledby="email-heading">
            <h2 id="email-heading" className="text-xl font-semibold tracking-tight text-zinc-900">
              Email Support
            </h2>
            <p className="mt-3">
              <a
                href="mailto:support@ircctrackerapp.com"
                className="font-medium text-orange-600 underline decoration-orange-600/30 underline-offset-2 transition hover:text-orange-700 hover:decoration-orange-600"
              >
                support@ircctrackerapp.com
              </a>
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              We typically respond within 24–48 hours.
            </p>
          </section>

          <section className="mt-12 rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-6 sm:p-8" aria-labelledby="support-tips-heading">
            <h2 id="support-tips-heading" className="text-lg font-semibold tracking-tight text-zinc-900">
              Before contacting us, please include:
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-600">
              <li>Device type</li>
              <li>iOS or Android version</li>
              <li>App version</li>
            </ul>
            <p className="mt-4 text-sm text-zinc-500">
              This helps us resolve issues faster.
            </p>
          </section>

          <p className="mt-14 border-t border-zinc-200/80 pt-8 text-center text-sm text-zinc-500">
            IRCC Tracker is an independent app and is not affiliated with
            Immigration, Refugees and Citizenship Canada (IRCC).
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
