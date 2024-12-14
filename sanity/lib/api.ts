/* eslint-disable @typescript-eslint/no-explicit-any */
import { sanityFetch } from "./live";


export const getSlugData = async (params: any) => {
  const { page, slug } = await params
  const query = `*[_type == "page" && path.current=="/${page}" ][0]{
  sections[]{
  ...,
  "backgroundImageUrl": backgroundImage.asset->url,
  },
  _id,
  _type,
  "path": path.current,
  "titles": title.translations[]{
    "language":language->title,
    "language_id":language->_id,
    text,
  },
  "slug": slug.translations[text match "/${slug}"][0]{
    "language":language->title,
    "language_id":language->_id,
    text,
    language{
      _ref,
     }  
  },

}`

  const data = (await sanityFetch({ query: query, params })).data;
  console.log({data})
  if(!data || !data.slug){
    return ({pageNotFound: true})
  }
  const selectedTitle = data.titles.find((i: any) => i.language_id === data.slug.language_id)

  return { data, selectedTitle,slug };

}


export async function getPageData(params: any) {
  const query = `*[_type=="page"][0]{
  _id,
  _type,
  sections[]{
    ...,
    "backgroundImageUrl": backgroundImage.asset->url,

  }
}`;
  const data = (await sanityFetch({ query: query, params })).data;
  return { data };
}
