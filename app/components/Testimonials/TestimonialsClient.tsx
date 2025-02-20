'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { urlFor } from "../../lib/sanity";
import { Testimonial } from "../../lib/interface"
import { useState } from "react";



export default function TestimonialsClient({ testimonials }: { testimonials: Testimonial[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getNextTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    }

    const getPreviousTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    }


    return (
        <section className="testimonials">
            <div className="testimonials_container">
                <div className="testimonials_heading mb-12 lg:mb-24">
                    <h3 className="uppercase font-bold text-5xl text-center">
                        <span className="font-normal text-sm">
                            Testimonials <br />
                        </span>
                        Voices from the <br className="hidden lg:block"/><span>Compass&reg;</span> Community
                    </h3>
                </div>
                <div className="testimonials_images flex justify-center align-center gap-4 flex-wrap lg:flex-nowrap">
                   <div className="lg:hidden">
                    <div className="image_container w-[400px] xl:h-[400px] overflow-hidden">
                        <Image 
                            src={urlFor(testimonials[currentIndex].image).url()}
                            width={400}
                            height={400}
                            alt={`Headshot of ${testimonials[currentIndex].name}`}
                            className="object-cover rounded-lg"
                        />
                    </div>
                   </div>
                   <div className="hidden lg:flex justify-center align-center gap-4">
                    {testimonials.map((testimonial : Testimonial, idx : number) => (
                        <div className="image_container w-[400px] xl:h-[400px] overflow-hidden" key={idx}>
                            <Image 
                                src={urlFor(testimonial.image).url()}
                                width={400}
                                height={400}
                                alt={`Headshot of ${testimonial.name}`}
                                className="object-cover rounded-lg"
                            />
                        </div>
                    ))}
                   </div>
                </div>                
                <div className="testimonials flex flex-nowrap justify-center items-center text-center max-w-[1000px] mx-auto my-8">
                    <Button 
                        onClick={getPreviousTestimonial}
                        className="bg-white text-stone-900 hover:bg-stone-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                    </Button>
                    <div className="testimonials_quote">
                        <div className="svg_container w-[75px] mx-auto mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 290"><path d="M22.12 145v97.65h97.65V145H70.95c0-26.92 21.9-48.82 48.82-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65zm245.76-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65v97.65h97.65V145h-48.82c-.01-26.92 21.89-48.82 48.82-48.82z" fill="#e0e0e0"></path></svg>
                        </div>
                        <p className="mx-12 mb-4 lg:text-xl text-pretty">{testimonials[currentIndex].quote}</p>
                        <p className="text-lg text-stone-900 mb-12">— <span className="font-bold">{testimonials[currentIndex].name}</span>, {testimonials[currentIndex].age} ({testimonials[currentIndex].location})</p>
                    </div>
                    <Button 
                        onClick={getNextTestimonial}
                        className="bg-white text-stone-900 hover:bg-stone-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                    </Button>
                </div>
            </div>
        </section>
    )
}