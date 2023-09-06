import Image from "next/image";
import styles from "./CrewItem.module.css";

import { Barlow, Bellefair } from "next/font/google";

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["400"],
});
const bellefair = Bellefair({
    subsets: ["latin"],
    weight: ["400"],
});

export default function CrewItem({ data }: { data: Crew }) {
    return (
        <article className={styles.article}>
            <section className={`max-w-[614.5px]`}>
                <span
                    className={`${bellefair.className} uppercase text-light-purple opacity-[0.5042]`}
                >
                    {data.role}
                </span>
                <h1 className={`${bellefair.className} uppercase`}>
                    {data.name}
                </h1>
                <p
                    className={`${barlow.className} max-w-[444px] text-light-purple`}
                >
                    {data.bio}
                </p>
            </section>
            <figure className="grid relative">
                <Image
                    className="self-end"
                    width={567}
                    height={712}
                    src={data.images.webp}
                    alt={data.name}
                    priority={true}
                    loading="eager"
                />
            </figure>
        </article>
    );
}
