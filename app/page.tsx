/* eslint-disable @typescript-eslint/no-explicit-any */

import { Sections } from '@/components/sections/section';
import { getPageData } from '@/sanity/lib/api';
import { notFound } from 'next/navigation';

export default async function Page(props: any) {
  const { params } = props;
  
  const { data } = await getPageData({  params })
  if (!data) {
    notFound()
  }
  return (
    <main>
      <Sections
        documentId={data._id}
        documentType={data._type}
        sections={data.sections}
      />
    </main>
  )
}