import styles from "./DestinationNav.module.css";

import { Barlow_Condensed } from "next/font/google";

import { useSwiper } from "swiper/react";

const barlow_condensed = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["400"],
});

export default function DestinationNav({ index }: { index: number }) {
    const swiper = useSwiper();
    return (
        <div
            className={`${barlow_condensed.className} flex justify-between tracking-[0.16875rem]`}
        >
            <div className="w-full max-w-[445px]"></div>
            <div className="w-full max-w-[465px]">
                <ul className={`${styles.nav} uppercase`}>
                    <li
                        onClick={() => swiper.slideTo(0)}
                        className={index === 0 ? styles.active : ""}
                    >
                        Moon
                    </li>
                    <li
                        onClick={() => swiper.slideTo(1)}
                        className={index === 1 ? styles.active : ""}
                    >
                        Mars
                    </li>
                    <li
                        onClick={() => swiper.slideTo(2)}
                        className={index === 2 ? styles.active : ""}
                    >
                        Europa
                    </li>
                    <li
                        onClick={() => swiper.slideTo(3)}
                        className={index === 3 ? styles.active : ""}
                    >
                        Titan
                    </li>
                </ul>
            </div>
        </div>
    );
}
