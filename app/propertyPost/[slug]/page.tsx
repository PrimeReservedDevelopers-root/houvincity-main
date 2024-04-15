import { groq } from 'next-sanity';
import { client, urlFor } from '../../lib/createClient';
import Container from '../../components/Container/Container';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
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
        slug
    }`;
  const slugs: { slug: string }[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug);
  return slugRoutes.map((slug) => ({
    slug,
  }));
};

const PropertyPostSlugPage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == 'property' && slug.current == $slug][0]{
        ...,
        body,
    }`;
  const property = await client.fetch(query, { slug });

  return (
    <Container className="px-4 py-8 md:py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-1">
          <div className="relative h-96 md:h-auto">
            <Image
              src={urlFor(property?.propertyImage).url()}
              width={500}
              height={500}
              alt="property image"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
        <div className="md:col-span-1 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {property?.title}
          </h1>
          <p className="text-lg text-gray-600 mb-2">{property?.location}</p>
          <p className="text-lg text-gray-600 mb-2">{property?.propertySize}</p>
          <p className="text-lg text-gray-600 mb-4">{property?.budget}</p>
          <Link href="#" passHref>
            <button className="bg-primary text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              View Full Details
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <PortableText value={property?.body} components={RichText} />
      </div>
    </Container>
  );
};

export default PropertyPostSlugPage;
