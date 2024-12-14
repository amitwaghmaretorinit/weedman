import { languageConfig } from '@/lib/constants';
import { defineArrayMember, defineType } from 'sanity';

export default defineType({
    name: 'page',
    type: 'document',
    title: 'Page',
    preview: {
        select: {
            title: 'title.translations[0].text',
        },
        prepare(selection) {
            return {
                title: selection.title || 'No Title',
            };
        },
    },
    fields: [
        {
            name: 'title',
            type: 'object',
            title: 'Title',
             ...languageConfig
        },
        {
            name: 'slug',
            type: 'object',
            title: 'Slug',
            ...languageConfig
        },
        {
            name: 'path',
            type: 'slug',
            title: 'Path',
            validation: Rule => Rule.required(),
        },
        {
            name: 'sections',
            type: 'array',
            title: 'Page Sections',
            of: [
                defineArrayMember({ type: 'hero' }),
            ]
        }
    ],
});
