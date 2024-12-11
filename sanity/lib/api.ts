import { sanityFetch } from "./live";

export async function getHomePageData() {
  const heroQuery = `*[_type == "hero"][0]{...,backgroundImage{
      asset->{
        url
      }
    }}`;
  const featuresQuery = `*[_type == "feature"]{...,icon{asset->{
        url
      }}}`;
    // const query = `{
    //   "hero": [_type == "hero"][0]{...,backgroundImage{
    //     asset->{
    //       url
    //     }
    //   }},
    //   "features": *[_type == "feature"] | order(order asc),
    //   "location": *[_type == "locationSection"][0],
    //   "testimonials": *[_type == "testimonial"],
    //   "resources": *[_type == "resourceCard"],
    //   "gallery": *[_type == "gallery"][0]
    // }`
    
  const hero = (await sanityFetch({query: heroQuery})).data;
  const features = (await sanityFetch({query: featuresQuery})).data;
  return { hero: hero, features };
}
