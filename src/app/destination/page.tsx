import styles from "./page.module.css";

import { Barlow_Condensed } from "next/font/google";
import DestinationSwiper from "./components/DestinationSwiper";

import "swiper/css";

const barlow_condensed = Barlow_Condensed({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function Destination() {
    return (
        <>
            <title>Space Tourism | Destination</title>
            <div className={`${styles.destinationBg} bg`}></div>
            <main className="text-center md:text-left text-white px-6">
                <h1
                    className={`${barlow_condensed.className} uppercase tracking-[0.17rem] inline-flex gap-[1.125rem] md:text-xl md:mt-4 md:ml-[2.41rem] xl:ml-[10.41rem] xl:text-[1.75rem] xl:tracking-[0.3rem] xl:gap-[1.75rem]`}
                >
                    <span className="font-bold text-white/25">01</span>
                    Pick your destination
                </h1>

                <DestinationSwiper />
            </main>
        </>
    );
}
