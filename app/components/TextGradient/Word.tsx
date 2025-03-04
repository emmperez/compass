"use client"
import { useRef } from "react"
import { useScroll, motion, useTransform, MotionValue } from "framer-motion"

export default function Paragraph({ value }: { value: string }) {
    const element = useRef(null)
    const {scrollYProgress} = useScroll({
        target: element,
        offset: ["start 0.9", "start 0.25"]
    })

    const words = value.split(" ")

    return (
        <motion.p 
            className="text-[1rem] lg:text-[1.5rem] xl:text-[2rem] font-thin mx-auto text-pretty mb-8 xl:px-8 flex flex-wrap"
            ref={element }
            style={{opacity: scrollYProgress}}>
                {words.map((word, index) => {
                    const start = index / words.length;
                    const end = start + (1 / words.length);
                    return <Word key={index} range={[start, end]} progress={scrollYProgress}>{word}</Word>
                })}
        </motion.p>
    )
}

const Word = ({children, range, progress}: {children: React.ReactNode, range: number[], progress: MotionValue<number>}) => {
    const opacity = useTransform(progress, range, [0, 1])
    
    return (
        <span className="mr-[0.1rem] mt-[0.85rem] leading-none relative">
            <span className="absolute opacity-[0.3]">{children}</span>
            <motion.span className="mr-[0.35rem] mt-4 leading-none" style={{ opacity }}>{children}</motion.span>
        </span>
    )
}