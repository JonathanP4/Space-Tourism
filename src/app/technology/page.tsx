"use client";

import styles from "./page.module.css";
import data from "../../../data.json";

import TechnologyItem from "./components/TechnologyItem";
import TechnologyNav from "./components/TechnologyNav";

import { Barlow_Condensed } from "next/font/google";

import "swiper/css";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

const barlow_condensed = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["400"],
});

import { useState } from "react";

export default function Technology() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <title>Space Tourism | Technology</title>
            <main className={styles.main}>
                <div className="min-h-screen w-full max-w-[1275px] items-center flex pt-[160px] ml-auto justify-between relative">
                    <Swiper
                        onActiveIndexChange={(e) => setActiveIndex(e.realIndex)}
                        className={`${styles.swiper} max-w-[1130px] mr-[0!important]`}
                        spaceBetween={200}
                    >
                        <TechnologyNav index={activeIndex} />
                        <span slot="container-start">
                            <h1
                                className={`${barlow_condensed.className} uppercase`}
                            >
                                <span className={`font-bold opacity-25`}>
                                    03
                                </span>
                                Space launch 101
                            </h1>
                        </span>
                        {data.technology.map((t) => (
                            <SwiperSlide key={t.name}>
                                <TechnologyItem data={t} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </main>
        </>
    );
}
