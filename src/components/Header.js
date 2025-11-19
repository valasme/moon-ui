"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Ubuntu } from "next/font/google";

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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-950 z-50 top-0 fixed w-full h-16 border-b border-b-neutral-900 left-0 right-0 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-30 xl:px-40 2xl:px-90">
      <div className="flex items-center justify-center gap-6">
        <Link
          href="/"
          className={`${ubuntu.className} font-normal text-white text-center flex items-center justify-center gap-2 flex-row h-fit w-fit`}
        >
          <Image
            src="/favicon.png"
            alt="MoonUI Logo"
            width={500}
            height={500}
            quality={100}
            priority
            loading="eager"
            className="w-5 h-5"
          />
          MoonUI
        </Link>

        <nav className="hidden md:flex items-center justify-center gap-1">
          <Link
            href="/"
            prefetch
            className={`${ubuntu.className} text-white font-normal text-center flex justify-center bg-transparent px-3 py-1.5 hover:bg-neutral-900 duration-100 ease-in-out transition-all cursor-pointer rounded-lg`}
          >
            Home
          </Link>
          <Link
            href="/docs/introduction"
            prefetch
            className={`${ubuntu.className} text-white font-normal text-center flex justify-center bg-transparent px-3 py-1.5 hover:bg-neutral-900 duration-100 ease-in-out transition-all cursor-pointer rounded-lg`}
          >
            Documentation
          </Link>
          <Link
            href="/components/buttons/primary"
            prefetch
            className={`${ubuntu.className} text-white font-normal text-center flex justify-center bg-transparent px-3 py-1.5 hover:bg-neutral-900 duration-100 ease-in-out transition-all cursor-pointer rounded-lg`}
          >
            Components
          </Link>
        </nav>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Link
          href="https://github.com/valasme/moon-ui"
          className={`${ubuntu.className} hidden md:flex text-white font-normal text-center items-center justify-center flex-row bg-transparent px-3 py-1.5 hover:bg-neutral-900 duration-100 ease-in-out transition-all cursor-pointer rounded-lg gap-2`}
          target="_blank"
          prefetch
        >
          <Image
            src="/github.png"
            alt="Github Icon"
            width={512}
            height={512}
            quality={100}
            priority
            loading="eager"
            className="w-4 h-4 invert"
          />
          Github
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white flex items-center justify-center p-2"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-neutral-950 z-40 flex flex-col items-center justify-center gap-6 px-6 sm:px-12">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 text-white text-2xl font-bold"
          >
            ✕
          </button>

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`${ubuntu.className} text-white text-lg font-normal px-4 py-2 hover:bg-neutral-900 rounded-lg`}
          >
            Home
          </Link>
          <Link
            href="/docs/introduction"
            onClick={() => setMenuOpen(false)}
            className={`${ubuntu.className} text-white text-lg font-normal px-4 py-2 hover:bg-neutral-900 rounded-lg`}
          >
            Documentation
          </Link>
          <Link
            href="/components/buttons/primary"
            onClick={() => setMenuOpen(false)}
            className={`${ubuntu.className} text-white text-lg font-normal px-4 py-2 hover:bg-neutral-900 rounded-lg`}
          >
            Components
          </Link>
          <Link
            href="https://github.com/valasme/moon-ui"
            onClick={() => setMenuOpen(false)}
            target="_blank"
            className={`${ubuntu.className} text-white text-lg font-normal px-4 py-2 hover:bg-neutral-900 rounded-lg flex items-center gap-2`}
          >
            <Image
              src="/github.png"
              alt="Github Icon"
              width={512}
              height={512}
              quality={100}
              priority
              loading="eager"
              className="w-4 h-4 invert"
            />
            Github
          </Link>
        </div>
      )}
    </header>
  );
}
