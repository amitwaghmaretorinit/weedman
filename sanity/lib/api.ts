/* eslint-disable @typescript-eslint/no-explicit-any */
import { sanityFetch } from "./live";

export async function getPageData(params: any) {
  const query = `*[_type=="page"][0]{
  _id,
  _type,
}`;
  const data = (await sanityFetch({ query: query, params })).data;
  return {data};
}
