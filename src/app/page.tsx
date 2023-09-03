"use client";

import Link from "next/link";
import styles from "./page.module.css";

import { Barlow_Condensed, Barlow, Bellefair } from "next/font/google";

const barlow_condensed = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["400"],
});
const barlow = Barlow({
    subsets: ["latin"],
    weight: ["400"],
});
const bellefair = Bellefair({
    subsets: ["latin"],
    weight: ["400"],
});

export default function Home() {
    return (
        <>
            <title>Space Tourism | Home</title>
            <main className={styles.main}>
                <div className={styles.textContainer}>
                    <span className={`${barlow_condensed.className} uppercase`}>
                        So, you want to travel to
                    </span>
                    <h1 className={`${bellefair.className} uppercase`}>
                        Space
                    </h1>
                    <p className={`${barlow.className}`}>
                        Let&apos;s face it; if you want to go to space, you
                        might as well genuinely go to outer space and not hover
                        kind of on the edge of it. Well sit back, and relax
                        because we&apos;ll give you a truly out of this world
                        experience!
                    </p>
                </div>
                <div className={styles.exploreContainer}>
                    <Link
                        href={"/destination"}
                        className={`${bellefair.className} ${styles.exploreButton} uppercase`}
                    >
                        Explore
                    </Link>
                </div>
            </main>
        </>
    );
}
