import { client } from "../../lib/sanity";
import { Testimonial } from "../../lib/interface"
import TestimonialsClient from "./TestimonialsClient";

export const revalidate = 15;

async function getTestimonials() {
    const query = `
        *[_type == 'testimonials'] | order(_updatedAt asc) {
            name,
            location,
            age,
            quote,
            image
        }
    `
    const data = await client.fetch(query);

    return data;
}

export default async function Testimonials() {
    const data: Testimonial[] = await getTestimonials();
    return <TestimonialsClient testimonials={data} />
}