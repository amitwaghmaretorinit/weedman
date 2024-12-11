import { defineType } from "sanity";

export default defineType( {
    name: 'gallery',
    title: 'Image Gallery',
    type: 'document',
    fields: [
      {
        name: 'images',
        title: 'Gallery Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true
            },
            fields: [
              {
                name: 'caption',
                title: 'Caption',
                type: 'string'
              },
              {
                name: 'alt',
                title: 'Alt Text',
                type: 'string'
              }
            ]
          }
        ]
      }
    ]
  })