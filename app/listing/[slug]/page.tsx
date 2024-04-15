import { groq } from 'next-sanity';
import { client } from '../../lib/createClient';
import Container from '../../components/Container/Container';
import { PortableText } from '@portabletext/react';
import { RichText } from '../../components/RichText/RichText';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

export const generateStaticParams = async () => {
  const query = groq`*[_type == 'property']{
    'slug': slug.current
  }`;
  const slugs: { slug: string }[] = await client.fetch(query);
  const slugRoutes = slugs.map((item) => item.slug);
  return slugRoutes.map((slug) => ({
    slug,
  }));
};

const ListingPostSlugPage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == 'property' && slug.current == $slug][0]{
    ...,
    body,
  }`;
  const property = await client.fetch(query, { slug });

  return (
    <Container className="mt-24 my-10">
      <div className="p-4">
        <PortableText value={property?.body} components={RichText} />
      </div>
    </Container>
  );
};

export default ListingPostSlugPage;
