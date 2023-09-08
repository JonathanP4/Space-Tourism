"use client";

import Image from "next/image";
import styles from "./TechnologyItem.module.css";

import { Barlow, Bellefair, Barlow_Condensed } from "next/font/google";

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["400"],
});
const barlow_condensed = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["400"],
});
const bellefair = Bellefair({
    subsets: ["latin"],
    weight: ["400"],
});

export default function TechbologyItem({ data }: { data: Technology }) {
    return (
        <article className={`${styles.article}`}>
            <section className={`max-w-[458px] xl:max-w-[1130.5px]`}>
                <span
                    className={`${barlow_condensed.className} tracking-[2.7px] uppercase text-light-purple`}
                >
                    The terminology...
                </span>
                <h1 className={`${bellefair.className} uppercase`}>
                    {data.name}
                </h1>
                <p
                    className={`${barlow.className} xl:max-w-[444px] text-light-purple`}
                >
                    {data.description}
                </p>
            </section>
            <figure className="min-[1280px]:min-h-[527px] max-[1280px]:w-full grid">
                <Image
                    className="max-[1280px]:hidden"
                    width={515}
                    height={527}
                    src={data.images.portrait}
                    alt={data.name}
                    priority={true}
                    loading="eager"
                />
                <Image
                    className="hidden max-[1280px]:block w-full"
                    width={515}
                    height={527}
                    src={data.images.landscape}
                    alt={data.name}
                    priority={true}
                    loading="eager"
                />
            </figure>
        </article>
    );
}
