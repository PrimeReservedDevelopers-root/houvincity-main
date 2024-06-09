import { groq } from "next-sanity";
import { urlFor, client } from "../../lib/createClient";
import Container from "../../components/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { Property } from "../../../types";
import { PortableText } from "@portabletext/react";
import { RichText } from "../../components/RichText/RichText";
import { FiDownload } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import WithoutLiveChat from "@/app/components/EmbeddedLiveStream/WithoutLiveChat";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

export const generateStaticParams = async () => {
  const query = groq`*[_type == 'property' && propertyType == 'Land']{
    'slug': slug.current
  }`;
  const slugs: { slug: string }[] = await client.fetch(query);
  const slugRoutes = slugs.map((item) => item.slug);
  return slugRoutes.map((slug) => ({
    slug,
  }));
};

const LandPage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == 'property' && slug.current == $slug][0]{
    ...,
    plots[]
  }`;
  const property = await client.fetch(query, { slug });

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <Container className="p-4 mt-[3.9rem]">
      <div className="mx-4 my-10">
        <div className="flex justify-center items-center">
          <Image
            src={urlFor(property.propertyImage).url()}
            alt="Land"
            width={1500}
            height={100}
          />
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Select Plots to Purchase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {property.plots.map((plot: any, idx: number) => (
              <div key={idx} className="relative">
                {plot.purchased ? (
                  <div
                    className="border-2 p-4 rounded-lg border-red-500"
                    style={{ pointerEvents: "none" }}
                  >
                    <p className="font-semibold">{plot.size}</p>
                    <p className="text-lg">{plot.amount}</p>
                    <p className="text-sm text-red-500">Sold out</p>
                  </div>
                ) : (
                  <Link href={`/payments?amount=${plot.amount}`}>
                    <div className="border-2 p-4 rounded-lg border-primary cursor-pointer">
                      <p className="font-semibold">{plot.size}</p>
                      <p className="text-lg">{plot.amount}</p>
                      <p className="text-sm text-primary">Click to purchase</p>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center my-20">
          <Link
            href="/files/SILVER PARK_Subdivision-Model-1.pdf"
            target="_blank"
            download
          >
            <button className="border-primary border-[1px] hover:border-customSecondary hover:text-primary text-customSecondary font-medium text-sm shadow-sm px-10 py-3 rounded-md flex items-center gap-3">
              <FiDownload />
              Download Layout
            </button>
          </Link>
        </div>

        <div>
          <h1 className=" text-customSecondary font-medium text-2xl">
            About Property
          </h1>
          <p className="text-customTextColor text-sm leading-relaxed mt-6">
            Welcome to our three-bedroom luxury apartment, designed for comfort
            and style. The spacious living room, hardwood floors, and large
            windows create an inviting atmosphere. The bedrooms feature plush
            carpeting, ample storage, and the master bedroom includes an
            en-suite bathroom. The fully equipped kitchen boasts stainless steel
            appliances and granite countertops. A dedicated dining area
            complements the kitchen open layout. Modern fixtures and ample
            storage characterize the bathrooms. Enjoy private outdoor space on
            the balcony or patio. In-unit laundry facilities add convenience,
            and security is ensured with a secure entry system and surveillance
            cameras. Reserved parking is available. Residents have access to
            community amenities, including a fitness center and swimming pool.
            The apartment is pet-friendly, catering to a comfortable and
            luxurious lifestyle. Welcome home!
          </p>
          <WithoutLiveChat youtubeVideoId="8KEYibefoUw" />
          <div className="flex justify-center mt-16 ">
            <Link href="/contact">
              <button className="border-primary border-[1px] hover:border-customSecondary hover:text-primary text-customSecondary font-medium text-sm shadow-sm px-10 py-3 rounded-md flex items-center gap-3">
                <FaRegCalendarAlt />
                Contact Us For an Inspection Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LandPage;
