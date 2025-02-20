'use client';
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "../../lib/interface";
import { urlFor } from "../../lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogClient({ posts }: { posts: simpleBlogCard[] }) {
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const loadMore = () => {
    setVisiblePosts(prev => prev + 3);
  };

  // Get unique categories from all posts
  const uniqueCategories = Array.from(new Set(
    posts.flatMap(post => post.categories || [])
  )).sort();

  // Filter posts based on selected category
  const filteredPosts = selectedCategory
    ? posts.filter(post => post.categories?.includes(selectedCategory))
    : posts;

  return (
    <section className="blog relative">
      <div className="blog_container flex flex-wrap justify-start align-center">
        <h3 className="text-stone-950 uppercase text-xl font-medium">Discover By Category</h3>
        <ul className="w-full mt-2 flex flex-wrap gap-2 xl:gap-4">
          <li>
            <Button 
              className={`bg-white text-stone-500 uppercase text-xs hover:bg-stone-100 
                ${!selectedCategory ? 'bg-stone-950 text-white hover:bg-stone-800' : ''}`}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
          </li>
          {uniqueCategories.map((category, idx) => (
            <li key={idx}>
              <Button 
                className={`bg-white text-stone-500 uppercase text-xs hover:bg-stone-100
                  ${selectedCategory === category ? 'bg-stone-950 text-white hover:bg-stone-800' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid_container flex justify-center flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-5 mb-5 gap-5">
          {filteredPosts.slice(0, visiblePosts).map((post, idx) => (
            <Card key={idx}>
              <Image 
                src={urlFor(post.titleImage).url()} 
                alt="Image"
                width={500}
                height={500}
                className="rounded-t-lg object-cover w-full"
              />
              <CardContent className="mt-5 flex flex-col h-[200px]">
                <div className="flex-grow">
                  <h3 className="text-lg line-clamp-2 mb-2">{post.title}</h3>
                  <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-300">{post.smallDescription}</p>
                </div>
                <Button asChild className="w-full mt-auto">
                  <Link href={`/blog/${post.currentSlug}`}>
                    Read More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="button_container w-full flex justify-center mt-8 mb-12 lg:mb-24">
          {visiblePosts < filteredPosts.length && (
            <Button 
              onClick={loadMore}
              className="w-[100px] bg-neutral-50 text-stone-900 border border-stone-900 rounded-sm uppercase px-8 py-4 text-xs hover:bg-stone-950 hover:text-neutral-50"
            >
              Show More
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}