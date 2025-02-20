import { defineField, defineType } from 'sanity'

export default defineType({ 
    name: 'testimonials',
    type: 'document',
    title: 'Testimonials',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name'
        }),
        defineField({
            name: 'location',
            type: 'string',
            title: 'Location'
        }),
        defineField({
            name: 'age', 
            type: 'number',
            title: 'Age'
        }),
        defineField({
            name: 'quote',
            type: 'text',
            title: 'Quote'
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image'
        })
    ]
})