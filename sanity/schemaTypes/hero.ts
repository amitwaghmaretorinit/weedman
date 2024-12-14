import { defineType } from "sanity";
import { languageConfig } from '@/lib/constants';

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  preview: {
    select: {
      title: 'mainHeading.translations[0].text',
    },
    prepare(selection) {
      return {
        title: selection.title || 'No Title',
      };
    },
  },
  fields: [
    {
      name: "mainHeading",
      title: "Main Heading",
      type: "object",
      validation: (Rule) => Rule.required(),
      ...languageConfig
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "object",
      ...languageConfig
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      name: "ctaButton",
      title: "CTA Button",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Button Text",
          type: "object",
          ...languageConfig
        },
        {
          name: "link",
          title: "Button Link",
          type: "url",
        },
      ],
    },
  ],
});
