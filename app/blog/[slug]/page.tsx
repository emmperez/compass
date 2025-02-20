import { client } from "@/app/lib/sanity";
import { blogArticle } from "@/app/lib/interface";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Testimonials from "@/app/components/Testimonials/Testimonials";
import Footer from "@/app/components/Footer/Footer";
import { notFound } from "next/navigation";

interface BlogPageParams {
  slug: string;
}

export const revalidate = 30;

async function getData(slug: string): Promise<blogArticle | null> {
  const query = `
    *[_type == 'blog' && slug.current == $slug][0] {
        "currentSlug": slug.current,
        title,
        content,
        titleImage
    }`;
  const data = await client.fetch<blogArticle | null>(query, { slug });
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: BlogPageParams;
}) {
  const data = await getData(params.slug);

  if (!data) {
    notFound();
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
