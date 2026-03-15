import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center tracking-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
      aria-label="IRCC Tracker"
    >
      <span className="font-bold text-black text-xl sm:text-2xl">IRCC</span>
      {" "}
      <span className="font-bold text-orange-600 text-xl sm:text-2xl">Tracker</span>
    </Link>
  );
}
