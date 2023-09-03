"use client";

import styles from "./TechnologyNav.module.css";

import { useSwiper } from "swiper/react";

import { Bellefair } from "next/font/google";

const bellefair = Bellefair({ subsets: ["latin"], weight: ["400"] });
export default function TechnologyNav({ index }: { index: number }) {
    const swiper = useSwiper();
    return (
        <ul
            className={`${styles.nav} ${bellefair.className} grid h-[304px] justify-between`}
        >
            <li
                onClick={() => swiper.slideTo(0)}
                className={index === 0 ? styles.active : ""}
            >
                1
            </li>
            <li
                onClick={() => swiper.slideTo(1)}
                className={index === 1 ? styles.active : ""}
            >
                2
            </li>
            <li
                onClick={() => swiper.slideTo(2)}
                className={index === 2 ? styles.active : ""}
            >
                3
            </li>
        </ul>
    );
}
