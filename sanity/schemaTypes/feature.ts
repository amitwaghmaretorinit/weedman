import { defineType } from "sanity";

export default defineType({
  name: "feature",
  title: "Service Features",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
    },
  ],
});
