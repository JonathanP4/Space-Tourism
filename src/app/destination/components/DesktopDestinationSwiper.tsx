"use client";

import data from "../../../../data.json";
import styles from "./DesktopDestinationSwiper.module.css";

import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import DestinationNav from "./DestinationNav";

const bellefair = Bellefair({ weight: ["400"], subsets: ["latin"] });
const barlow = Barlow({ weight: ["400"], subsets: ["latin"] });
const barlow_condensed = Barlow_Condensed({
    weight: ["400"],
    subsets: ["latin"],
});

export default function DesktopDestinationSwiper() {
    const [index, setIndex] = useState(0);

    return (
        <Swiper
            className={`${styles.swiper} hidden mt-[3.75rem] text-left xl:block`}
            spaceBetween={100}
            loop={true}
            onActiveIndexChange={(e) => setIndex(e.realIndex)}
        >
            <span slot="container-start">
                <div className="flex justify-evenly">
                    <div className="w-[445px]"></div>
                    <DestinationNav classname="w-[445px]" index={index} />
                </div>
            </span>
            {data.destinations.map((d) => (
                <SwiperSlide key={`${d.name}-image`}>
                    <div className="flex justify-evenly">
                        <Image
                            className="w-[445px] h-[445px]"
                            width={445}
                            height={445}
                            src={d.images.webp}
                            alt={d.name}
                            loading="eager"
                        />
                        <article className="max-w-[27.8rem]">
                            <section>
                                <h1
                                    className={`${bellefair.className} uppercase text-white text-[6.25rem]`}
                                >
                                    {d.name}
                                </h1>
                                <p
                                    className={`${barlow.className} text-light-purple text-lg`}
                                >
                                    {d.description}
                                </p>
                            </section>
                            <section className="border-t-[1px] border-t-dark-purple mt-8 pt-7 uppercase flex items-center justify-start gap-20">
                                <div>
                                    <span
                                        className={`${barlow_condensed.className} tracking-[0.15rem] text-[0.87rem]`}
                                    >
                                        Avg. distance
                                    </span>
                                    <p
                                        className={`${bellefair.className} text-[1.75rem]`}
                                    >
                                        {d.distance}
                                    </p>
                                </div>
                                <div>
                                    <span
                                        className={`${barlow_condensed.className} tracking-[0.15rem] text-[0.87rem]`}
                                    >
                                        Est. travel time
                                    </span>
                                    <p
                                        className={`${bellefair.className} text-[1.75rem]`}
                                    >
                                        {d.travel}
                                    </p>
                                </div>
                            </section>
                        </article>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
