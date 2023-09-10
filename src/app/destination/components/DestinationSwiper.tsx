"use client";

import data from "../../../../data.json";

import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper/modules";
import DestinationNav from "./DestinationNav";

const bellefair = Bellefair({ weight: ["400"], subsets: ["latin"] });
const barlow = Barlow({ weight: ["400"], subsets: ["latin"] });
const barlow_condensed = Barlow_Condensed({
    weight: ["400"],
    subsets: ["latin"],
});

export default function DestinationSwiper() {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    const [index, setIndex] = useState(0);
    return (
        <div className="mt-8 md:mt-[3.75rem] text-center xl:text-left xl:hidden">
            <Swiper
                spaceBetween={100}
                loop={true}
                modules={[Controller]}
                onSwiper={setFirstSwiper}
                onActiveIndexChange={(e) => setIndex(e.realIndex)}
                controller={{ control: secondSwiper }}
            >
                {data.destinations.map((d) => (
                    <SwiperSlide key={`${d.name}-image`}>
                        <Image
                            className="w-auto aspect-square m-auto md:w-[300px] xl:w-[445px]"
                            width={170}
                            height={170}
                            src={d.images.webp}
                            alt={d.name}
                            loading="eager"
                        />
                    </SwiperSlide>
                ))}
                <span className="xl:hidden">
                    <DestinationNav index={index} />
                </span>
            </Swiper>
            <Swiper
                spaceBetween={100}
                loop={true}
                modules={[Controller]}
                onSwiper={setSecondSwiper}
                onActiveIndexChange={(e) => setIndex(e.realIndex)}
                controller={{ control: firstSwiper }}
                className="max-w-[20.44rem] md:max-w-[35.8rem]"
            >
                <span className="hidden xl:inline-flex" slot="container-start">
                    <DestinationNav index={index} />
                </span>
                {data.destinations.map((d) => (
                    <SwiperSlide key={`${d.name}-text`}>
                        <article className="m-auto">
                            <section>
                                <h1
                                    className={`${bellefair.className} uppercase text-white text-[3.5rem] md:text-[5rem] xl:text-[6.25rem]`}
                                >
                                    {d.name}
                                </h1>
                                <p
                                    className={`${barlow.className} text-[0.94rem] text-light-purple md:text-base xl:text-lg`}
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
