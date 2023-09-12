"use client";

import data from "../../../../data.json";

import { Bellefair, Barlow } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import CrewNav from "./CrewNav";

const bellefair = Bellefair({ weight: ["400"], subsets: ["latin"] });
const barlow = Barlow({ weight: ["400"], subsets: ["latin"] });

export default function CrewSwiper() {
    const [index, setIndex] = useState(0);
    return (
        <div className="mt-8 md:mt-[3.75rem] text-center xl:text-left">
            <Swiper
                spaceBetween={100}
                loop={true}
                onActiveIndexChange={(e) => setIndex(e.realIndex)}
                className="md:border-b-[1px] md:border-dark-purple xl:max-w-[1088px]"
            >
                <span
                    slot="container-start"
                    className="absolute top-[16rem] flex justify-center w-full md:top-[14rem] z-10 
                    xl:bottom-8 xl:block xl:top-[unset]"
                >
                    <div className="absolute bottom-10 h-[1px] w-full max-w-[28.6rem] bg-dark-purple md:hidden"></div>
                    <CrewNav index={index} />
                </span>
                {data.crew.map((c) => (
                    <SwiperSlide className="mb-8 md:mb-0 relative" key={c.name}>
                        <div className="grid gap-[4.7rem] md:gap-[5.63rem] items-end md:min-h-[815px] xl:min-h-0 xl:flex xl:items-center xl:justify-between xl:gap-0">
                            <figure className="md:order-2">
                                <Image
                                    className="w-auto h-[223px] m-auto md:h-[532px] xl:h-[607px]"
                                    width={177}
                                    height={223}
                                    src={c.images.webp}
                                    alt={c.name}
                                    loading="eager"
                                />
                            </figure>
                            <article className="text-white">
                                <span
                                    className={`${bellefair.className} uppercase text-light-purple md:text-2xl opacity-50 xl:text-[2rem]`}
                                >
                                    {c.role}
                                </span>
                                <h1
                                    className={`${bellefair.className} uppercase text-[1.5rem] mt-[0.5rem] md:text-[2.5rem] xl:text-[3.5rem]`}
                                >
                                    {c.name}
                                </h1>
                                <p
                                    className={`${barlow.className} max-w-[28.6rem] m-auto text-light-purple text-[0.94rem] leading-[1.56rem] mt-4 md:text-base xl:text-[1.125rem] xl:mx-0 xl:leading-8`}
                                >
                                    {c.bio}
                                </p>
                            </article>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
