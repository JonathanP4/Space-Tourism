"use client";

import styles from "./MainNavigation.module.css";

import Image from "next/image";
import Link from "next/link";

import { Barlow_Condensed } from "next/font/google";
import { usePathname } from "next/navigation";
import MobileSidebar from "./MobileSidebar";
import { useState } from "react";

const barlow_condensed = Barlow_Condensed({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function MainNavigation() {
    const [expanded, setExpanded] = useState(false);
    const path = usePathname();

    return (
        <nav className="flex justify-between items-center p-6 md:pt-0 md:pr-0 text-white xl:pt-10 xl:pl-[3.44rem]">
            <Image
                width={48}
                height={48}
                src={"/assets/shared/logo.svg"}
                alt="logo"
            />
            <Image
                onClick={() => setExpanded(true)}
                className="md:hidden cursor-pointer"
                width={24}
                height={21}
                src={"/assets/shared/icon-hamburger.svg"}
                alt="hamburguer navigation"
            />
            <MobileSidebar expanded={expanded} setExpanded={setExpanded} />
            <div
                className={`hidden w-[473px] h-[1px] -mr-[5rem] z-10 relative bg-white opacity-[0.25] xl:block`}
            ></div>
            <ul
                className={`${styles.navList} ${barlow_condensed.className} hidden gap-[2.31rem] md:flex xl:pl-[7.69rem] xl:pr-[10.44rem] xl:gap-12`}
            >
                <li>
                    <Link
                        className={path === "/" ? styles.active : ""}
                        href={"/"}
                    >
                        <span>00</span>
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={path === "/destination" ? styles.active : ""}
                        href={"/destination"}
                    >
                        <span>01</span>
                        Destination
                    </Link>
                </li>
                <li>
                    <Link
                        className={path === "/crew" ? styles.active : ""}
                        href={"/crew"}
                    >
                        <span>02</span>
                        Crew
                    </Link>
                </li>
                <li>
                    <Link
                        className={path === "/technology" ? styles.active : ""}
                        href={"/technology"}
                    >
                        <span>03</span>
                        Technology
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
