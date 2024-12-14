/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sections } from '@/components/sections/section'
import { config } from '@/lib/constants'
import { getSlugData } from '@/sanity/lib/api'
import { createDataAttribute } from '@sanity/visual-editing'
import { notFound } from 'next/navigation'
import React from 'react'

const Page = async ({ params }: { params: any }) => {
  const { selectedTitle, data, pageNotFound } = await getSlugData(params)
  if (pageNotFound) {
    return notFound()
  }
  return (
    <div
      data-sanity={createDataAttribute({
        ...config,
        id: data._id,
        type: data._type,
        path: 'page',
      }).toString()}
    >

      <main>
        <h1>
          {selectedTitle.text}
        </h1>
        <Sections
          documentId={data._id}
          documentType={data._type}
          sections={data.sections}
          languageRef={data.slug.language._ref}
        />
      </main>
    </div>
  )
}
export const generateMetadata = async ({ params }: { params: any }) => {
  const { selectedTitle, pageNotFound } = await getSlugData(params)
  if (pageNotFound) {
    return ({ title: 'Not Found' })
  }
  return {
    title: selectedTitle.text || params.slug
  }
}

export default Page