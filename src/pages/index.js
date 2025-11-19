import Head from "next/head";
import Header from "@/components/Header";
import { Ubuntu } from "next/font/google";
import Image from "next/image";

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

export default function IndexPage() {
  return (
    <div
      className={
        "flex flex-col bg-neutral-950 overflow-auto m-0 p-0 scroll-auto"
      }
    >
      <Head>
        <title>MoonUI</title>
        <meta name="title" content="MoonUI" />
        <meta
          name="description"
          content="MoonUI is a modern and minimal UI library."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Valasellis Dimitris" />
        <link rel="canonical" href={"https://moon-ui-app.vercel.app"} />
        <link rel={"manifest"} href={"/manifest.json"} />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://moon-ui-app.vercel.app"} />
        <meta property="og:title" content={"Moon UI"} />
        <meta
          property="og:description"
          content={"Moon UI is a modern and minimal UI library."}
        />
        <meta property="og:image" content={"/og-image.png"} />
        <meta property="og:site_name" content="MoonUI" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={"https://moon-ui-app.vercel.app"} />
        <meta name="twitter:title" content={"Moon UI - Home"} />
        <meta
          name="twitter:description"
          content={"Moon UI is a modern and minimal UI library."}
        />
        <meta name="twitter:image" content={"/og-image.png"} />
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
          content="UI library, Tailwind CSS, HTML components, web development, minimal UI, custom components"
        />
        <meta name="language" content="en-US" />
        <meta name="geo.region" content="US" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </Head>
      <Header />
      <main className="flex flex-col w-full h-full overflow-auto bg-neutral-950 px-4 sm:px-8 md:px-12 lg:px-30 xl:px-40 2xl:px-90">
        <section className="relative flex flex-col items-center mb-10 h-full w-full overflow-hidden">
          <Image
            src="/hero-image.png"
            alt="Hero Image"
            width={2064}
            height={1056}
            className="bg-no-repeat bg-center flex bg-auto rounded-b-4xl items-center justify-center"
            priority={true}
            quality={100}
          />
        </section>

        <section className="flex flex-col items-center w-fit h-fit mb-10">
          <div className="grid grid-cols-1 grid-rows-3 items-center justify-center flex-row gap-4 sm:grid-cols-1 sm:grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 xl:grid-cols-3 xl:grid-rows-1">
            <div className="flex flex-col items bg-neutral-950 border border-neutral-900 rounded-lg p-6 items-start justify-start h-full">
              <h1
                className={`${ubuntu.className} font-bold text-center justify-center text-white mb-4`}
              >
                Performant
              </h1>
              <p
                className={`${ubuntu.className} font-thin text-start justify-start text-neutral-400`}
              >
                Every component is fully optimized for maximum performance
                because of its pure and minimal code.
              </p>
            </div>
            <div className="flex flex-col items bg-neutral-950 border border-neutral-900 rounded-lg p-6 items-start justify-start h-full">
              <h1
                className={`${ubuntu.className} font-bold text-center justify-center text-white mb-4`}
              >
                Quality
              </h1>
              <p
                className={`${ubuntu.className} font-thin text-start justify-start text-neutral-400`}
              >
                Every component is fully hard-coded and feels premium with
                quality code whilst keeping it simple and perfect.
              </p>
            </div>
            <div className="flex flex-col items bg-neutral-950 border border-neutral-900 rounded-lg p-6 items-start justify-start h-full">
              <h1
                className={`${ubuntu.className} font-bold text-center justify-center text-white mb-4`}
              >
                Ease Of Use
              </h1>
              <p
                className={`${ubuntu.className} font-thin text-start justify-start text-neutral-400`}
              >
                Every component is made to be easy to change and adjust to your
                likings, even when it&apos;s a big component.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-row items-center mb-10 h-full w-full">
          <p
            className={`${ubuntu.className} font-normal text-start justify-start text-white text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl`}
          >
            MoonUI is a HTML & Tailwind UI Library for Developers, beautifully
            designed by{" "}
            <span
              className={`${ubuntu.className} font-bold items-center justify-center text-white`}
            >
              Valasellis Dimitris
            </span>
            . Bringing powerful components for your amazing web apps, with high
            customizability to fit your preferences, works seamlessly with any
            major framework that supports HTML & Tailwind.
          </p>
        </section>
        <section className="flex flex-col border border-neutral-900 w-full h-125 p-12 rounded-4xl bg-[url(/hero-image1.png)] bg-center bg-no-repeat bg-cover mb-12">
          <h1
            className={`${ubuntu.className} font-bold text-center text-2xl justify-center flex text-white mb-12`}
          >
            TRY IT OUT.
          </h1>
          <div className="flex justify-between items-center bg-neutral-900 border border-neutral-800 rounded-t-lg px-3 py-4 w-full max-w-3xl mx-auto overflow-y-hidden overflow-x-scroll">
            <span className={`${ubuntu.className} text-neutral-400 text-sm`}>
              HTML Snippet
            </span>
            <button
              id="copyButton"
              onClick={() => {
                const code = `<button class="flex flex-row items-center justify-center cursor-pointer bg-neutral-100 hover:bg-neutral-200 duration-100 ease-in-out text-black transition-all px-3 py-2 rounded-lg">Primary</button>`;
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

          <div className="bg-neutral-950 border-x border-b border-neutral-800 rounded-b-lg w-full max-w-3xl mx-auto h-full">
            <pre className="text-neutral-300 text-sm overflow-x-auto p-6 w-full h-full">
              {`<button class="flex flex-row items-center justify-center cursor-pointer bg-neutral-100 hover:bg-neutral-200 duration-100 ease-in-out text-black transition-all px-3 py-2 rounded-lg">
    Primary
</button>`}
            </pre>
          </div>
        </section>
        <section
          className={
            "flex flex-col items-center justify-center w-fit h-fit mb-12"
          }
        >
          <div
            className={
              "grid grid-cols-1 items-center justify-center gap-4 xl:grid-cols-2"
            }
          >
            <div
              className={
                "flex flex-col items-start justify-start p-8 bg-neutral-950 rounded-lg border border-neutral-900 w-full h-full"
              }
            >
              <h1
                className={`${ubuntu.className} font-bold text-white text-center items-center justify-center flex text-2xl mb-8`}
              >
                A Library You Will Love
              </h1>
              <p
                className={`${ubuntu.className} font-thin text-neutral-300 text-start items-center justify-center flex flex-wrap mb-6`}
              >
                The author hopes that people who visit this library will
                absolutely love it because of it&apos;s simplicity and ease of
                use.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 flex invert"
              >
                <path d="M2 6.342a3.375 3.375 0 0 1 6-2.088 3.375 3.375 0 0 1 5.997 2.26c-.063 2.134-1.618 3.76-2.955 4.784a14.437 14.437 0 0 1-2.676 1.61c-.02.01-.038.017-.05.022l-.014.006-.004.002h-.002a.75.75 0 0 1-.592.001h-.002l-.004-.003-.015-.006a5.528 5.528 0 0 1-.232-.107 14.395 14.395 0 0 1-2.535-1.557C3.564 10.22 1.999 8.558 1.999 6.38L2 6.342Z" />
              </svg>
            </div>
            <div
              className={
                "flex flex-col items-start justify-start p-8 bg-neutral-950 rounded-lg border border-neutral-900 w-full h-full"
              }
            >
              <h1
                className={`${ubuntu.className} font-bold text-white text-center items-center justify-center flex text-2xl mb-8`}
              >
                Minimal aesthetics, Maximum customizability.
              </h1>
              <p
                className={`${ubuntu.className} font-thin text-neutral-300 text-start items-center justify-center flex flex-wrap mb-6`}
              >
                Yes indeed, all components are made with pure HTML & Tailwind so
                you can customize it however you want, we just offer ready ones.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 flex invert"
              >
                <path d="M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z" />
              </svg>
            </div>
            <div
              className={
                "relative flex flex-col items-start justify-start bg-neutral-950 rounded-lg border border-neutral-900 w-full h-full overflow-hidden"
              }
            >
              <Image
                src="/hero-image3.png"
                alt="Abstract UI design"
                fill={true}
                className="object-cover"
                quality={100}
              />
            </div>
            <div
              className={
                "flex flex-col items-start justify-start p-8 bg-neutral-950 rounded-lg border border-neutral-900 w-full h-full"
              }
            >
              <h1
                className={`${ubuntu.className} font-bold text-white text-center items-center justify-center flex text-lg mb-1 gap-2`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 6.25A2.25 2.25 0 0 1 3.25 4h8.5A2.25 2.25 0 0 1 14 6.25v.085a1.5 1.5 0 0 1 1 1.415v.5a1.5 1.5 0 0 1-1 1.415v.085A2.25 2.25 0 0 1 11.75 12h-8.5A2.25 2.25 0 0 1 1 9.75v-3.5Zm2.25-.75a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75h-8.5Z"
                    clipRule="evenodd"
                  />
                  <path d="M4.75 7a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75h2a.75.75 0 0 0 .75-.75v-.5A.75.75 0 0 0 6.75 7h-2Z" />
                </svg>
                Battery Guaranteed
              </h1>
              <p
                className={`${ubuntu.className} font-thin text-neutral-300 text-start text-sm items-center justify-center flex flex-wrap mb-8`}
              >
                This project is being developed regularly by the author.
              </p>
              <h1
                className={`${ubuntu.className} font-bold text-white text-center items-center justify-center flex text-lg mb-1 gap-2`}
              >
                <Image
                  src={"/github.png"}
                  alt={"Github Icon"}
                  width={512}
                  height={512}
                  quality={100}
                  priority={true}
                  loading={"eager"}
                  className={"size-4 invert flex justify-center items-center"}
                ></Image>
                Fully Open-Source
              </h1>
              <p
                className={`${ubuntu.className} font-thin text-neutral-300 text-start text-sm items-center justify-center flex flex-wrap mb-8`}
              >
                This project is open-source available at Github.
              </p>
              <h1
                className={`${ubuntu.className} font-bold text-white text-center items-center justify-center flex text-lg mb-1 gap-2`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M7.25 1.75a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5ZM11.536 2.904a.75.75 0 1 1 1.06 1.06l-1.06 1.061a.75.75 0 0 1-1.061-1.06l1.06-1.061ZM14.5 7.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .75-.75ZM4.464 9.975a.75.75 0 0 1 1.061 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061ZM4.5 7.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .75-.75ZM5.525 3.964a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 1.06-1.061l1.061 1.06ZM8.779 7.438a.75.75 0 0 0-1.368.366l-.396 5.283a.75.75 0 0 0 1.212.646l.602-.474.288 1.074a.75.75 0 1 0 1.449-.388l-.288-1.075.759.11a.75.75 0 0 0 .726-1.165L8.78 7.438Z" />
                </svg>
                Within Seconds
              </h1>
              <p
                className={`${ubuntu.className} font-thin text-neutral-300 text-start text-sm items-center justify-center flex flex-wrap mb-8`}
              >
                Using any component is very easy, just press the copy button.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
