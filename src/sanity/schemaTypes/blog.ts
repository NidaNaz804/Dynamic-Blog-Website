import {defineField, defineType} from 'sanity'

export const blog = defineType ({
    name: 'blog',
    title: 'Blog',
    type: 'document',

    fields: [
        defineField( {
          name: 'Title',
          type: 'string',
          title: 'Title'
        }),
        defineField({
            name: 'Paragraph',
            type: 'text',
            title: 'Paragraph'  
        }),

        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options:{
                source: 'Title'
            }  
        }),

        defineField({
            name: 'Image',
            type: 'image',
            title: 'image',
            options: {
                hotspot: true
            }  
        }),

        defineField({
            title: 'Block',
            name: 'block',
            type: 'array',
            of: [{type: 'block'}] 
        }),

    ]
})
