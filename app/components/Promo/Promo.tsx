import { client } from "@/app/lib/sanity";
import PromoClient from "./PromoClient";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
        <PromoClient promo={data} />
    );
}
