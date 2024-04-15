import { groq } from 'next-sanity';
import { Post } from '../../../types';
import { client, urlFor } from '../../lib/createClient';
import Container from '../../components/Container/Container';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { RichText } from '../../components/RichText/RichText';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

export const generateStaticParams = async () => {
  const query = groq`*[_type == 'post']{
        slug
    }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug?.current);
  return slugRoutes?.map((slug) => ({
    slug,
  }));
};

const SlugPage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == 'post' && slug.current == $slug][0]{
        ...,
        body,
        author->
    }`;
  const post: Post = await client.fetch(query, { slug });

  return (
    <Container className=" mt-24 my-10">
      <div className="p-4">
        <PortableText value={post?.body} components={RichText} />
      </div>
    </Container>
  );
};

export default SlugPage;
