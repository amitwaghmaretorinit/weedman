/* eslint-disable @typescript-eslint/no-explicit-any */
import { sanityFetch } from "./live";


export const getSlugData = async (params: any) => {
  const { page, slug } = await params
  const query = `*[_type == "page" && path.current=="/${page}" ][0]{
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
  },

}`

  const data = (await sanityFetch({ query: query, params })).data;
  if(!data || !data.slug){
    return ({pageNotFound: true})
  }
  const selectedTitle = data.titles.find((i: any) => i.language_id === data.slug.language_id)

  return { data, selectedTitle };

}


export async function getPageData(params: any) {
  const query = `*[_type=="page"][0]{
  _id,
  _type,
  sections[]{
    ...
  }
}`;
  const data = (await sanityFetch({ query: query, params })).data;
  return { data };
}
