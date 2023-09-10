"use client";
import Image from "next/image";
import styles from "./MobileSidebar.module.css";
import Link from "next/link";

import { Barlow_Condensed } from "next/font/google";
import { Dispatch, MouseEvent, SetStateAction } from "react";

const barlow_condensed = Barlow_Condensed({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function MobileSidebar({
    expanded,
    setExpanded,
}: {
    expanded: boolean;
    setExpanded: Dispatch<SetStateAction<boolean>>;
}) {
    const linkClickHandler = (e: MouseEvent<HTMLUListElement>) => {
        const target = e.target as HTMLAnchorElement;
        if (target.href) setTimeout(() => setExpanded(false), 150);
    };

    return (
        <ul
            onClick={linkClickHandler}
            className={`${styles.navList} ${expanded ? styles.expanded : ""} ${
                barlow_condensed.className
            } `}
        >
            <Image
                onClick={() => setExpanded(false)}
                className="self-end cursor-pointer"
                width={19}
                height={19}
                src={"/assets/shared/icon-close.svg"}
                alt="close sidebar"
            />
            <li className="mt-4">
                <Link href={"/"}>
                    <span>00</span>
                    Home
                </Link>
            </li>
            <li>
                <Link href={"/destination"}>
                    <span>01</span>
                    Destination
                </Link>
            </li>
            <li>
                <Link href={"/crew"}>
                    <span>02</span>
                    Crew
                </Link>
            </li>
            <li>
                <Link href={"/technology"}>
                    <span>03</span>
                    Technology
                </Link>
            </li>
        </ul>
    );
}
