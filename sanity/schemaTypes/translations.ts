import { defineType, Rule } from "sanity";

export default defineType({
    type: 'object',
    name: 'translations',

    fields: [
        {
            name: 'language',
            type: 'reference',
            title: 'Language',
            to: [{ type: 'language' }],
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'title_or_slug',
            type: 'string',
            title: 'Title Content/Slug',
            options: {
                list: [
                    { title: 'Title', value: 'title' },
                    { title: 'Slug', value: 'slug' },
                ],
                layout: 'radio',
            },
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'title_value',
            type: 'string',
            title: 'Title',
            hidden: ({ parent }: { parent: { title_or_slug: string } }) =>
                parent?.title_or_slug === 'slug',
            validation: (Rule: Rule) =>
                Rule.custom((value, context) => {
                    const parent = context?.parent as { title_or_slug: string };

                    if (parent?.title_or_slug === 'title' && !value) {
                        return 'Title is required when "Title" is selected.';
                    }

                    return true;
                }),
        },
        {
            name: 'slug_value',
            type: 'slug',
            title: 'Slug',
            hidden: ({ parent }: { parent: { title_or_slug: string } }) =>
                parent?.title_or_slug === 'title',
            validation: (Rule: Rule) =>
                Rule.custom((value: { current: string }, context) => {
                    const parent = context?.parent as { title_or_slug: string };

                    if (parent?.title_or_slug === 'slug' && !value?.current) {
                        return 'Slug is required when "Slug" is selected.';
                    }

                    return true;
                }),
        },
    ],
    preview: {
        select: {
            title: 'title_value',
            subTitle: 'language.title',
            slug: 'slug_value.current',
            titleOrSlug: 'title_or_slug',
        },
        prepare(selection: TranslationsPreview) {
            const { title, slug, titleOrSlug, subTitle } = selection;

            const displayTitle = titleOrSlug === 'slug' ? slug : title;

            return {
                title: displayTitle || 'Untitled',
                subtitle: subTitle || 'No language selected',
            };
        },
    },
});
