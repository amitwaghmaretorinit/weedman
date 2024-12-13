import { defineType } from "sanity";

export default defineType({
  name: 'language',
  type: 'document',
  title: 'Language',
  fields: [{
    name: 'title',
    type: "string",
    validation: Rule => Rule.required(),

  }],
  preview: {
    select: {
      title: 'title',  // Select the title field to preview
    },
    prepare(selection) {
      return {
        title: selection.title || 'No Language',
      };
    },
  },
})