import MultilingualTitleInput from "@/components/MultilingualTitleInput"
import translations from "@/sanity/schemaTypes/translations"
import { defineField } from "sanity"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

// Your Sanity configuration
export const config = {
    projectId: projectId,
    dataset: dataset,
    baseUrl: 'http://localhost:3000/studio',
}

export const languageConfig={
    fields: [
        defineField(translations)
    ],
    components: {
        input: MultilingualTitleInput
    }
}