import { defineType } from "sanity";

export default defineType({
  name: 'program',
  type: 'document',
  title: 'Lawn Care Program',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Main heading of the section',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Detailed description or content below the title',
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
      description: 'Text displayed on the button',
    },
    {
      name: 'buttonLink',
      type: 'url',
      title: 'Button Link',
      description: 'Link for the button',
    },
  ],
})