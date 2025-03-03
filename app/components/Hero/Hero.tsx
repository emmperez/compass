"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.section
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="hero relative h-[90vh] w-full overflow-hidden rounded-xl mb-8">
            <Image
                src="/wellness-hero-lotus.jpg"
                width={1920}
                height={1280}
                alt="Image of lotus flower in water"
                priority={true}
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="absolute bottom-10 px-4 z-10 max-w-2xl text-white">
                <h1 className="text-4xl font-bold sm:text-5xl lg:text-7xl lg:text-balanced">
                    Elevate Your Mind, Body, and Soul
                </h1>
                <p className="mt-4 text-lg sm:text-xl">
                    Discover expert insights, mindful practices, and wellness tips to help you thrive every day.
                </p>
                <div className="mt-6">
                    <Button asChild className="bg-white text-stone-950 hover:bg-gray-200 px-6 py-6 text-lg rounded-none">
                        <Link href="/about">Learn More</Link>
                    </Button>
                </div>
            </motion.div>
        </motion.section>
    );
}
