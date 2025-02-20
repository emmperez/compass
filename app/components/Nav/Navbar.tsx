import Link from "next/link"
export default function Navbar() {
    return (
        <nav className="w-11/12 relative flex items-center justify-start mx-auto py-5">
            <Link href="/" className="font-bold text-xl tracking-wider text-stone-950 uppercase mx-1">
                Compass&reg;
            </Link>
        </nav>
    )
}