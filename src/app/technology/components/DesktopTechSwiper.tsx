"use client";

import data from "../../../../data.json";
import styles from "./DesktopTechSwiper.module.css";

import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TechnologyNav from "./TechnologyNav";

import "swiper/css";

const barlow = Barlow({ weight: ["400"], subsets: ["latin"] });
const barlow_condensed = Barlow_Condensed({
    weight: ["400"],
    subsets: ["latin"],
});
const bellefair = Bellefair({ weight: ["400"], subsets: ["latin"] });

export default function DesktopTechSwiper() {
    const [index, setIndex] = useState(0);

    return (
        <div className={`${styles.swiper}`}>
            <Swiper
                loop={true}
                spaceBetween={200}
                onActiveIndexChange={(e) => setIndex(e.realIndex)}
                className="mt-[1.62rem]"
            >
                <span slot="container-start">
                    <TechnologyNav index={index} />
                </span>
                {data.technology.map((t) => (
                    <SwiperSlide key={t.name}>
                        <div className="flex items-center justify-end gap-[8rem] ml-[300px]">
                            <article className="text-white">
                                <span
                                    className={`${barlow_condensed.className} uppercase text-light-purple tracking-[0.15rem]`}
                                >
                                    The terminology...
                                </span>
                                <h1
                                    className={`${bellefair.className} my-4 uppercase text-[3.5rem]`}
                                >
                                    {t.name}
                                </h1>
                                <p
                                    className={`${barlow.className} text-[1.125rem] leading-[2rem text-light-purple max-w-[27rem]`}
                                >
                                    {t.description}
                                </p>
                            </article>
                            <figure>
                                <Image
                                    width={515}
                                    height={527}
                                    src={t.images.portrait}
                                    alt={t.name}
                                    loading={"eager"}
                                />
                            </figure>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
