import siteMetadata from "@/data/siteMetadata";
import Link from "next/link";
import Logo from "@/data/logo.svg";

const headerLinks = [
  { href: "/blog", title: "Blog" },
  { href: "/tags", title: "Tags" },
  { href: "/projects", title: "Projects" },
  { href: "/about", title: "About" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="mr-3">
            <Logo />
          </div>
          <div className="hidden h-6 text-2xl font-semibold sm:block">
            {siteMetadata.headerTitle}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </header>
  );
}
