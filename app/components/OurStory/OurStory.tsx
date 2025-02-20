import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";

export default function OurStory() {
    return (
        <section className="our-story relative w-full mt-8 lg:mt-24 mb-12 lg:mb-24">
            <div className="our-story__container">
            <div className="our-story_container_info flex flex-wrap justify-between mb-12">
                    <div className="our-story_info xl:w-1/2">
                        <div className="heading_container">
                            <h2 className="font-regular uppercase text-xl lg:text-2xl text-stone-950 mb-8 lg:mb-0">
                                Our Story
                            </h2>
                        </div>
                        <div className="image_container flex flex-wrap lg:flex-nowrap justify-center xl:justify-start mb-8 lg:mb-12 xl:mb-0 lg:mt-12 xl:mt-24 gap-4">
                            <video className="w-full lg:w-1/2 xl:w-2/5 object-cover rounded-lg" autoPlay muted loop playsInline>
                                <source src="https://ae5ho4crkvmyptmy.public.blob.vercel-storage.com/COMPASS-1wOQ8SjCzMh8NRo1NyAo9iGTnNdYDQ.mp4" type="video/mp4" />
                            </video>
                            <Image 
                                src='/compass-ceo-headshot.jpg'
                                width={300}
                                height={400}
                                alt='Portrait photo of CEO'
                                className="w-full lg:w-1/2 xl:w-2/5 object-cover rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="featured_info xl:w-1/2 relative">
                        <h3 className="text-4xl lg:text-6xl font-medium uppercase text-pretty mb-4 lg:mb-12 text-stone-950">
                            Our Journey to Wellness: The Story Behind <span className="tracking-wide font-bold">COMPASS&reg;</span>
                        </h3>
                        <p className="text-md text-pretty text-stone-950 mb-8">
                            <span>COMPASS&reg;</span> was born from a desire to create a space where mindfulness, self-care, and personal growth come together. Founded in 2025 by Sophia Carter, a visionary from Los Angeles, California, <span>COMPASS&reg;</span> is more than just a wellness blog&mdash;it&rsquo;s a guide for those seeking balance in their everyday lives. With a passion for holistic well-being, we share insights, stories, and expert advice to inspire and empower our community. Whether it&rsquo;s through mindful practices, healthful living, or personal reflections, <span>COMPASS&reg;</span> is here to help you navigate your journey to a more fulfilling life.
                        </p>
                        <Button className="lg:absolute xl:bottom-0">
                            <Link href='/about' className="uppercase text-xs">
                                Discover More
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}