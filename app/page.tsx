import Blog from "./components/Blog/Blog"
import Hero from "./components/Hero/Hero"
import Featured from "./components/Featured/Featured"
import Promo from "./components/Promo/Promo"
import OurStory from "./components/OurStory/OurStory"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"

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
