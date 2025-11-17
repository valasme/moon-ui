"use client";

import Link from "next/link";
import { Ubuntu } from "next/font/google";
import { forwardRef, useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: [
    "latin-ext",
    "latin",
    "greek-ext",
    "greek",
    "cyrillic-ext",
    "cyrillic",
  ],
  display: "auto",
});

const SCROLL_STORAGE_KEY = "sidebar-scroll-position";

const docsLinks = [
  { label: "Introduction", href: "/docs/introduction" },
  { label: "How to use", href: "/docs/howtouse" },
];

const componentSections = [
  {
    title: "Buttons",
    links: [
      { label: "Primary Button", href: "/components/buttons/primary" },
      { label: "Secondary Button", href: "/components/buttons/secondary" },
      { label: "Ghost Button", href: "/components/buttons/ghost" },
      { label: "Outline Button", href: "/components/buttons/outline" },
      { label: "Icon Button", href: "/components/buttons/icon" },
      { label: "Danger Button", href: "/components/buttons/danger" },
      { label: "Success Button", href: "/components/buttons/success" },
      { label: "Link Button", href: "/components/buttons/link" },
      { label: "Icon With Button", href: "/components/buttons/iconwithbutton" },
      { label: "Skeleton Button", href: "/components/buttons/skeleton" },
    ],
  },
  {
    title: "Inputs",
    links: [
      { label: "Text Input", href: "/components/inputs/text" },
      { label: "Password Input", href: "/components/inputs/password" },
      { label: "Date Input", href: "/components/inputs/date" },
      { label: "Email Input", href: "/components/inputs/email" },
      { label: "Number Input", href: "/components/inputs/number" },
      { label: "Search Input", href: "/components/inputs/search" },
      { label: "Telephone Input", href: "/components/inputs/telephone" },
      { label: "Textarea Input", href: "/components/inputs/textarea" },
      { label: "URL Input", href: "/components/inputs/url" },
    ],
  },
  {
    title: "Cards",
    links: [
      { label: "Action Card", href: "/components/cards/action" },
      { label: "List Card", href: "/components/cards/list" },
      { label: "Dashboard Card", href: "/components/cards/dashboard" },
      { label: "Product Card", href: "/components/cards/product" },
      { label: "Testimonial Card", href: "/components/cards/testimonial" },
    ],
  },
];

const baseLinkClass = `${ubuntu.className} block w-full rounded-md px-3 py-2 text-sm font-normal text-white transition hover:bg-neutral-900/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-200`;

const Sidebar = forwardRef(function Sidebar(
  { isShown, isSmallScreen, toggleSidebar },
  ref
) {
  const localRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleRef = useCallback(
    (node) => {
      localRef.current = node;

      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    },
    [ref]
  );

  // Save scroll position before navigation and restore it after
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (localRef.current) {
        sessionStorage.setItem(
          SCROLL_STORAGE_KEY,
          String(localRef.current.scrollTop)
        );
      }
    };

    const handleRouteChange = () => {
      // Save scroll position before route change
      handleBeforeUnload();

      // Restore scroll position after navigation completes
      const timer = setTimeout(() => {
        const savedPosition = sessionStorage.getItem(SCROLL_STORAGE_KEY);
        if (savedPosition && localRef.current) {
          localRef.current.scrollTop = parseInt(savedPosition, 10);
        }
      }, 10); // Small delay to ensure DOM is updated

      return () => clearTimeout(timer);
    };

    // Initial scroll position restore
    const savedPosition = sessionStorage.getItem(SCROLL_STORAGE_KEY);
    if (savedPosition && localRef.current) {
      const timer = setTimeout(() => {
        localRef.current.scrollTop = parseInt(savedPosition, 10);
      }, 10);
      return () => clearTimeout(timer);
    }

    // Event listeners
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [pathname]);

  return (
    <aside
      ref={handleRef}
      className={`bg-neutral-950 flex flex-col items-start justify-start border-r border-r-neutral-900 h-[calc(100vh-4rem)] top-16 p-6 gap-4 overflow-y-auto fixed z-50 w-64 left-0 ${
        isShown || !isSmallScreen ? "block" : "hidden"
      }`}
    >
      <nav className="flex w-full flex-col gap-6" aria-label="Primary sidebar">
        <div className="flex flex-col gap-1">
          {docsLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={baseLinkClass}>
              {label}
            </Link>
          ))}
        </div>

        <div className="h-px w-full bg-neutral-900" />

        {componentSections.map(({ title, links }) => (
          <section key={title} className="flex flex-col gap-2">
            <p className="px-3 text-xs font-medium uppercase tracking-wide text-neutral-500">
              {title}
            </p>
            <div className="flex flex-col gap-1">
              {links.map(({ href, label }) => (
                <Link key={href} href={href} className={baseLinkClass}>
                  {label}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </nav>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
