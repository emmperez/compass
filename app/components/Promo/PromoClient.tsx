"use client"
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import Link from "next/link";
import { Promo } from "@/app/lib/interface";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface PromoClientProps {
    promo: Promo[]; 
}

export default function PromoClient({ promo }: PromoClientProps) { 
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-350, 50]);

    if (promo.length === 0) {
        return <p>No promo articles available.</p>;
    }

    return (
        <section className="hero relative h-[75vh] w-full overflow-hidden rounded-xl mb-8">
            <Link href={`/blog/${promo[0].currentSlug}`}>
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div 
                        ref={ref}
                        style={{ y }}
                        className="relative h-[100vh] w-full transform translate-y-[-10%]">
                        <Image
                            src={urlFor(promo[0].titleImage.asset).url() || ''}
                            // width={1920}
                            // height={1280}
                            fill
                            alt="Five women standing on seashore"
                            priority={true}
                            className="absolute inset-0 h-full w-full object-cover scale-110 motion-safe:animate-parallax"
                        />
                    </motion.div>
                </div>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-10 px-4 z-10 w-full lg:max-w-[60%] text-white">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.3 } }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold uppercase text-pretty sm:text-5xl lg:text-6xl lg:text-balanced">
                        {promo[0].title}
                    </motion.h1>                
                </div>
                <div className="absolute bottom-10 px-4 z-10 max-w-3xl">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.3 } }}
                        viewport={{ once: true }}
                        className="mt-4 text-white text-lg text-pretty sm:text-xl">
                        {promo[0].smallDescription}
                    </motion.p>
                </div>
            </Link>
        </section>
    );
}
