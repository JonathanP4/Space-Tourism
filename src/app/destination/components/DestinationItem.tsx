import Image from "next/image";
import styles from "./DestinationItem.module.css";

import { Barlow_Condensed, Barlow, Bellefair } from "next/font/google";

const barlow_condensed = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["400"],
});
const barlow = Barlow({
    subsets: ["latin"],
    weight: ["400"],
});
const bellefair = Bellefair({
    subsets: ["latin"],
    weight: ["400"],
});

export default function DestinationItem({ data }: { data: Destination }) {
    return (
        <article className={styles.article}>
            <figure>
                <Image
                    width={445}
                    height={445}
                    src={data.images.png}
                    alt={data.name}
                    loading="eager"
                />
            </figure>
            <section>
                <h1 className={`${bellefair.className} uppercase`}>
                    {data.name}
                </h1>
                <p className={`${barlow.className} text-light-purple`}>
                    {data.description}
                </p>
                <div
                    className={`uppercase flex justify-between border-t-[1px] border-t-dark-purple mt-[3.9375rem]`}
                >
                    <div className={`grid mt-[1.8125rem]`}>
                        <span
                            className={`${barlow_condensed.className} text-[0.875rem] text-light-purple tracking-[0.14763rem]`}
                        >
                            Avg. distance
                        </span>
                        <span
                            className={`${bellefair.className} text-[1.75rem]`}
                        >
                            {data.distance}
                        </span>
                    </div>
                    <div className={`grid mt-[1.8125rem]`}>
                        <span
                            className={`${barlow_condensed.className} text-[0.875rem] text-light-purple tracking-[0.14763rem]`}
                        >
                            Est. travel time
                        </span>
                        <span
                            className={`${bellefair.className} text-[1.75rem]`}
                        >
                            {data.travel}
                        </span>
                    </div>
                </div>
            </section>
        </article>
    );
}
