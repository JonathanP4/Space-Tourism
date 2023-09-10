"use client";

import Link from "next/link";
import styles from "./page.module.css";

import { Barlow_Condensed, Bellefair, Barlow } from "next/font/google";

const barlow_condensed = Barlow_Condensed({
    weight: ["400"],
    subsets: ["latin"],
});
const bellefair = Bellefair({
    weight: ["400"],
    subsets: ["latin"],
});
const barlow = Barlow({
    weight: ["400"],
    subsets: ["latin"],
});
//
export default function Home() {
    return (
        <>
            <div className={`${styles.homeBg} bg`}></div>
            <main className="text-center grid p-6 pb-12 md:pb-20 md:mt-[5.12rem] xl:flex xl:text-left xl:justify-around xl:mt-[15.69rem]">
                <div className="grid gap-4 max-w-[28.125rem] justify-self-center">
                    <span
                        className={`${barlow_condensed.className} uppercase text-light-purple md:text-xl md:tracking-[0.21rem]`}
                    >
                        So, you want to travel to space
                    </span>
                    <h1
                        className={`${bellefair.className} uppercase text-white text-[5rem] leading-[6.25rem] md:text-[9.375rem] md:leading-none`}
                    >
                        Space
                    </h1>
                    <p
                        className={`${barlow.className} text-light-purple text-[0.94rem] leading-[1.56rem] md:text-[1rem] md:leading-[1.75rem]`}
                    >
                        Let&apos;s face it; if you want to go to space, you
                        might as well genuinely go to outer space and not hover
                        kind of on the edge of it. Well sit back, and relax
                        because we&apos;ll give you a truly out of this world
                        experience!
                    </p>
                </div>
                <Link
                    href={"/destination"}
                    className={`${bellefair.className} aspect-square w-[9.37rem] bg-white uppercase text-xl grid place-content-center rounded-full justify-self-center mt-[5.06rem] md:w-[15.125rem] md:text-[2rem] md:mt-[9.75rem] xl:w-[17.125rem] xl:mt-0 xl:self-end transition-all outline outline-0 outline-white/10 hover:outline-[3rem] md:hover:outline-[5rem]`}
                >
                    Explore
                </Link>
            </main>
        </>
    );
}
