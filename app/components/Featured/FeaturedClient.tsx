"use client"
import { featuredArticle } from "@/app/lib/interface";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";
import { motion } from "framer-motion";
interface FeaturedClientProps {
    articles: featuredArticle[];
}

export default function FeaturedClient({ articles }: FeaturedClientProps) {
    const featuredArticles = articles.filter((article) => article.featured === true); 

    if (featuredArticles.length === 0) {
        return <p>No featured articles available</p>;
    }

    return (
        <section className="featured relative w-full mt-8 lg:mt-24 mb-12 lg:mb-24">
            <div className="featured_container">
                <div className="featured_container_info flex flex-wrap justify-between mb-12 lg:gap-4 lg:flex-nowrap">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.3 } }}
                        viewport={{ once: true }}
                        className="featured_heading lg:w-1/2">
                        <h2 className="font-regular uppercase text-xl lg:text-2xl text-stone-950 mb-8 lg:mb-0">
                            <span className="tracking-wide font-bold">COMPASS&reg;</span> Featured Reads
                        </h2>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.3 } }}
                        viewport={{ once: true }}
                        className="featured_info lg:w-1/2">
                        <h3 className="text-4xl lg:text-6xl font-bold uppercase text-pretty mb-4 lg:mb-12 text-stone-950">
                            Navigate Your Path to Wellness
                        </h3>
                        <p className="text-md text-pretty text-stone-950">
                            Let <span>COMPASS&reg;</span> be your guide to a healthier, more balanced life. Explore expert insights on mindfulness, nutrition, movement, and mental well-being. Whether you&rsquo;re seeking daily inspiration or deep dives into holistic health, our curated articles will help you stay on course toward a lifestyle that nurtures both body and mind.
                        </p>
                    </motion.div>
                </div>
                <div className="featured_container_posts flex flex-wrap items-center gap-4 w-full lg:flex-nowrap relative">
                    {featuredArticles.map((article, idx) => (
                        <Link href={`/blog/${article.currentSlug}`} key={idx} className="w-full lg:w-1/2">  
                            <div key={idx} className="w-full relative">
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-all duration-300 rounded-lg z-10"></div>
                                <ul className="flex flex-wrap items-center gap-4 z-20 text-white text-sm pl-4 pt-4 absolute top-0 left-0 w-full pb-4">
                                    <motion.li 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.3 } }}
                                        viewport={{ once: true }}
                                        className="border border-white rounded-full px-4 py-1 z-10">
                                        {article.categories}
                                    </motion.li>
                                </ul>
                                <div className="w-full h-[500px] lg:h-[650px] relative">
                                    {article.featuredImage ? (
                                        <Image 
                                            src={urlFor(article.featuredImage).url()}
                                            alt={article.title}
                                            width={500}
                                            height={500}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                            No Image Available
                                        </div>
                                    )}
                                </div>
                                <div className="article_info absolute bottom-0 left-0">
                                    <h3 className="text-neutral-100 px-4 mb-4 text-2xl font-bold uppercase">{article.title}</h3>
                                    <p className="text-neutral-100 px-4 mb-4 text-sm text-pretty line-clamp-2">{article.smallDescription}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}