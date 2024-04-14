import BlogContent from '../components/BlogContent/BlogContent';
import { client } from '../lib/createClient';
import { groq } from 'next-sanity';

export const revalidate = 30;
const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;

export default async function BlogPage() {
  const posts = await client.fetch(query);

  return (
    <main>
      <section className="relative w-full overflow-hidden bg-center bg-cover mt-20 md:mt-[7.3rem] py-20 md:py-28">
        <BlogContent posts={posts} />
      </section>
    </main>
  );
}
