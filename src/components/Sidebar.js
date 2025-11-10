import Link from "next/link";
import {Ubuntu} from "next/font/google";
import {forwardRef} from "react";

const ubuntu = Ubuntu({
    weight: ["300", "400", "500", "700"],
    style: ["normal", "italic"],
    subsets: ["latin-ext", "latin", "greek-ext", "greek", "cyrillic-ext", "cyrillic"],
    display: "auto",
});

const Sidebar = forwardRef(function Sidebar({isShown, isSmallScreen, toggleSidebar}, ref) {
    return (<aside
            ref={ref}
            className={`bg-neutral-950 flex flex-col items-start justify-start border-r border-r-neutral-900 h-[calc(100vh-4rem)] top-16 p-6 gap-2 overflow-y-auto fixed z-50 w-64 left-0 ${isShown || !isSmallScreen ? 'block' : 'hidden'}`}
        >
            <Link
                href={"/docs/introduction"}
                className={`${ubuntu.className} font-normal text-start flex flex-wrap text-white justify-start items-start hover:underline underline-offset-4 px-3 py-2`}
            >
                Introduction
            </Link>
            <Link
                href={"/docs/howtouse"}
                className={`${ubuntu.className} font-normal text-start flex flex-wrap text-white justify-start items-start hover:underline underline-offset-4 mb-1 px-3 py-2`}
            >
                How to use
            </Link>
            <div className={"h-px bg-neutral-900 w-full flex"}></div>
            <div className={"flex flex-col items-start justify-start h-fit w-fit gap-0"}>
                <Link
                    href={"/components/buttons/primary"}
                    className={`${ubuntu.className} font-normal text-start flex flex-wrap text-white justify-start items-start hover:underline underline-offset-4 px-3 py-2`}
                >
                    Primary Button
                </Link>
                <Link
                    href={"/components/buttons/secondary"}
                    className={`${ubuntu.className} font-normal text-start flex flex-wrap text-white justify-start items-start hover:underline underline-offset-4 px-3 py-2`}
                >
                    Secondary Button
                </Link>
                <Link
                    href={"/components/buttons/ghost"}
                    className={`${ubuntu.className} font-normal text-start flex flex-wrap text-white justify-start items-start hover:underline underline-offset-4 px-3 py-2`}
                >
                    Ghost Button
                </Link>
                <Link
                    href={"/components/buttons/outline"}
                    className={`${ubuntu.className} font-normal text-start flex flex-wrap text-white justify-start items-start hover:underline underline-offset-4 px-3 py-2`}
                >
                    Outline Button
                </Link>
                <Link
                    href={"/components/buttons/icon"}
                    className={`${ubuntu.className} font-normal text-start flex flex-wrap text-white justify-start items-start hover:underline underline-offset-4 px-3 py-2`}
                >
                    Icon Button
                </Link>
            </div>
        </aside>);
});

export default Sidebar;
