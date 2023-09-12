import DesktopTechSwiper from "./components/DesktopTechSwiper";
import TechnologySwiper from "./components/TechnologySwiper";
import styles from "./page.module.css";

import { Barlow_Condensed } from "next/font/google";

const barlow_condensed = Barlow_Condensed({
    weight: ["400"],
    subsets: ["latin"],
});

export default function Technology() {
    return (
        <>
            <title>Space Tourism | Technology</title>
            <div className={`${styles.technologyBg} bg`}></div>
            <main className="text-center md:text-left">
                <h1
                    className={`${barlow_condensed.className} text-white uppercase inline-flex gap-4 tracking-[0.17rem] md:text-[1.25rem] md:ml-[2.41rem] xl:mt-[5.25rem] xl:ml-[10.41rem]`}
                >
                    <span className="font-bold opacity-25">03</span>
                    Space launch 101
                </h1>
                <TechnologySwiper />
                <DesktopTechSwiper />
            </main>
        </>
    );
}
