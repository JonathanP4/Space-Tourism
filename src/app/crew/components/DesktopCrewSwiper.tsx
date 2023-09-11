"use client";

import data from "../../../../data.json";
import styles from "./DesktopCrewSwiper.module.css";

import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import CrewNav from "./CrewNav";

const bellefair = Bellefair({ weight: ["400"], subsets: ["latin"] });
const barlow = Barlow({ weight: ["400"], subsets: ["latin"] });
const barlow_condensed = Barlow_Condensed({
    weight: ["400"],
    subsets: ["latin"],
});

export default function DesktopCrewSwiper() {
    const [index, setIndex] = useState(0);

    return (
        <Swiper
            className={`${styles.swiper} hidden mt-[3.75rem] text-left xl:block max-w-[1138px]`}
            spaceBetween={200}
            loop={true}
            onActiveIndexChange={(e) => setIndex(e.realIndex)}
        >
            {data.crew.map((c) => (
                <SwiperSlide key={`${c.name}-image`}>
                    <div className="flex justify-between items-center">
                        <article>
                            <span
                                className={`${bellefair.className} uppercase text-light-purple text-[2rem]`}
                            >
                                {c.role}
                            </span>
                            <h1
                                className={`${bellefair.className} uppercase text-white text-[3.5rem]`}
                            >
                                {c.name}
                            </h1>
                            <p
                                className={`${barlow.className} text-light-purple text-lg leading-8 max-w-[27.75rem]`}
                            >
                                {c.bio}
                            </p>
                        </article>
                        <figure>
                            <Image
                                className="w-auto h-[650px]"
                                width={570}
                                height={712}
                                src={c.images.webp}
                                alt={c.name}
                                loading="eager"
                            />
                        </figure>
                    </div>
                </SwiperSlide>
            ))}
            <div className="relative bottom-[5.88rem] z-10">
                <CrewNav index={index} />
            </div>
        </Swiper>
    );
}
