import MultilingualTitleInput from '@/components/MultilingualTitleInput';
import { defineArrayMember, defineType } from 'sanity';

export default defineType({
    name: 'page',
    type: 'document',
    title: 'Page',
    preview: {
        select: {
            title: 'title.translations[0].text', // Example: Preview English title
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
            fields: [
                {
                    name: 'translations',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                { name: 'language', type: 'reference', to: [{ type: 'language' }] },
                                { name: 'text', type: 'string' }
                            ]
                        }
                    ]
                }
            ],
            components: {
                input: MultilingualTitleInput
            }
        },
        {
            name: 'slug',
            type: 'object',
            title: 'Slug',
            fields: [
                {
                    name: 'translations',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                { name: 'language', type: 'reference', to: [{ type: 'language' }] },
                                { name: 'text', type: 'string' }
                            ]
                        }
                    ]
                }
            ],
            components: {
                input: MultilingualTitleInput
            }
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
