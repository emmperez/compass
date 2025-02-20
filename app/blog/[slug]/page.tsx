import { notFound } from "next/navigation";
import { client } from "@/app/lib/sanity";
import { blogArticle } from "@/app/lib/interface";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Testimonials from "@/app/components/Testimonials/Testimonials";
import Footer from "@/app/components/Footer/Footer";    

export const revalidate = 30;

interface BlogPageProps {
  params: { slug: string };
}

async function getData(slug: string) {
    const query = `
        *[_type == 'blog' && slug.current == $slug][0] {
            "currentSlug": slug.current,
            title,
            content,
            titleImage
        }`;
    const data = await client.fetch(query, { slug });
    return data;
}

export default async function BlogArticle({ params }: BlogPageProps) {
    const data: blogArticle | null = await getData(params.slug);

    if (!data) {
        notFound(); // Trigger Next.js 404 page if data is null
    }

    return (
        <>
            <div className="my-5 w-full">
                <h1>
                    <span className="block text-base text-center text-primary font-semibold tracking-wide"></span>
                    <span className="mt-2 block text-3xl text-center text-primary font-bold tracking-tight">
                        {data.title}
                    </span>
                </h1>
                {data.titleImage && (
                    <Image 
                        src={urlFor(data.titleImage).url()} 
                        alt="Blog image" 
                        width={1080} 
                        height={800}
                        className="w-full max-h-[600px] rounded-lg object-cover mt-8 border" 
                    />
                )}
                <div className="mt-16 prose prose-md mx-auto">
                    <PortableText value={data.content} />
                </div>
            </div>
            <Testimonials />
            <Footer />
        </>
    );
}
