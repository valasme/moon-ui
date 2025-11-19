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

export default function MoonComponentsTextInput() {
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  // Initial sync layout before paint
  useLayoutEffect(() => {
    const handleResize = () => {
      const small = window.innerWidth < 1024;
      setIsSmallScreen(small);
      setShowSidebar(!small);
    };
    handleResize();
  }, []);

  // Resize listener
  useEffect(() => {
    const handleResize = () => {
      const small = window.innerWidth < 1024;
      setIsSmallScreen(small);
      setShowSidebar(!small);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close on outside click
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

  // Close on Escape
  useEffect(() => {
    if (!isSmallScreen || !showSidebar) return;
    const handleEscape = (e) => {
      if (e.key === "Escape") setShowSidebar(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isSmallScreen, showSidebar]);

  // Body overflow
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
        <title>MoonUI - Text Input</title>
        <meta name="title" content="MoonUI - Text Input" />
        <meta
          name="description"
          content="MoonUI text input, used across all pages."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Valasellis Dimitris" />
        <link
          rel="canonical"
          href="https://moon-ui-app.vercel.app/components/inputs/text"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://moon-ui-app.vercel.app/components/inputs/text"
        />
        <meta property="og:title" content="Moon UI - Text Input" />
        <meta
          property="og:description"
          content="MoonUI text input, used across all pages."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:site_name" content="MoonUI" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Moon UI - Text Input" />
        <meta
          name="twitter:description"
          content="MoonUI text input, used across all pages."
        />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta
          name="keywords"
          content="MoonUI text input, UI button component, Tailwind CSS input, web development input, HTML input, component library"
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
              Text Input
            </h1>

            <p
              className={`${ubuntu.className} font-thin text-start flex flex-wrap items-start justify-start text-sm text-neutral-300 mb-12`}
            >
              The text input is used across all pages, let&apos;s say for
              example, search docs input etc.
            </p>

            <section className="flex flex-col w-full mb-12 items-start">
              <div className="flex flex-col w-full max-w-3xl">
                <div className="flex items-center justify-center w-full py-16 bg-neutral-950 border border-neutral-800 rounded-t-lg">
                  <input
                    type="text"
                    placeholder={"Text..."}
                    className={
                      "flex w-fit h-fit px-4 py-2 border-none focus:ring-0 ring-0 outline-0 focus:outline-0 flex-row justify-start items-start text-start flex-wrap bg-neutral-900 hover:bg-neutral-900/80 overflow-auto duration-100 ease-in-out font-sans rounded-md text-white placeholder-white"
                    }
                  />
                </div>

                <div className="flex justify-between items-center bg-neutral-900 border-x border-t border-neutral-800 px-4 py-2">
                  <span
                    className={`${ubuntu.className} text-neutral-400 text-sm`}
                  >
                    HTML Snippet
                  </span>
                  <button
                    id="copyButton"
                    onClick={() => {
                      const code = `<input type="text" placeholder="Text..." class="flex w-fit h-fit px-4 py-2 border-none focus:ring-0 ring-0 outline-0 text-white placeholder-white focus:outline-0 flex-row justify-start items-start text-start flex-wrap bg-neutral-900 hover:bg-neutral-900/80 overflow-auto duration-100 ease-in-out font-sans rounded-md" />`;
                      navigator.clipboard.writeText(code);
                      const btn = document.getElementById("copyButton");
                      if (btn) {
                        btn.innerText = "Copied!";
                        btn.classList.add("text-green-400");
                        setTimeout(() => {
                          btn.innerText = "Copy";
                          btn.classList.remove("text-green-400");
                        }, 2000);
                      }
                    }}
                    className="text-neutral-400 hover:text-white text-sm bg-neutral-800 hover:bg-neutral-700 px-3 py-1 rounded-md transition-all duration-150"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-neutral-950 border-x border-b border-neutral-800 rounded-b-lg w-full h-full">
                  <pre className="text-neutral-300 text-sm overflow-x-auto p-6 w-full h-full">
                    {`<input type="text" placeholder="Text..." class="flex w-fit h-fit px-4 py-2 border-none focus:ring-0 ring-0 outline-0 focus:outline-0 flex-row justify-start items-start text-start text-white placeholder-white flex-wrap bg-neutral-900 hover:bg-neutral-900/80 overflow-auto duration-100 ease-in-out font-sans rounded-md" />`}
                  </pre>
                </div>
              </div>
            </section>
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
