import { Metadata } from 'next'
import Blog from "./components/Blog/Blog"
import Hero from "./components/Hero/Hero"
import Featured from "./components/Featured/Featured"
import Promo from "./components/Promo/Promo"
import OurStory from "./components/OurStory/OurStory"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"

export const metadata: Metadata = {
  title: 'COMPASS® | Navigate Wellness & Growth',
  description: 'COMPASS® is your guide to mindfulness, productivity, and personal growth. Explore insights on mental clarity, healthy habits, and self-improvement.',
  openGraph: {
    title: 'COMPASS® | Navigate Wellness & Growth',
    description: 'Discover mindfulness, productivity tips, and personal growth insights with COMPASS®. Navigate life with clarity and purpose.',
    siteName: 'COMPASS®',
    images: [
      {
        url: '/og-image.jpg', // Ensure this image exists in your public directory
        width: 1200,
        height: 630,
        alt: 'COMPASS® | A Wellness and Growth Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COMPASS® | Navigate Wellness & Growth',
    description: 'Mindfulness, productivity, and self-improvement insights to help you live with clarity and purpose.',
    images: ['/og-image.jpg'],
  },
};


export default function Home() {

  return (
    <>
      <Hero />
      <Featured />
      <Blog />
      <Promo />
      <OurStory />
      <Testimonials />
      <Footer />
    </>
)}
