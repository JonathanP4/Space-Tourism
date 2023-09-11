// @ts-nocheck
"use client";

import data from "../../../../data.json";

import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper/modules";
import CrewNav from "./CrewNav";

const bellefair = Bellefair({ weight: ["400"], subsets: ["latin"] });
const barlow = Barlow({ weight: ["400"], subsets: ["latin"] });
const barlow_condensed = Barlow_Condensed({
    weight: ["400"],
    subsets: ["latin"],
});

export default function CrewSwiper() {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    const [index, setIndex] = useState(0);
    return (
        <div className="mt-8 md:mt-[3.75rem] text-center xl:text-left xl:hidden">
            <div className="md:flex md:flex-col-reverse">
                <div className="min-w-0">
                    <Swiper
                        spaceBetween={100}
                        loop={true}
                        modules={[Controller]}
                        onSwiper={setFirstSwiper}
                        onActiveIndexChange={(e) => setIndex(e.realIndex)}
                        controller={{ control: secondSwiper }}
                    >
                        <span
                            slot="container-start"
                            className="hidden md:block"
                        >
                            <CrewNav center={true} index={index} />
                        </span>
                        {data.crew.map((c) => (
                            <SwiperSlide
                                className="mb-8 md:mb-0 relative"
                                key={`${c.name}-image`}
                            >
                                <figure className="md:mt-10">
                                    <Image
                                        className="w-auto h-[223px] m-auto md:h-[532px]"
                                        width={177}
                                        height={223}
                                        src={c.images.png}
                                        alt={c.name}
                                        loading="eager"
                                    />
                                </figure>
                            </SwiperSlide>
                        ))}
                        <div className="absolute bottom-10 h-[1px] w-full bg-dark-purple z-10 md:bottom-0"></div>
                        <span className="md:hidden">
                            <CrewNav center={true} index={index} />
                        </span>
                    </Swiper>
                </div>
                <div className="min-w-0">
                    <Swiper
                        className="max-w-[20.44rem] md:max-w-[35.8rem] mt-8 md:mt-0 md:mb-8"
                        spaceBetween={100}
                        loop={true}
                        modules={[Controller]}
                        onSwiper={setSecondSwiper}
                        onActiveIndexChange={(e) => setIndex(e.realIndex)}
                        controller={{ control: firstSwiper }}
                    >
                        {data.crew.map((c) => (
                            <SwiperSlide key={`${c.name}-text`}>
                                <article className="text-white">
                                    <span
                                        className={`${bellefair.className} uppercase text-light-purple md:text-2xl`}
                                    >
                                        {c.role}
                                    </span>
                                    <h1
                                        className={`${bellefair.className} uppercase text-2xl mt-[0.5rem] md:text-[2.5rem]`}
                                    >
                                        {c.name}
                                    </h1>
                                    <p
                                        className={`${barlow.className} text-light-purple text-[0.94rem]leading-[1.56rem] mt-4 md:text-base`}
                                    >
                                        {c.bio}
                                    </p>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
