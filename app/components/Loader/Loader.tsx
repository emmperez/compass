import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect, useState } from "react"
import SplitType from 'split-type'

export default function Loader() {
    const loaderImages = [
        {
            id: 1,
            src: "/arthur-edelmans-qfjuh4OLdxw-unsplash.jpg",
            alt: "Man using smith machine for shoulder press",
        },
        {
            id: 2,
            src: "/nanxi-wei-6wwWiD4EaXo-unsplash.jpg",
            alt: "Close up shot of berries",
        },
        {
            id: 3,
            src: "/the-chaffins-Bvx5TZYd1LA-unsplash.jpg",
            alt: "Couple standing in desert",
        },
        {
            id: 4,
            src: "/kike-vega-F2qh3yjz6Jk-unsplash.jpg",
            alt: "Woman in yoga pose",
        },
        {
            id: 5,
            src: "/chen-mizrach-jL6PTWI7h18-unsplash.jpg",
            alt: "Woman sitting on beach reading",
        },
        {
            id: 6,
            src: "/becca-lavin-dQrWTGi_atM-unsplash.jpg",
            alt: "Close up shot of green leaf",
        },
        {
            id: 7,
            src: "/solid-white.jpg",
            alt: "Solid white background"
        }

    ]
    const [count, setCount] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                const randomIncrement = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
                return (prevCount + randomIncrement <= 100) ? prevCount + randomIncrement : 100;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline()
        const text = new SplitType('#target', { types: 'chars' })
        const chars = text.chars

        tl.from(chars, {
            autoAlpha: 0,
            y: 100,
            duration: 1,
            stagger: 0.025,
            ease: 'power3.inOut'
        })

        tl.fromTo(".hero-images > img", {
            display: "none",
            clipPath: "polygon(100%, 0%, 100% 0%, 100% 100%, 100% 100%)"
        },
        {   
            display: "block",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.3,
            ease: "power4.inOut",
            stagger: 0.25,
            delay: 3,
        }, ">")
    })

    return (
        <section>
            <div className="loader bg-black w-screen h-screen mx-auto z-100 relative fixed overflow-hidden flex justify-center items-center p-[3em]">
                <div className="hero-images">
                    {loaderImages.map((image) => (
                        <Image 
                            key={image.id}
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="100vw"
                            priority={true}
                            className="image hidden absolute w-[100%] h-[100%] object-cover clip-path-[polygon(100%, 0%, 100% 0%, 100% 100%, 100% 100%)]"
                            style={{ transformOrigin: 'center' }}
                        />
                    ))}
                </div>
                <div className="logo-container absolute w-[100%] h-[100%] z-101 flex justify-center items-center gap-4">
                    <p className="count text-white text-xs xl:text-xl font-bold">{count}</p>
                    <div className="logo relative overflow-hidden">
                        <h1 className="text-white text-2xl xl:text-8xl" id="target"><span className="font-black">COMPASS</span>&reg;</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}