"use client";
import Image from "next/image"
import Cards from "./Cards"
import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import Word from "../components/TextGradient/Word"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function About() {
    const value = `Life doesn't come with a map, but with the right tools and perspectives, you can navigate it with confidence. We believe that everyone's path is unique, and our content is designed to meet you wherever you are on your journey. Whether you're looking for motivation, wellness tips, or just a fresh perspective, COMPASS® is here to guide you. Join us as we explore ways to live with purpose, cultivate well-being, and embrace every step of the journey.`
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".card") as HTMLElement[];

        ScrollTrigger.create({
            trigger: cards[0],
            start: "top 35%",
            endTrigger: cards[cards.length - 1],
            end: "top 30%",
            pin: ".intro",
            pinSpacing: false,
        })

        cards.forEach((card, idx) => {
            const isLastCard = idx === cards.length - 1;

            if (!isLastCard) {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top 35%",
                    endTrigger: ".outro",
                    end: "top 65%",
                    pin: true,
                    pinSpacing: false,
                })
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
    }, {scope: container})

    return (
        <div className="about" ref={container}>
            <section className="hero relative h-screen overflow-hidden w-11/12 mx-auto">
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-black/50 rounded-t-2xl"></div>
                    <div className="hero relative w-full h-full">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-[1200px] px-4 z-10">
                            <h1 className="z-10 text-white text-[3rem] xl:text-[10rem] font-bold">Find Your Way</h1>
                            <motion.p 
                                className="z-10 text-white text-[1rem] xl:text-[2rem] font-thin mt-2 max-w-[800px] mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.3 }}
                                viewport={{ once: true }}
                                >COMPASS&reg; is your guide to wellness, personal growth, and mindful living. Explore insights, stories, and practical advice to help you navigate life with clarity and purpose.
                            </motion.p>
                        </div>
                        <Image 
                        src="/narajiva-bnwt6jpBND4-unsplash.jpg" 
                        alt="Hero"
                        priority={true} 
                        fill
                        className="object-cover rounded-t-2xl" 
                        />
                    </div>
                    
                </div>
            </section>
            <section className="intro relative flex items-center px-[2em] xl:px-[4em] min-h-[100vh] mx-auto bg-[#fbc1d4] py-4">
                <motion.div className="intro_info mx-auto w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3, delay: 0.25 }}
                    viewport={{ once: true }}
                    >
                    <h2 className="text-[2rem] lg:text-[3rem] xl:text-[4rem] font-bold leading-none mb-4">Guiding You to Wellness and Growth</h2>
                    <p className="text-[1rem] lg:text-[1.5rem] xl:text-[2rem] font-thin mx-auto text-pretty mb-8">COMPASS&reg; is more than just a blog—it&rsquo;s a space for exploration, self-improvement, and meaningful conversations about wellness. We believe that health is more than just physical; it&rsquo;s a balance of mind, body, and soul. Our mission is to provide insightful content that helps you navigate life&rsquo;s journey with clarity and purpose. Whether you&rsquo;re seeking guidance on mental well-being, physical health, or personal development, COMPASS&reg; is here to point you in the right direction.</p>
                    <h2 className="text-[2rem] lg:text-[3rem] xl:text-[4rem] font-bold leading-none mb-4">Our Mission</h2>    
                    <p className="text-[1rem] lg:text-[1.5rem] xl:text-[2rem] font-thin mx-auto text-pretty mb-8">At COMPASS&reg;, our goal is to empower individuals to take charge of their wellness journey. We believe that small, intentional changes can lead to a more fulfilling and balanced life. Our content is designed to inspire, educate, and support you in making informed decisions about your health—mentally, physically, and emotionally. We strive to create a welcoming community where people from all walks of life can find practical advice, encouragement, and a sense of connection. No matter where you are in your journey, COMPASS&reg; is here to help you move forward with confidence.</p>
                    <h2 className="text-[2rem] lg:text-[3rem] xl:text-[4rem] font-bold leading-none mb-4">What You&rsquo;ll Find Here</h2>
                    <p className="text-[1rem] lg:text-[1.5rem] xl:text-[2rem] font-thin text-pretty">We cover a range of topics to help you lead a more mindful and fulfilling life:</p>
                </motion.div>               
            </section>
            <section className="cards relative">
                {Cards.map((card, idx) => (
                    <div className="card relative h-[300px] lg:min-h-[400px] lg:h-auto" key={`card-${idx}`}>
                        <div className="card-inner relative will-change-transform w-full h-full lg:min-h-[400px]  py-[2em] px-[2em] xl:px-[4em] flex lg:flex-row lg:gap-[4em] lg:justify-between lg:max-w-[1200px] xl:max-w-[100%] lg:mx-auto lg:py-[4em] xl:gap-[4em] flex-col xl:flex-row xl:justify-between" style={{ backgroundColor: card.backgroundColor }}>
                            <div className="card-content flex-1 xl:max-w-[60%]">
                                <h2 className="text-[2rem] xl:text-[4rem] font-bold mb-4 lg:mb-8 xl:mb-16 leading-none" style={{ color: card.textColor }}>{card.title}</h2>
                                <motion.p className="xl:text-xl text-pretty" style={{ color: card.textColor }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.3, delay: 0.25 }}
                                    viewport={{ once: true }}
                                >{card.description}</motion.p>
                            </div>
                            <motion.div className="card-img relative w-[30%] ratio-16/9 rounded-xl overflow-hidden"
                                initial={{ opacity: 0.75, y: 20, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 1.3, delay: 0.25 }}
                                viewport={{ once: true }}
                                >
                                <Image 
                                    src={card.image} 
                                    alt={card.title} 
                                    fill
                                    className="object-cover" 
                                />
                            </motion.div>
                        </div>
                    </div>
                ))}
            </section>
            <section className="outro relative w-full h-[75vh] lg:h-[100vh] flex items-center p-[2em] lg:p-[4em] xl:p-[8em] bg-white flex-wrap xl:flex-nowrap">
                <motion.h2 className="text-[2rem] lg:text-[3rem] xl:text-[4rem] font-bold leading-none mb-4 xl:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3, delay: 0.25 }}
                    viewport={{ once: true }}
                    >Why COMPASS&reg;?
                </motion.h2>
                <Word value={value} />
            </section>
        </div>
    );
}
