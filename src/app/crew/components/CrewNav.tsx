import styles from "./CrewNav.module.css";

import { useSwiper } from "swiper/react";

export default function CrewNav({ index }: { index: number }) {
    const swiper = useSwiper();
    return (
        <ul className={styles.nav}>
            <li
                onClick={() => swiper.slideTo(0)}
                className={index === 0 ? styles.active : ""}
            ></li>
            <li
                onClick={() => swiper.slideTo(1)}
                className={index === 1 ? styles.active : ""}
            ></li>
            <li
                onClick={() => swiper.slideTo(2)}
                className={index === 2 ? styles.active : ""}
            ></li>
            <li
                onClick={() => swiper.slideTo(3)}
                className={index === 3 ? styles.active : ""}
            ></li>
        </ul>
    );
}
