import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "@/app/lib/sanity";

async function getPromo() {
    const query = `
        *[_type == 'blog' && promo == true] | order(_createdAt desc) {
            title,
            smallDescription,
            "currrentSlug": slug.current,
            titleImage,
            promo
        }
    `;
    const data = await client.fetch(query);
    return data;
}

export default async function Promo() {
    const data = await getPromo();

    if (data.length === 0) {
        return <p>No promo articles available.</p>;
    }

    return (
        <section className="hero relative h-[75vh] w-full overflow-hidden rounded-xl mb-8">
            <Link href={`/blog/${data[0].currrentSlug}`}>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="relative h-[100vh] w-full transform translate-y-[-10%]">
                        <Image
                            src={urlFor(data[0].titleImage).url()}
                            width={1920}
                            height={1280}
                            alt="Five women standing on seashore"
                            priority={true}
                            className="absolute inset-0 h-full w-full object-cover scale-110 motion-safe:animate-parallax"
                        />
                    </div>
                </div>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-10 px-4 z-10 w-full lg:max-w-[60%] text-white">
                    <h1 className="text-4xl font-bold uppercase text-pretty sm:text-5xl lg:text-6xl lg:text-balanced">
                        {data[0].title}
                    </h1>                
                </div>
                <div className="absolute bottom-10 px-4 z-10 max-w-3xl">
                    <p className="mt-4 text-white text-lg text-pretty sm:text-xl">
                        {data[0].smallDescription}
                    </p>
                </div>
            </Link>
        </section>
    );
}
