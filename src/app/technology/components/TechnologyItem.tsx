import Image from "next/image";
import styles from "./TechnologyItem.module.css";

import { Barlow, Bellefair } from "next/font/google";

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["400"],
});
const bellefair = Bellefair({
    subsets: ["latin"],
    weight: ["400"],
});

export default function TechbologyItem({ data }: { data: Technology }) {
    return (
        <article className={styles.article}>
            <section className={`max-w-[1130.5px]`}>
                <h1 className={`${bellefair.className} uppercase`}>
                    {data.name}
                </h1>
                <p
                    className={`${barlow.className} max-w-[444px] text-light-purple`}
                >
                    {data.description}
                </p>
            </section>
            <figure className="min-h-[527px] grid">
                <Image
                    className="self-end"
                    width={515}
                    height={527}
                    style={{
                        width: "auto",
                        height: "auto",
                    }}
                    src={data.images.portrait}
                    alt={data.name}
                    priority={true}
                    loading="eager"
                />
            </figure>
        </article>
    );
}
