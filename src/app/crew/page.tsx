import CrewSwiper from "./components/CrewSwiper";
import styles from "./page.module.css";

import { Barlow_Condensed } from "next/font/google";

const barlow_condensed = Barlow_Condensed({
    weight: ["400"],
    subsets: ["latin"],
});

export default function Crew() {
    return (
        <>
            <title>Space Tourism | Crew</title>
            <div className={`${styles.crewBg} bg`}></div>
            <main className="px-6 text-center md:text-left md:px-[2.41rem]">
                <h1
                    className={`${barlow_condensed.className} text-white tracking-[0.17rem] uppercase inline-flex gap-4 md:text-xl`}
                >
                    <span className="font-bold opacity-25">02</span>Meet your
                    crew
                </h1>

                <CrewSwiper />
            </main>
        </>
    );
}
