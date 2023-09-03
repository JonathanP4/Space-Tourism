"use client";

import styles from "./page.module.css";
import data from "../../../data.json";

import { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import DestinationItem from "./components/DestinationItem";

import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

import "swiper/css";
import DestinationNav from "./components/DestinationNav";

const barlow_condensed = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["400"],
});

import { useState } from "react";

export const metadata: Metadata = {
    title: "Space Tourism | Destinations",
    description: "Site generated using Next.js 13",
};

export default function Destination() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <title>Space Tourism | Destination</title>
            <main className={styles.main}>
                <div className="min-h-screen items-center flex pt-[160px]">
                    <Swiper
                        onActiveIndexChange={(e) => setActiveIndex(e.realIndex)}
                        className="max-w-[1110.5px]"
                        spaceBetween={200}
                    >
                        <span slot="container-start">
                            <h1
                                className={`${barlow_condensed.className} uppercase mb-14`}
                            >
                                <span className={`font-bold opacity-025`}>
                                    01
                                </span>
                                Pick your destination
                            </h1>
                            <DestinationNav index={activeIndex} />
                        </span>
                        {data.destinations.map((d) => (
                            <SwiperSlide key={d.name}>
                                <DestinationItem data={d} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </main>
        </>
    );
}
