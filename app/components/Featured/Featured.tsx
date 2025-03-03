import { client } from "../../lib/sanity";
import { featuredArticle } from "../../lib/interface"
import FeaturedClient from './FeaturedClient'; // Import the new Client component

async function getFeatured() {
    const query = `
        *[_type == 'blog'] | order(_createdAt desc) {
            title,
            "currentSlug" : slug.current,
            featured,
            featuredImage {
                asset -> {
                    url
                }
            },
            categories,
            smallDescription
        }
    `;

    const data = await client.fetch(query);

    return data;
}

export default async function Featured() {
    const data: featuredArticle[] = await getFeatured(); // Fetch data

    return <FeaturedClient articles={data} />; // Pass data to Client component
}




