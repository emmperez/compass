"use client"
import Link from "next/link"
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <nav className="w-11/12 relative flex items-center justify-start mx-auto py-5">
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="flex items-center justify-start">
                <Link href="/" className="font-bold text-xl tracking-wider text-stone-950 uppercase mx-1">
                    Compass&reg;
                </Link>
            </motion.div>
        </nav>
    )
}