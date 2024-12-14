
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

// Your Sanity configuration
export const config = {
    projectId: projectId,
    dataset: dataset,
    baseUrl: 'http://localhost:3000/studio',
}