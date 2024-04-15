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
    <main className="pt-[6.46rem] md:pt-[7.3rem]">
      {/* Hero section */}
      <div
        className="relative flex h-96 items-center justify-center bg-cover bg-center px-4"
        style={{
          backgroundImage: "url('/images/banners/real estate blog 5.jpg')",
        }}
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
          {/* Text Content */}
          <h1 className="text-4xl font-bold text-white">Houvincity Blog</h1>
          <p className="text-xl my-6 px-8 text-center text-white md:max-w-2xl md:text-2xl">
            Get Updated!
          </p>
        </div>
      </div>
      <section className="relative w-full overflow-hidden bg-center bg-cover mt-14 md:mt-[6rem] py-4">
        <BlogContent posts={posts} />
      </section>
    </main>
  );
}
