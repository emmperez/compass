"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
    return (
        <motion.footer className="footer bg-stone-950 text-white px-4 py-8 rounded-lg mb-4"
            initial={{ y: 150, scale: 0.97}}
            whileInView={{ y: 0, scale: 1, transition: { duration: 1.3 } }}
            viewport={{ once: false }}
        >
            <div className="footer_container">
                <div className="head flex flex-wrap lg:flex-nowrap justify-between">
                    <div className="heading">
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1.3 } }}
                            viewport={{ once: true }}
                            className="text-5xl font-bold uppercase text-pretty max-w-[500px] mb-8">
                            Join Now and Stay in the Loop
                        </motion.h3>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.3 } }}
                        viewport={{ once: true }}
                        className="sign-up max-w-[450px]">
                        <p className="uppercase text-md mb-4">
                            Join Our Community for Exclusive Drops, Early Access, and Special Offers
                        </p>
                        <div className="flex w-full max-w-sm items-center border">
                            <Input 
                                type="email" 
                                placeholder="Email" 
                                className="border-none placeholder:text-white rounded-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                            <Button type="submit" className="bg-gray-950 text-white rounded-none hover:bg-stone-950 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </Button>
                        </div>
                    </motion.div>
                </div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.3 } }}
                    viewport={{ once: true }}
                    className="image_container w-full max-h-[600px] rounded overflow-hidden mt-12 lg:mt-24 mb-4 flex justify-center align-center">
                    <Image 
                        src="/footer-hero-image.jpg"
                        alt='Woman with arms extended'
                        width={1280}
                        height={1920}
                        className="object-cover w-full"
                    />
                </motion.div>
                <div className="links_container w-full flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap justify-start lg:justify-between">
                    <div className="copy text-xs lg:text-base mb-2 mr-2">&copy; 2025 COMPASS&reg;</div>
                    <div className="links text-xs lg:text-base mb-2">
                        <Link href="https://www.instagram.com/" target="_blank" className="mr-2 uppercase">Instagram</Link>
                        <Link href="/terms-and-conditions" className="mr-2 uppercase">Terms & Conditions</Link>
                        <Link href="/privacy-policy" className="mr-2 uppercase">Privacy Policy</Link>
                    </div>
                </div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1.3 } }}
                    viewport={{ once: true }}
                    className="logo w-full flex justify-center">
                    <span className="text-6xl mt-8 md:text-8xl lg:text-[160px] xl:text-[250px] tracking-wide font-bold">COMPASS&reg;</span>
                </motion.div>
            </div>
        </motion.footer>
    )
}