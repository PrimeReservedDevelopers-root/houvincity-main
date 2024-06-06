import { groq } from 'next-sanity';
import { urlFor, client } from '../../lib/createClient';
import Container from '../../components/Container/Container';
import Image from 'next/image';
import Link from 'next/link';
import { Property } from '../../../types';
import { PortableText } from '@portabletext/react';
import { RichText } from '../../components/RichText/RichText';
import Calendar from '@/public/images/property/Calendar2.svg';

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

const HousePage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == 'property' && slug.current == $slug][0]{
    ...,
    body,
  }`;
  const property = await client.fetch(query, { slug });

  return (
    <Container className="p-4 mt-[3.9rem]">
      <div className="wrapper my-10">
        <div className="flex justify-center items-center">
          <Image
            src={urlFor(property.propertyImage).url()}
            alt="House1"
            width={1500}
            height={100}
          />
        </div>
        <div className="grid grid-cols-3  gap-2 justify-center items-center mt-12 mx-auto">
          <Image
            src={urlFor(property.propertyImageOne).url()}
            alt="House2"
            width={385}
            height={300}
          />
          <Image
            src={urlFor(property.propertyImageTwo).url()}
            alt="House3"
            width={385}
            height={300}
          />
          <Image
            src={urlFor(property.propertyImageThree).url()}
            alt="House4"
            width={385}
            height={300}
          />
        </div>
        <div className="mt-10">
          <p className=" text-customSecondary text-base font-semibold border-b-[1px] lg:w-[50%] md:w-[60%] w-[75%] pb-5">
            {property.description}
          </p>
          <p className=" text-customSecondary text-sm border-b-[1px] lg:w-[50%] md:w-[60%] w-[75%] py-6">
            {property.price}
          </p>
          <p className=" text-customSecondary text-sm border-b-[1px] lg:w-[50%] md:w-[60%] w-[75%] py-6">
            {property.legal}
          </p>
          <p className=" text-customSecondary text-sm border-b-[1px] lg:w-[50%] md:w-[60%] w-[75%] py-6">
            {property.currentPropertySize}
          </p>
        </div>

        {/* <p className="text-customTextColor text-base leading-loose my-10">
          {property.body}
        </p> */}

        <PortableText value={property?.body} components={RichText} />

        {property.promoVideo && (
          <div className="flex justify-center my-10">
            <div>
              <div className="video-responsive">
                <iframe
                  width="560"
                  height="315"
                  src={property.promoVideo}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="xl:w-[1110px] lg:w-[900px] md:w-[600px] w-[100%]  h-[620px] "
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center my-20">
          {property && property.virtualSiteUrl && (
            <Link href={property.virtualSiteUrl} target="_blank">
              <button className="flex gap-2 items-center px-6 py-5 bg-primary rounded-md">
                <Image src={Calendar} alt="Calendar" width={13} height={13} />
                <p className="text-xs md:text-sm font-semibold text-white">
                  Virtual Site Inspection | LIVE STREAM SCHEDULE
                </p>
              </button>
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
};

export default HousePage;
