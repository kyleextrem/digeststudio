import { groq } from 'next-sanity';

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt
}`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  body
}`;

export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`;
