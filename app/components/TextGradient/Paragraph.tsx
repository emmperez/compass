"use client"
import { useRef } from "react"
import { useScroll, motion } from "framer-motion"

export default function Paragraph({ value }: { value: string }) {
    const element = useRef(null)
    const {scrollYProgress} = useScroll({
        target: element,
        offset: ["start 0.9", "start 0.25"]
    })



    return (
        <motion.p 
            className="text-[1rem] lg:text-[1.5rem] xl:text-[2rem] font-thin mx-auto text-pretty mb-8 xl:px-8"
            ref={element }
            style={{opacity: scrollYProgress}}>
                {value}
        </motion.p>
    )
}