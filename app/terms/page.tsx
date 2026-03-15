import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | IRCC Tracker",
  description: "Read the Terms and Conditions for IRCC Tracker.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white px-6 py-16 sm:px-8 sm:py-24">
        <article className="mx-auto max-w-4xl">
          <header className="border-b border-zinc-200/80 pb-10">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Terms and Conditions
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Last Updated: February 10, 2025
            </p>
          </header>

          <div className="mt-12 space-y-12">
            <section className="space-y-4" aria-labelledby="intro">
              <h2 id="intro" className="sr-only">
                Introduction
              </h2>
              <p className="leading-relaxed text-zinc-700">
                Welcome to <strong>Canadian Immigration Tracker</strong>. These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of our mobile application and website (collectively, the <strong>&ldquo;Service&rdquo;</strong>).
              </p>
              <p className="leading-relaxed text-zinc-700">
                By accessing or using the Service, you agree to these Terms. If you do not agree with these Terms, please do not use the Service.
              </p>
              <p className="leading-relaxed text-zinc-700">
                <strong>Disclaimer:</strong> Canadian Immigration Tracker is <strong>not affiliated with, endorsed by, or connected to the Government of Canada or Immigration, Refugees and Citizenship Canada (IRCC)</strong>. The Service is an independent tool that uses publicly available data to help users understand immigration processing timelines.
              </p>
            </section>

            <section className="space-y-6 border-t border-zinc-200/80 pt-10" aria-labelledby="use">
              <h2 id="use" className="text-xl font-semibold tracking-tight text-zinc-900">
                1. Use of the Service
              </h2>
              <div className="space-y-4 pl-0 sm:pl-4">
                <h3 className="text-lg font-medium text-zinc-900">
                  1.1 Eligibility
                </h3>
                <p className="leading-relaxed text-zinc-700">
                  You must be at least <strong>18 years old</strong> (or the age of majority in your jurisdiction) to use the Service.
                </p>
                <p className="leading-relaxed text-zinc-700">
                  By using the Service, you confirm that you meet this requirement.
                </p>
              </div>
              <div className="space-y-2 pl-0 sm:pl-4">
                <h3 className="text-lg font-medium text-zinc-900">
                  1.2 License
                </h3>
                <p className="leading-relaxed text-zinc-700">
                  We grant you a <strong>limited, non-exclusive, non-transferable, and revocable license</strong> to use the Service for <strong>personal, non-commercial purposes</strong>, subject to these Terms.
                </p>
              </div>
              <div className="space-y-4 pl-0 sm:pl-4">
                <h3 className="text-lg font-medium text-zinc-900">
                  1.3 Restrictions
                </h3>
                <p className="leading-relaxed text-zinc-700">
                  You agree <strong>not to</strong>:
                </p>
                <ul className="list-inside list-disc space-y-1 pl-2 leading-relaxed text-zinc-700">
                  <li>Use the Service for any unlawful purpose</li>
                  <li>Modify, reverse engineer, copy, or distribute the Service</li>
                  <li>Attempt to disrupt, interfere with, or hack the Service</li>
                  <li>Collect or store personal data from other users without consent</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6 border-t border-zinc-200/80 pt-10" aria-labelledby="data">
              <h2 id="data" className="text-xl font-semibold tracking-tight text-zinc-900">
                2. Data and Content
              </h2>
              <div className="space-y-4 pl-0 sm:pl-4">
                <h3 className="text-lg font-medium text-zinc-900">
                  2.1 Data Accuracy
                </h3>
                <p className="leading-relaxed text-zinc-700">
                  The Service may provide <strong>estimated immigration processing timelines</strong> based on available data.
                </p>
                <p className="leading-relaxed text-zinc-700">
                  These estimates are provided <strong>for informational purposes only</strong> and should <strong>not be relied upon as official immigration advice</strong>.
                </p>
                <p className="leading-relaxed text-zinc-700">
                  We are not responsible for decisions made based on information provided by the Service.
                </p>
              </div>
              <div className="space-y-4 pl-0 sm:pl-4">
                <h3 className="text-lg font-medium text-zinc-900">
                  2.2 Third-Party Sources
                </h3>
                <p className="leading-relaxed text-zinc-700">
                  Some processing time data may come from publicly available sources, including official government information.
                </p>
                <p className="leading-relaxed text-zinc-700">However:</p>
                <ul className="list-inside list-disc space-y-1 pl-2 leading-relaxed text-zinc-700">
                  <li>We are <strong>not affiliated with IRCC or any government agency</strong></li>
                  <li>We <strong>do not guarantee the accuracy, completeness, or timeliness</strong> of any information displayed</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6 border-t border-zinc-200/80 pt-10" aria-labelledby="privacy">
              <h2 id="privacy" className="text-xl font-semibold tracking-tight text-zinc-900">
                3. Privacy and Security
              </h2>
              <div className="space-y-4 pl-0 sm:pl-4">
                <h3 className="text-lg font-medium text-zinc-900">
                  3.1 Data Collection
                </h3>
                <p className="leading-relaxed text-zinc-700">
                  We collect limited data to operate and improve the Service, including:
                </p>
                <ul className="list-inside list-disc space-y-1 pl-2 leading-relaxed text-zinc-700">
                  <li>Anonymous usage analytics</li>
                  <li>App performance data</li>
                </ul>
                <p className="leading-relaxed text-zinc-700">
                  User-submitted immigration timeline data is <strong>stored locally on your device</strong> and is <strong>not accessible to us</strong>.
                </p>
                <p className="leading-relaxed text-zinc-700">
                  For more details, please review our <Link href="/privacy" className="font-medium text-orange-600 underline decoration-orange-600/30 underline-offset-2 transition hover:text-orange-700 hover:decoration-orange-600">Privacy Policy</Link>.
                </p>
              </div>
              <div className="space-y-4 pl-0 sm:pl-4">
                <h3 className="text-lg font-medium text-zinc-900">
                  3.2 Third-Party Services
                </h3>
                <p className="leading-relaxed text-zinc-700">
                  We may use trusted third-party services such as:
                </p>
                <ul className="list-inside list-disc space-y-1 pl-2 leading-relaxed text-zinc-700">
                  <li>Firebase</li>
                  <li>Google Analytics</li>
                </ul>
                <p className="leading-relaxed text-zinc-700">
                  These services may collect anonymous usage data and have their own privacy policies.
                </p>
              </div>
              <div className="space-y-2 pl-0 sm:pl-4">
                <h3 className="text-lg font-medium text-zinc-900">
                  3.3 Data Security
                </h3>
                <p className="leading-relaxed text-zinc-700">
                  We take reasonable steps to protect the integrity and security of the Service.
                </p>
                <p className="leading-relaxed text-zinc-700">
                  However, no method of digital transmission or storage is completely secure. You use the Service at your own risk.
                </p>
              </div>
            </section>

            <section className="space-y-6 border-t border-zinc-200/80 pt-10" aria-labelledby="disclaimers">
              <h2 id="disclaimers" className="text-xl font-semibold tracking-tight text-zinc-900">
                4. Disclaimers and Limitations of Liability
              </h2>
              <div className="space-y-4 pl-0 sm:pl-4">
                <h3 className="text-lg font-medium text-zinc-900">
                  4.1 No Legal or Immigration Advice
                </h3>
                <p className="leading-relaxed text-zinc-700">
                  The Service <strong>does not provide legal or immigration advice</strong>.
                </p>
                <p className="leading-relaxed text-zinc-700">
                  Information presented in the Service should <strong>not be interpreted as official guidance</strong> from IRCC or any government authority.
                </p>
                <p className="leading-relaxed text-zinc-700">
                  For official immigration information, please consult the <strong>Government of Canada or a qualified immigration professional</strong>.
                </p>
              </div>
              <div className="space-y-4 pl-0 sm:pl-4">
                <h3 className="text-lg font-medium text-zinc-900">
                  4.2 No Guarantees
                </h3>
                <p className="leading-relaxed text-zinc-700">
                  We do not guarantee that the Service will be:
                </p>
                <ul className="list-inside list-disc space-y-1 pl-2 leading-relaxed text-zinc-700">
                  <li>Uninterrupted</li>
                  <li>Error-free</li>
                  <li>Fully accurate</li>
                  <li>Always available or up to date</li>
                </ul>
              </div>
              <div className="space-y-2 pl-0 sm:pl-4">
                <h3 className="text-lg font-medium text-zinc-900">
                  4.3 Limitation of Liability
                </h3>
                <p className="leading-relaxed text-zinc-700">
                  To the fullest extent permitted by law, <strong>Canadian Immigration Tracker and its operators are not liable for any direct, indirect, incidental, or consequential damages</strong> resulting from your use of the Service.
                </p>
              </div>
            </section>

            <section className="space-y-4 border-t border-zinc-200/80 pt-10" aria-labelledby="changes">
              <h2 id="changes" className="text-xl font-semibold tracking-tight text-zinc-900">
                5. Changes to These Terms
              </h2>
              <p className="leading-relaxed text-zinc-700">
                We may update these Terms from time to time.
              </p>
              <p className="leading-relaxed text-zinc-700">
                If significant changes are made, we may notify users through the app or website.
              </p>
              <p className="leading-relaxed text-zinc-700">
                Your continued use of the Service after updates indicates your acceptance of the revised Terms.
              </p>
            </section>

            <section className="space-y-4 border-t border-zinc-200/80 pt-10" aria-labelledby="termination">
              <h2 id="termination" className="text-xl font-semibold tracking-tight text-zinc-900">
                6. Termination
              </h2>
              <p className="leading-relaxed text-zinc-700">
                We reserve the right to <strong>suspend or terminate access</strong> to the Service if a user violates these Terms.
              </p>
              <p className="leading-relaxed text-zinc-700">
                Upon termination, your right to use the Service will immediately end.
              </p>
            </section>

            <section className="space-y-4 border-t border-zinc-200/80 pt-10" aria-labelledby="governing">
              <h2 id="governing" className="text-xl font-semibold tracking-tight text-zinc-900">
                7. Governing Law
              </h2>
              <p className="leading-relaxed text-zinc-700">
                These Terms are governed by the laws of <strong>Canada</strong>.
              </p>
              <p className="leading-relaxed text-zinc-700">
                Any disputes arising from these Terms will be resolved in the courts of <strong>Alberta, Canada</strong>.
              </p>
            </section>

            <section className="space-y-4 border-t border-zinc-200/80 pt-10" aria-labelledby="contact">
              <h2 id="contact" className="text-xl font-semibold tracking-tight text-zinc-900">
                8. Contact Us
              </h2>
              <p className="leading-relaxed text-zinc-700">
                If you have any questions about these Terms, please contact us:
              </p>
              <p>
                <a
                  href="mailto:support@ircctrackerapp.com"
                  className="font-medium text-orange-600 underline decoration-orange-600/30 underline-offset-2 transition hover:text-orange-700 hover:decoration-orange-600"
                >
                  support@ircctrackerapp.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
