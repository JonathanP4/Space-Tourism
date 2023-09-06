"use client";

import data from "../../../data.json";
import styles from "./page.module.css";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Barlow_Condensed } from "next/font/google";

import CrewItem from "./components/CrewItem";
import CrewNav from "./components/CrewNav";

const barlow_condensed = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["400"],
});

import { useState } from "react";

export default function Crew() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <title>Space Tourism | Crew</title>
            <main className={styles.main}>
                <div
                    className={`${styles.swiperContainer} min-h-screen flex items-end`}
                >
                    <Swiper
                        onActiveIndexChange={(e) => setActiveIndex(e.realIndex)}
                        className={`max-w-[1138px] w-full`}
                        spaceBetween={200}
                    >
                        <span slot="container-start">
                            <h1
                                className={`${styles.title} ${barlow_condensed.className} text-[1.75rem] tracking-[0.29531rem] text-white uppercase inline-flex gap-6`}
                            >
                                <span className="font-bold opacity-25">02</span>
                                Meet your crew
                            </h1>
                        </span>
                        {data.crew.map((c) => (
                            <SwiperSlide key={c.name}>
                                <CrewItem data={c} />
                            </SwiperSlide>
                        ))}
                        <span slot="container-end">
                            <CrewNav index={activeIndex} />
                        </span>
                    </Swiper>
                </div>
            </main>
        </>
    );
}
