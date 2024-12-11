import { defineType } from "sanity";

export default defineType({
  name: "locationSection",
  title: "Location Section",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "statistics",
      title: "Statistics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "number",
              title: "Number",
              type: "number",
            },
            {
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "suffix",
              title: "Suffix",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "mapImage",
      title: "Map Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
});
