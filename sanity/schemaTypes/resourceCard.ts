import { defineType } from "sanity";

export default defineType({
    name: 'resourceCard',
    title: 'Resource Cards',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url'
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Lawn Tips', value: 'lawnTips' },
            { title: 'Maintenance', value: 'maintenance' },
            { title: 'Care Guide', value: 'careGuide' }
          ]
        }
      }
    ]
  })