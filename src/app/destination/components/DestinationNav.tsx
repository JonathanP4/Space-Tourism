import styles from "./DestinationNav.module.css";
import { Barlow_Condensed } from "next/font/google";
import { useSwiper } from "swiper/react";

const barlow_condensed = Barlow_Condensed({
    weight: ["400"],
    subsets: ["latin"],
});

export default function DestinationNav({ index }: { index: number }) {
    const swiper = useSwiper();

    return (
        <ul
            className={`${styles.navList} ${barlow_condensed.className} uppercase tracking-[0.15rem] flex items-center gap-[1.69rem]`}
        >
            <li
                onClick={() => swiper.slideToLoop(0)}
                className={`${index === 0 ? styles.active : ""} pb-2`}
            >
                Moon
            </li>
            <li
                onClick={() => swiper.slideToLoop(1)}
                className={`${index === 1 ? styles.active : ""} pb-2`}
            >
                Mars
            </li>
            <li
                onClick={() => swiper.slideToLoop(2)}
                className={`${index === 2 ? styles.active : ""} pb-2`}
            >
                Europa
            </li>
            <li
                onClick={() => swiper.slideToLoop(3)}
                className={`${index === 3 ? styles.active : ""} pb-2`}
            >
                Titan
            </li>
        </ul>
    );
}
