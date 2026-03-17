import Link from "next/link";

const links = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
  ],
  company: [
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-900 px-6 py-14 text-zinc-300 sm:px-8 lg:px-12" role="contentinfo">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold text-white">IRCC Tracker</p>
            <p className="mt-2 text-sm">
              Track your Canadian immigration application in real time.
            </p>
            <p className="mt-3 text-sm">
              Need Help?{" "}
              <a
                href="mailto:support@ircctrackerapp.com"
                className="text-orange-400 transition hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                Support@Ircctrackerapp.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Product
            </h3>
            <ul className="mt-4 space-y-2">
              {links.product.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {links.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              {links.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} IRCC Tracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
