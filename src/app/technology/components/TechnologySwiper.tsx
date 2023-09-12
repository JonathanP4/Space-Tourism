//@ts-nocheck

"use client";

import data from "../../../../data.json";

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

import { Controller } from "swiper/modules";

export default function TechnologySwiper() {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    const [index, setIndex] = useState(0);

    return (
        <div className="text-center xl:hidden">
            <Swiper
                modules={[Controller]}
                spaceBetween={200}
                onSwiper={setFirstSwiper}
                controller={{ control: secondSwiper }}
                loop={true}
                onActiveIndexChange={(e) => setIndex(e.realIndex)}
                className="mt-8 md:mt-[3.75rem]"
            >
                {data.technology.map((t) => (
                    <SwiperSlide key={t.name + "-image"}>
                        <div className="grid gap-[6.25rem]">
                            <figure>
                                <Image
                                    className="m-auto"
                                    width={768}
                                    height={310}
                                    src={t.images.landscape}
                                    alt={t.name}
                                    loading={"eager"}
                                />
                            </figure>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-center my-[1.62rem] md:my-[3.75rem]">
                <TechnologyNav index={index} />
            </div>
            <Swiper
                onActiveIndexChange={(e) => setIndex(e.realIndex)}
                loop={true}
                modules={[Controller]}
                onSwiper={setSecondSwiper}
                controller={{ control: firstSwiper }}
            >
                {data.technology.map((t) => (
                    <SwiperSlide key={t.name + "-text"}>
                        <article className="text-white">
                            <span
                                className={`${barlow_condensed.className} uppercase text-[0.87rem] text-light-purple tracking-[0.15rem] md:text-base`}
                            >
                                The terminology...
                            </span>
                            <h1
                                className={`${bellefair.className} my-4 uppercase text-[1.5rem] md:text-[2.5rem]`}
                            >
                                {t.name}
                            </h1>
                            <p
                                className={`${barlow.className} text-[0.94rem] leading-[1.56rem] text-light-purple max-w-[27rem] px-6 m-auto md:text-base md:px-0`}
                            >
                                {t.description}
                            </p>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
