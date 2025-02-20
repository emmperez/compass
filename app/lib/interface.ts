import { PortableTextBlock } from '@portabletext/types'

export interface simpleBlogCard {
    title: string
    smallDescription: string
    currentSlug: string
    titleImage: { asset: { url: string } }
    categories: string[]
}

export interface blogArticle {
    title: string
    content: PortableTextBlock[]
    currentSlug: string
    titleImage: { asset: { url: string } }
}

export interface featuredArticle {
    title: string
    currentSlug: string
    featured: boolean
    featuredImage: {
        asset: {
            url: string
        }
    } | null
    categories: string[]
    smallDescription: string
}

export interface Testimonial {
    name: string
    location: string
    age: number
    quote: string
    image: { asset: { url: string } }
}