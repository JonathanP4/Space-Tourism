import { useSwiper } from "swiper/react";
import styles from "./CrewNav.module.css";

export default function CrewNav({
    index,
    center,
}: {
    index: number;
    center?: boolean;
}) {
    const swiper = useSwiper();
    return (
        <ul className={`${styles.crewNav} ${center ? "m-auto" : ""}`}>
            <li
                onClick={() => swiper.slideToLoop(0)}
                className={`${index === 0 ? styles.active : ""}`}
            ></li>
            <li
                onClick={() => swiper.slideToLoop(1)}
                className={`${index === 1 ? styles.active : ""}`}
            ></li>
            <li
                onClick={() => swiper.slideToLoop(2)}
                className={`${index === 2 ? styles.active : ""}`}
            ></li>
            <li
                onClick={() => swiper.slideToLoop(3)}
                className={`${index === 3 ? styles.active : ""}`}
            ></li>
        </ul>
    );
}
