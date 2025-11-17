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

export default function MoonComponentsProductCard() {
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
        <title>MoonUI - Product Card</title>
        <meta name="title" content="MoonUI - Product Card" />
        <meta
          name="description"
          content="Product card for showcasing items with price, rating, and a clear call-to-action."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Valasellis Dimitris" />
        <link
          rel="canonical"
          href="https://moon-ui-app.vercel.app/components/cards/product"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://moon-ui-app.vercel.app/components/cards/product"
        />
        <meta property="og:title" content="Moon UI - Product Card" />
        <meta
          property="og:description"
          content="Product card for showcasing items with price, rating, and a clear call-to-action."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:site_name" content="MoonUI" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Moon UI - Product Card" />
        <meta
          name="twitter:description"
          content="Product card for showcasing items with price, rating, and a clear call-to-action."
        />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="theme-color" content="#0a0a0a" />
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
              Product Card
            </h1>

            <p
              className={`${ubuntu.className} font-thin text-start flex flex-wrap items-start justify-start text-sm text-neutral-300 mb-12`}
            >
              A product card is common in e-commerce layouts and highlights a
              product image, name, price, rating, and a clear add-to-cart
              action.
            </p>

            <section className="flex flex-col w-full mb-12 items-start">
              <div className="flex flex-col w-full max-w-3xl">
                <div className="flex items-center justify-center w-full py-16 bg-neutral-950 border border-neutral-800 rounded-t-lg">
                  <article className="flex w-full max-w-md flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-sm hover:border-neutral-700 hover:bg-neutral-950/80 transition-colors duration-150">
                    <div className="relative h-40 w-full bg-neutral-900/80">
                      <div className="absolute left-3 top-3 inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900/80 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-neutral-300">
                        New Arrival
                      </div>
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-neutral-400">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-950/80 text-[10px]">
                          ●
                        </span>
                        Monochrome Studio Headphones
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 px-4 py-4">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex flex-col gap-1">
                          <h2 className="text-sm sm:text-base font-semibold text-white leading-snug">
                            Monochrome Studio Headphones
                          </h2>
                          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                            Closed-back over-ear headphones tuned for deep focus
                            and late-night sessions.
                          </p>
                        </div>
                        <div className="flex flex-col items-start text-left sm:items-end sm:text-right">
                          <span className="text-sm sm:text-base font-semibold text-white">
                            $189
                          </span>
                          <span className="text-[11px] text-neutral-500 line-through">
                            $219
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1 text-[11px] text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-1">
                          <span>★★★★☆</span>
                          <span className="text-neutral-500">
                            4.8 · 128 reviews
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1 w-1 rounded-full bg-neutral-500" />
                          In stock
                        </span>
                      </div>

                      <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/80 text-[10px]">
                            ⌁
                          </span>
                          Ships in 24 hours · Free returns for 30 days
                        </div>
                        <button className="mt-2 inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-100 px-3 py-1.5 text-[12px] font-medium text-black transition-colors duration-150 hover:bg-neutral-200 sm:mt-0">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </article>
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
                      const code = `<article class="flex w-full max-w-md flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-sm hover:border-neutral-700 hover:bg-neutral-950/80 transition-colors duration-150">
  <div class="relative h-40 w-full bg-neutral-900/80">
    <div class="absolute left-3 top-3 inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900/80 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-neutral-300">
      New Arrival
    </div>
    <div class="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-neutral-400">
      <span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-950/80 text-[10px]">●</span>
      Monochrome Studio Headphones
    </div>
  </div>
  <div class="flex flex-col gap-3 px-4 py-4">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div class="flex flex-col gap-1">
        <h2 class="text-sm sm:text-base font-semibold text-white leading-snug">
          Monochrome Studio Headphones
        </h2>
        <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed">
          Closed-back over-ear headphones tuned for deep focus and late-night sessions.
        </p>
      </div>
      <div class="flex flex-col items-start text-left sm:items-end sm:text-right">
        <span class="text-sm sm:text-base font-semibold text-white">$189</span>
        <span class="text-[11px] text-neutral-500 line-through">$219</span>
      </div>
    </div>
    <div class="flex flex-col gap-1 text-[11px] text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex items-center gap-1">
        <span>★★★★☆</span>
        <span class="text-neutral-500">4.8 · 128 reviews</span>
      </div>
      <span class="inline-flex items-center gap-1">
        <span class="h-1 w-1 rounded-full bg-neutral-500"></span>
        In stock
      </span>
    </div>
    <div class="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex items-center gap-2 text-[11px] text-neutral-500">
        <span class="inline-flex h-5 w-5 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/80 text-[10px]">⌁</span>
        Ships in 24 hours · Free returns for 30 days
      </div>
      <button class="mt-2 inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-100 px-3 py-1.5 text-[12px] font-medium text-black transition-colors duration-150 hover:bg-neutral-200 sm:mt-0">
        Add to cart
      </button>
    </div>
  </div>
</article>`;
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
                    {`<article class="flex w-full max-w-md flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-sm hover:border-neutral-700 hover:bg-neutral-950/80 transition-colors duration-150">
  <div class="relative h-40 w-full bg-neutral-900/80">
    <div class="absolute left-3 top-3 inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900/80 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-neutral-300">
      New Arrival
    </div>
    <div class="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-neutral-400">
      <span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-950/80 text-[10px]">●</span>
      Monochrome Studio Headphones
    </div>
  </div>
  <div class="flex flex-col gap-3 px-4 py-4">
    <div class="flex items-start justify-between gap-4">
      <div class="flex flex-col gap-1">
        <h2 class="text-sm sm:text-base font-semibold text-white leading-snug">
          Monochrome Studio Headphones
        </h2>
        <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed">
          Closed-back over-ear headphones tuned for deep focus and late-night sessions.
        </p>
      </div>
      <div class="flex flex-col items-end text-right">
        <span class="text-sm sm:text-base font-semibold text-white">$189</span>
        <span class="text-[11px] text-neutral-500 line-through">$219</span>
      </div>
    </div>
    <div class="flex items-center justify-between text-[11px] text-neutral-400">
      <div class="flex items-center gap-1">
        <span>★★★★☆</span>
        <span class="text-neutral-500">4.8 · 128 reviews</span>
      </div>
      <span class="inline-flex items-center gap-1">
        <span class="h-1 w-1 rounded-full bg-neutral-500"></span>
        In stock
      </span>
    </div>
    <div class="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex items-center gap-2 text-[11px] text-neutral-500">
        <span class="inline-flex h-5 w-5 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/80 text-[10px]">⌁</span>
        Ships in 24 hours · Free returns for 30 days
      </div>
      <button class="mt-2 inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-100 px-3 py-1.5 text-[12px] font-medium text-black transition-colors duration-150 hover:bg-neutral-200 sm:mt-0">
        Add to cart
      </button>
    </div>
  </div>
</article>`}
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
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 0 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z"
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
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
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
