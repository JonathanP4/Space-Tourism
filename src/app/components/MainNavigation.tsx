"use client";

import Image from "next/image";
import styles from "./MainNavigation.module.css";

import { Barlow_Condensed } from "next/font/google";
import { usePathname } from "next/navigation";
import Link from "next/link";

const barlow_condensed = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function MainNavigation() {
    const path = usePathname();
    return (
        <nav className={`${styles.nav} ${barlow_condensed.className}`}>
            <Link href={"/"}>
                <Image
                    className={styles.logo}
                    width={48}
                    height={48}
                    src={"/assets/shared/logo.svg"}
                    alt="space tourism logo"
                />
            </Link>
            <div className={styles.desktopNav}>
                <ul>
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
                            className={
                                path === "/destination" ? styles.active : ""
                            }
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
                            className={
                                path === "/technology" ? styles.active : ""
                            }
                            href={"/technology"}
                        >
                            <span>03</span>
                            Technology
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.mobileNav}>
                <Image
                    src={"/assets/shared/icon-hamburger.svg"}
                    width={24}
                    height={21}
                    alt="navigation"
                />
            </div>
        </nav>
    );
}
