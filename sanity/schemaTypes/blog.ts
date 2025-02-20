import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        defineField({
            name: 'featured',
            type: 'boolean',
            title: 'Featured'
        }),
        defineField({
            name: 'promo',
            type: 'boolean',
            title: 'Promo'
        }),
        defineField({
            name: 'featuredImage',
            type: 'image',
            title: 'Featured Image',
            hidden: ({ parent }: { parent: { featured?: boolean } }) => !parent?.featured
        }),
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title of blog article'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug of your blog article',
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: 'titleImage',
            type: 'image',
            title: 'Title Image'
        }),
        defineField({
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description'
        }),
        defineField({
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'categories',
            type: 'array',
            title: 'Categories',
            of: [
                defineArrayMember({
                    type: 'string',
                    options: {
                        list: ['Mental Health', 'Lifestyle', 'Fitness', 'Relationships', 'Food', 'Medicine']
                    }
                })
            ]
        })
    ]
})
