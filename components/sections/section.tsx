'use client'
import { createDataAttribute, useOptimistic } from '@sanity/visual-editing'
import type { SanityDocument } from '@sanity/client'
import Hero from '@/components/sections/hero'
import { config } from '@/lib/constants'

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
    languageRef?: string;
}

export function Sections({ documentId, documentType, sections: initialSections, languageRef }: SectionsProps) {
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
                        {section._type === "hero" && <Hero hero={section} languageRef={languageRef} />}
                    </div>

                )
            })}
        </div>
    )
}

