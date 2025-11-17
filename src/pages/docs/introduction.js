import Head from "next/head";
import Header from "@/components/Header";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { Ubuntu } from "next/font/google";
import { useState, useEffect, useRef, useLayoutEffect } from "react";

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

export default function MoonDocsIntroduction() {
  const [open, setOpen] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  // Initial sync before paint
  useLayoutEffect(() => {
    const handleResize = () => {
      const small = window.innerWidth < 1024;
      setIsSmallScreen(small);
      setShowSidebar(!small);
    };
    handleResize();
  }, []);
  useEffect(() => {
    const handleResize = () => {
      const small = window.innerWidth < 1024;
      setIsSmallScreen(small);
      setShowSidebar(!small);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isSmallScreen || !showSidebar) return;
    const handleOutsideClick = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      )
        setShowSidebar(false);
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isSmallScreen, showSidebar]);

  useEffect(() => {
    if (!isSmallScreen || !showSidebar) return;
    const handleEscape = (e) => {
      if (e.key === "Escape") setShowSidebar(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isSmallScreen, showSidebar]);

  useEffect(() => {
    if (showSidebar && isSmallScreen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSidebar, isSmallScreen]);

  const toggleSidebar = () => setShowSidebar((p) => !p);

  return (
    <div className="flex flex-col w-full h-full bg-neutral-950 scroll-auto overflow-auto m-0 p-0">
      <Head>
        <title>MoonUI - Introduction</title>
        <meta name="title" content="MoonUI - Introduction" />
        <meta
          name="description"
          content="MoonUI introduction, here you will find everything about this project."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Valasellis Dimitris" />
        <link
          rel="canonical"
          href="https://moon-ui-app.vercel.app/docs/introduction"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://moon-ui-app.vercel.app/docs/introduction"
        />
        <meta property="og:title" content="Moon UI - Introduction" />
        <meta
          property="og:description"
          content="MoonUI introduction, here you will find everything about this project."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:site_name" content="MoonUI" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://moon-ui-app.vercel.app/docs/introduction"
        />
        <meta name="twitter:title" content="Moon UI - Introduction" />
        <meta
          name="twitter:description"
          content="MoonUI introduction, here you will find everything about this project."
        />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="twitter:creator" content="@valasellisdimitris" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="application-name" content="MoonUI" />
        <meta name="apple-mobile-web-app-title" content="MoonUI" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="keywords"
          content="MoonUI introduction, UI library documentation, web development, Tailwind CSS, HTML components, minimal UI"
        />
        <meta name="language" content="en-US" />
        <meta name="geo.region" content="US" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </Head>

      <Header />

      <main className="flex flex-row m-0 p-0 min-h-screen relative pr-0 pl-0">
        <Sidebar
          ref={sidebarRef}
          isShown={showSidebar}
          isSmallScreen={isSmallScreen}
          toggleSidebar={toggleSidebar}
        />
        {isSmallScreen && showSidebar && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setShowSidebar(false)}
          />
        )}
        <aside
          className={`flex-1 bg-neutral-950 overflow-y-auto p-6 pt-10 ${
            isSmallScreen ? "ml-0" : "ml-64"
          } lg:px-16 lg:py-12`}
        >
          <div className="flex flex-col items-start w-full max-w-4xl">
            <Link
              href="/"
              className={`${ubuntu.className} font-thin text-sm mb-6 text-neutral-400 flex flex-row gap-2 hover:underline underline-offset-4 items-start justify-start duration-100 ease-in-out transition-all hover:text-neutral-200`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
                  clipRule="evenodd"
                />
              </svg>
              Back
            </Link>

            <h1
              className={`${ubuntu.className} font-bold text-left text-3xl sm:text-4xl text-white mb-2`}
            >
              Introduction
            </h1>
            <p
              className={`${ubuntu.className} font-thin text-start flex flex-wrap items-start justify-start text-sm text-neutral-300 mb-8`}
            >
              Here is everything in short about everything you need to know
              about this project.
            </p>
            <div className="w-64 h-px bg-neutral-900 mb-8"></div>
            <p
              className={`${ubuntu.className} font-normal text-start flex flex-wrap items-start justify-start text-md text-neutral-300 w-full mb-12`}
            >
              MoonUI is currently being 100% developed by Dimitris Valasellis, a
              proud front-end developer who is fully dedicated to updating &
              using this project to all of his projects, even when it
              doesn&apos;t match the theme.
            </p>
            <div className="w-32 h-px bg-neutral-900 mb-8"></div>
            <p
              className={`${ubuntu.className} font-normal text-start flex flex-wrap items-start justify-start text-md text-neutral-300 w-full mb-12`}
            >
              MoonUI is really simple, just find the component you need in the
              sidebar, scroll a bit, copy the code and you now can paste the
              fully working component into your project, unless it has
              javascript, which you need to kind of change where things go.
            </p>

            <div className="space-y-3 w-full mt-6 rounded-none">
              <div className="border-b border-neutral-800 pb-3 px-3 py-2 rounded-none">
                <button
                  onClick={() => setOpen(open === 1 ? null : 1)}
                  className={`${ubuntu.className} flex items-start justify-between w-full text-left text-base p-4 font-medium text-neutral-200 hover:underline underline-offset-4`}
                >
                  Will MoonUI keep getting updated?
                  <span
                    className={`transform transition-transform duration-100 ease-in-out ${
                      open === 1 ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-100 ease-in-out ${
                    open === 1 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p
                    className={`${ubuntu.className} mt-2 text-sm text-neutral-400 pl-6 p-6`}
                  >
                    Yes, MoonUI will keep getting updated regularly without any
                    errors & bugs.
                  </p>
                </div>
              </div>

              <div className="border-b border-neutral-800 pb-3 px-3 py-2 rounded-none">
                <button
                  onClick={() => setOpen(open === 2 ? null : 2)}
                  className={`${ubuntu.className} flex items-start justify-between w-full text-left p-4 text-base font-medium text-neutral-200 hover:underline underline-offset-4`}
                >
                  How do I use MoonUI?
                  <span
                    className={`transform transition-transform duration-100 ease-in-out ${
                      open === 2 ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-100 ease-in-out ${
                    open === 2 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p
                    className={`${ubuntu.className} mt-2 text-sm text-neutral-400 pl-6 p-6`}
                  >
                    Simply visit the Installation page, it&apos;s at the
                    sidebar, there you will find everything you need to know on
                    how to use the components of MoonUI.
                  </p>
                </div>
              </div>

              <div className="border-b border-neutral-800 pb-3 px-3 py-2 rounded-none">
                <button
                  onClick={() => setOpen(open === 3 ? null : 3)}
                  className={`${ubuntu.className} flex items-start justify-between p-4 w-full text-left text-base font-medium text-neutral-200 hover:underline underline-offset-4`}
                >
                  What&apos;s the quality?
                  <span
                    className={`transform transition-transform duration-100 ease-in-out ${
                      open === 3 ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-100 ease-in-out ${
                    open === 3 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p
                    className={`${ubuntu.className} mt-2 text-sm text-neutral-400 pl-6 p-6`}
                  >
                    MoonUI components are promised with 100% quality code and
                    hard-coded code, with simple code and quality components,
                    everything will work perfectly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {isSmallScreen && (
          <button
            ref={buttonRef}
            onClick={toggleSidebar}
            className="fixed bottom-4 right-4 bg-neutral-800 text-white p-3 rounded-full z-50"
          >
            {showSidebar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        )}
      </main>
    </div>
  );
}
