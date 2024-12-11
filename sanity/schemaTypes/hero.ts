import { defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    {
      name: "mainHeading",
      title: "Main Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "text",
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
          type: "string",
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
