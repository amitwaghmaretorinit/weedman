export const checkDuplicateLanguage = (translations: Array<Translations>) => {
    const languageIds = translations.map((translation: Translations) => translation.language?._ref);
    const hasDuplicates = new Set(languageIds).size !== languageIds.length;
    return hasDuplicates ? 'Duplicate languages are not allowed' : true;
}