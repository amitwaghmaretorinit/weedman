declare type Language = {
    _id: string; 
    _type: 'language'; 
    title: string; 
    _ref: string;
}

declare type Translations = {
    _type: 'translations'; // Object type
    language: Language;
    title_or_slug: 'title' | 'slug'; 
    title_value?: string; 
    slug_value?: {
        current: string; 
    };
}

declare type TranslationsPreview={
    title: string;
    subTitle: string;
    slug: string;
    titleOrSlug: 'title' | 'slug';
}