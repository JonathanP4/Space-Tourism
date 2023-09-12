"use client";

import data from "../../../../data.json";

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

export default function DestinationSwiper() {
    const [index, setIndex] = useState(0);
    return (
        <div className="mt-8 md:mt-[3.75rem] text-center xl:text-left xl:mt-24">
            <Swiper
                spaceBetween={100}
                loop={true}
                onActiveIndexChange={(e) => setIndex(e.realIndex)}
            >
                <span
                    slot="container-start"
                    className="flex justify-center absolute w-full top-[13.25rem] z-10 md:top-[22.06rem] xl:top-0 xl:relative"
                >
                    <div className="hidden xl:block w-[445px]"></div>
                    <DestinationNav index={index} />
                </span>
                {data.destinations.map((d) => (
                    <SwiperSlide key={d.name}>
                        <div className="grid gap-16 md:gap-[7.41rem] xl:flex xl:justify-center xl:items-center xl:gap-40">
                            <figure>
                                <Image
                                    className="w-auto aspect-square m-auto md:w-[300px] xl:w-[445px]"
                                    width={170}
                                    height={170}
                                    src={d.images.webp}
                                    alt={d.name}
                                    loading="eager"
                                />
                            </figure>
                            <article className="m-auto xl:m-0">
                                <section>
                                    <h1
                                        className={`${bellefair.className} uppercase text-white text-[3.5rem] md:text-[5rem] xl:text-[6.25rem]`}
                                    >
                                        {d.name}
                                    </h1>
                                    <p
                                        className={`${barlow.className} text-[0.94rem] text-light-purple max-w-[25rem] md:text-base xl:text-lg md:max-w-[35.8rem] xl:text-[1.125rem] xl:leading-8 xl:max-w-[27rem]`}
                                    >
                                        {d.description}
                                    </p>
                                </section>
                                <section className="border-t-[1px] border-t-dark-purple mt-8 uppercase grid items-center justify-center gap-8 md:flex md:pt-7 md:justify-evenly xl:justify-start xl:gap-20">
                                    <div className="mt-8 md:mt-0">
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
        </div>
    );
}
