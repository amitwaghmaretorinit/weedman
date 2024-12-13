import { defineType } from "sanity"
import { checkDuplicateLanguage } from "../lib/utils";

export default defineType({
    name: 'page',
    type: 'document',
    title: 'Page',
    preview: {
        select: {
            title: 'title.title_translations.0.title_value',
        },
        prepare(selection) {
            return {
                title:  selection.title || "No Title",
            };
        }
    },
    fields: [
        {
            name: 'title',
            type: 'object',
            title: 'Title',
            validation: Rule => Rule.required(),
            fields: [
                {
                    name: 'title_translations',
                    type: 'array',
                    title: 'Title Translations',
                    of: [
                        {
                            type: 'translations',
                        },
                    ],
                    validation: Rule => Rule.custom(checkDuplicateLanguage),
                },
            ],
        },
        {
            name: 'slug',
            type: 'object',
            title: 'Slug',
            validation: Rule => Rule.required(),
            fields: [
                {
                    name: 'slug_translations',
                    type: 'array',
                    title: 'Slug Translations',
                    of: [
                        {
                            type: 'translations',
                        },
                    ],
                    validation: Rule => Rule.custom(checkDuplicateLanguage),
                },
            ],
        },
    ],
});
