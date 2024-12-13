'use client'
import { createDataAttribute, useOptimistic } from '@sanity/visual-editing'
import type { SanityDocument } from '@sanity/client'
import Hero from '@/components/sections/hero'

// Minimal type definitions
type PageSection = {
    _key: string
    _type: string
}

type PageData = {
    _id: string
    _type: string
    sections?: PageSection[]
}

type SectionsProps = {
    documentId: string
    documentType: string
    sections?: PageSection[]
}
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

// Your Sanity configuration
const config = {
    projectId: projectId,
    dataset: dataset,
    baseUrl: 'http://localhost:3000/studio',
}

export function Sections({ documentId, documentType, sections: initialSections }: SectionsProps) {
    const sections = useOptimistic<PageSection[] | undefined, SanityDocument<PageData>>(
        initialSections,
        (currentSections, action) => {
            if (action.id === documentId && action.document.sections) {
                return action.document.sections
            }
            return currentSections
        },
    )

    if (!sections?.length) {
        return null
    }

    return (
        <div
            data-sanity={createDataAttribute({
                ...config,
                id: documentId,
                type: documentType,
                path: 'sections',
            }).toString()}
        >
            {sections.map((section) => {
                return (
                    <div
                        key={section._key}
                        data-sanity={createDataAttribute({
                            ...config,
                            id: documentId,
                            type: documentType,
                            path: `sections[_key=="${section._key}"]`,
                        }).toString()}
                    >
                        {section._type === "hero" && <Hero hero={section} />}
                        </div>

                )
            })}
        </div>
    )
}

