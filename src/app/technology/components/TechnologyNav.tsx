import { useSwiper } from "swiper/react";
import styles from "./TechnologyNav.module.css";

import { Bellefair } from "next/font/google";

const bellefair = Bellefair({ weight: ["400"], subsets: ["latin"] });

export default function TechnologyNav({ index }: { index: number }) {
    const swiper = useSwiper();
    return (
        <ul className={`${styles.navList} ${bellefair.className}`}>
            <li
                onClick={() => swiper.slideToLoop(0)}
                className={index === 0 ? styles.active : ""}
            >
                1
            </li>
            <li
                onClick={() => swiper.slideToLoop(1)}
                className={index === 1 ? styles.active : ""}
            >
                2
            </li>
            <li
                onClick={() => swiper.slideToLoop(2)}
                className={index === 2 ? styles.active : ""}
            >
                3
            </li>
        </ul>
    );
}
