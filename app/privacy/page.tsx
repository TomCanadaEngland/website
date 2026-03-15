import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | IRCC Tracker",
  description: "Read the Privacy Policy for IRCC Tracker.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white px-6 py-16 sm:px-8 sm:py-24">
        <article className="mx-auto max-w-4xl">
          <header className="border-b border-zinc-200/80 pb-10">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Last Updated: March 27, 2025
            </p>
          </header>

          <div className="mt-12 space-y-12">
            <section className="space-y-4" aria-labelledby="intro">
              <h2 id="intro" className="text-xl font-semibold tracking-tight text-zinc-900">
                1. Introduction
              </h2>
              <p className="leading-relaxed text-zinc-700">
                Welcome to <strong>Canadian Immigration Tracker</strong>. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application and website (collectively, the <strong>&ldquo;Service&rdquo;</strong>).
              </p>
              <p className="leading-relaxed text-zinc-700">
                By using the Service, you agree to this Privacy Policy. If you do not agree with this policy, please do not use the Service.
              </p>
              <p className="leading-relaxed text-zinc-700">
                <strong>Disclaimer:</strong> Canadian Immigration Tracker is <strong>not affiliated with, endorsed by, or connected to the Government of Canada or Immigration, Refugees and Citizenship Canada (IRCC)</strong>. The app is an independent tool that uses publicly available data to help users understand immigration processing timelines.
              </p>
            </section>

            <section className="space-y-4 border-t border-zinc-200/80 pt-10" aria-labelledby="disclosure">
              <h2 id="disclosure" className="text-xl font-semibold tracking-tight text-zinc-900">
                2. Disclosure of Data Access, Collection, Use, and Sharing
              </h2>
              <p className="leading-relaxed text-zinc-700">
                We collect <strong>limited data</strong> in order to provide and improve the Service.
              </p>
              <p className="leading-relaxed text-zinc-700">Specifically:</p>
              <ul className="list-inside list-disc space-y-2 pl-2 leading-relaxed text-zinc-700">
                <li>We <strong>do not collect personal information</strong> such as names, email addresses, or phone numbers through the app.</li>
                <li>We collect <strong>anonymous usage data</strong> such as device type, operating system, and feature usage through tools like Firebase and Google Analytics.</li>
                <li>If you enter information about your immigration timeline, such as application dates, that information is <strong>stored locally on your device</strong>. We <strong>do not have access to this information</strong>.</li>
                <li>We <strong>do not sell, trade, or share personal data</strong> because we do not collect personal data.</li>
                <li>Information may be disclosed only if required to comply with legal obligations or to protect our rights.</li>
              </ul>
            </section>

            <section className="space-y-6 border-t border-zinc-200/80 pt-10" aria-labelledby="information">
              <h2 id="information" className="text-xl font-semibold tracking-tight text-zinc-900">
                3. Information We Collect
              </h2>
              <p className="leading-relaxed text-zinc-700">
                We collect minimal information necessary to operate and improve the Service.
              </p>
              <div className="space-y-4 pl-0 sm:pl-4">
                <h3 className="text-lg font-medium text-zinc-900">
                  3.1 Usage Data
                </h3>
                <p className="leading-relaxed text-zinc-700">
                  We may collect anonymous analytics such as:
                </p>
                <ul className="list-inside list-disc space-y-1 pl-2 leading-relaxed text-zinc-700">
                  <li>How often app features are used</li>
                  <li>General app interactions</li>
                  <li>Device type and operating system</li>
                </ul>
                <p className="leading-relaxed text-zinc-700">
                  This data helps us improve the app experience.
                </p>
              </div>
              <div className="space-y-2 pl-0 sm:pl-4">
                <h3 className="text-lg font-medium text-zinc-900">
                  3.2 User-Submitted Data
                </h3>
                <p className="leading-relaxed text-zinc-700">
                  Information entered into the app, such as immigration timeline details, is <strong>stored locally on your device</strong> and <strong>is not transmitted to our servers</strong>.
                </p>
              </div>
              <div className="space-y-4 pl-0 sm:pl-4">
                <h3 className="text-lg font-medium text-zinc-900">
                  3.3 Automatically Collected Data
                </h3>
                <p className="leading-relaxed text-zinc-700">
                  We may collect technical data such as:
                </p>
                <ul className="list-inside list-disc space-y-1 pl-2 leading-relaxed text-zinc-700">
                  <li>Crash reports</li>
                  <li>Error logs</li>
                  <li>App diagnostics</li>
                </ul>
                <p className="leading-relaxed text-zinc-700">
                  This information helps us fix bugs and improve app performance.
                </p>
              </div>
            </section>

            <section className="space-y-4 border-t border-zinc-200/80 pt-10" aria-labelledby="use">
              <h2 id="use" className="text-xl font-semibold tracking-tight text-zinc-900">
                4. How We Use Your Information
              </h2>
              <p className="leading-relaxed text-zinc-700">
                The limited data we collect may be used to:
              </p>
              <ul className="list-inside list-disc space-y-1 pl-2 leading-relaxed text-zinc-700">
                <li>Provide and improve app features</li>
                <li>Analyze trends and feature usage</li>
                <li>Maintain app security and reliability</li>
                <li>Fix bugs and improve performance</li>
              </ul>
            </section>

            <section className="space-y-4 border-t border-zinc-200/80 pt-10" aria-labelledby="sharing">
              <h2 id="sharing" className="text-xl font-semibold tracking-tight text-zinc-900">
                5. Data Sharing and Disclosure
              </h2>
              <p className="leading-relaxed text-zinc-700">
                We <strong>do not sell, trade, or share personal information</strong>.
              </p>
              <p className="leading-relaxed text-zinc-700">
                We may disclose information if:
              </p>
              <ul className="list-inside list-disc space-y-1 pl-2 leading-relaxed text-zinc-700">
                <li>Required by law</li>
                <li>Necessary to protect our rights or enforce our terms of service</li>
              </ul>
            </section>

            <section className="space-y-4 border-t border-zinc-200/80 pt-10" aria-labelledby="third-party">
              <h2 id="third-party" className="text-xl font-semibold tracking-tight text-zinc-900">
                6. Third-Party Services
              </h2>
              <p className="leading-relaxed text-zinc-700">
                We may use trusted third-party services such as:
              </p>
              <ul className="list-inside list-disc space-y-1 pl-2 leading-relaxed text-zinc-700">
                <li>Firebase</li>
                <li>Google Analytics</li>
              </ul>
              <p className="leading-relaxed text-zinc-700">
                These services may collect anonymous usage information to help us understand how the app is used.
              </p>
              <p className="leading-relaxed text-zinc-700">
                Each third-party provider has its own privacy policy, which we encourage you to review.
              </p>
            </section>

            <section className="space-y-4 border-t border-zinc-200/80 pt-10" aria-labelledby="security">
              <h2 id="security" className="text-xl font-semibold tracking-tight text-zinc-900">
                7. Data Security
              </h2>
              <p className="leading-relaxed text-zinc-700">
                We take reasonable measures to protect information used by the Service. However, no method of data transmission or storage is completely secure.
              </p>
            </section>

            <section className="space-y-4 border-t border-zinc-200/80 pt-10" aria-labelledby="choices">
              <h2 id="choices" className="text-xl font-semibold tracking-tight text-zinc-900">
                8. Your Choices
              </h2>
              <p className="leading-relaxed text-zinc-700">
                You may be able to limit certain analytics tracking through your device settings.
              </p>
            </section>

            <section className="space-y-4 border-t border-zinc-200/80 pt-10" aria-labelledby="children">
              <h2 id="children" className="text-xl font-semibold tracking-tight text-zinc-900">
                9. Children&apos;s Privacy
              </h2>
              <p className="leading-relaxed text-zinc-700">
                The Service is <strong>not intended for individuals under the age of 18</strong>.
              </p>
              <p className="leading-relaxed text-zinc-700">
                We do not knowingly collect personal information from children. If you believe a child has provided personal information, please contact us and we will remove it.
              </p>
            </section>

            <section className="space-y-4 border-t border-zinc-200/80 pt-10" aria-labelledby="changes">
              <h2 id="changes" className="text-xl font-semibold tracking-tight text-zinc-900">
                10. Changes to This Privacy Policy
              </h2>
              <p className="leading-relaxed text-zinc-700">
                We may update this Privacy Policy from time to time.
              </p>
              <p className="leading-relaxed text-zinc-700">
                If significant changes are made, we may notify users through the Service. Continued use of the Service after changes means you accept the updated policy.
              </p>
            </section>

            <section className="space-y-4 border-t border-zinc-200/80 pt-10" aria-labelledby="contact">
              <h2 id="contact" className="text-xl font-semibold tracking-tight text-zinc-900">
                11. Contact Us
              </h2>
              <p className="leading-relaxed text-zinc-700">
                If you have any questions about this Privacy Policy, please contact us:
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
