import BlogClient from './BlogClient';
import { client } from "../../lib/sanity";
import { simpleBlogCard } from "../../lib/interface";

export const revalidate = 30;

async function getData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
        title,
        smallDescription,
        "currentSlug": slug.current,
        titleImage,
        categories
    }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Blog() {
  const data: simpleBlogCard[] = await getData();
  return <BlogClient posts={data} />;
}