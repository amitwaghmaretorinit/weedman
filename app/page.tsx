/* eslint-disable @typescript-eslint/no-explicit-any */

import { Sections } from '@/components/sections/section';
import { getPageData } from '@/sanity/lib/api';
import { notFound } from 'next/navigation';

const Page = async (props: any) => {
  const { params } = props;

  const { data } = await getPageData({ params })
  if (!data) {
    notFound()
  }
  return (
    
      <main>
        {/* <Sections
          documentId={data._id}
          documentType={data._type}
          sections={data.sections}
        /> */}
      </main>
  )
}


export const generateMetadata = async ({ params }: { params: any }) => {
  const { data } = await getPageData({ params });

  if (!data) {
    return {
      title: 'Page Not Found',
      description: 'The requested page does not exist.',
    };
  }
  return {
    title: data.title || 'My Next.js App',
    description: data.description || 'This is an example Next.js App using the App Router',
  };
}


export default Page