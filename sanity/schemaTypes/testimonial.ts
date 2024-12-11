import { defineType } from "sanity";

export default defineType({
    name: 'testimonial',
    title: 'Customer Success Stories',
    type: 'document',
    fields: [
      {
        name: 'customerName',
        title: 'Customer Name',
        type: 'string'
      },
      {
        name: 'testimonialText',
        title: 'Testimonial Text',
        type: 'text'
      },
      {
        name: 'customerImage',
        title: 'Customer Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: Rule => Rule.min(1).max(5)
      }
    ]
  })