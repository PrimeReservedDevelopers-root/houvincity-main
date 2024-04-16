import { groq } from "next-sanity";
import { client } from "../../lib/createClient";
import Container from "../../components/Container/Container";
import Image from "next/image";
import Detail1 from "@/public/images/property/Detail1.svg";
import Detail2 from "@/public/images/property/Detail2.svg";
import Detail3 from "@/public/images/property/Detail3.svg";
import Detail4 from "@/public/images/property/Detail4.svg";
import Calendar from "@/public/images/property/Calendar2.svg";

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
    <Container className="p-4 mt-[3.9rem]">
      <div className="wrapper my-10">
        <div className="flex justify-center items-center">
          <Image src={Detail1} alt="House1" width={1500} height={100} />
        </div>
        <div className="grid grid-cols-3  gap-2 justify-center items-center mt-12 mx-auto">
          <Image src={Detail2} alt="House2" width={385} height={300} />
          <Image src={Detail3} alt="House3" width={385} height={300} />
          <Image src={Detail4} alt="House4" width={385} height={300} />
        </div>
        <div className="mt-10">
          <p className=" text-customSecondary text-base font-semibold border-b-[1px] lg:w-[50%] md:w-[60%] w-[75%] pb-5">
            13, North Dupe, Portharcourt
          </p>
          <p className=" text-customSecondary text-sm border-b-[1px] lg:w-[50%] md:w-[60%] w-[75%] py-6">
            Asking Price - N500,000 (Open for slight negotiation)
          </p>
          <p className=" text-customSecondary text-sm border-b-[1px] lg:w-[50%] md:w-[60%] w-[75%] py-6">
            Legal | Survey N50,000
          </p>
          <p className=" text-customSecondary text-sm border-b-[1px] lg:w-[50%] md:w-[60%] w-[75%] py-6">
            Plot Size - 1035sqft
          </p>
        </div>

        <p className="text-customTextColor text-base leading-loose my-10">
          Welcome to our three-bedroom luxury apartment, designed for comfort
          and style. The spacious living room, hardwood floors, and large
          windows create an inviting atmosphere. The bedrooms feature plush
          carpeting, ample storage, and the master bedroom includes an en-suite
          bathroom. The fully equipped kitchen boasts stainless steel appliances
          and granite countertops. A dedicated dining area complements the
          kitchen open layout. Modern fixtures and ample storage characterize
          the bathrooms. Enjoy private outdoor space on the balcony or patio.
          In-unit laundry facilities add convenience, and security is ensured
          with a secure entry system and surveillance cameras. Reserved parking
          is available. Residents have access to community amenities, including
          a fitness center and swimming pool. The apartment is pet-friendly,
          catering to a comfortable and luxurious lifestyle. Welcome home!
        </p>

        <div className="flex justify-center my-10">
          <div>
            <div className="video-responsive">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/P4eLCRqJ97s?si=ql8kficVRpn7k-11"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="xl:w-[1110px] lg:w-[900px] md:w-[600px] w-[100%]  h-[620px] "
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-20">
            <button className="flex gap-2 items-center px-6  py-5 bg-primary rounded-md ">
              <Image src={Calendar} alt="Calendar" width={13} height={13} />
              <p className="text-xs md:text-sm  font-semibold text-white">
                Contact Us For an Inspection Today
              </p>
            </button>
          </div>


        {/* <PortableText value={property?.body} components={RichText} /> */}
      </div>
    </Container>
  );
};

export default ListingPostSlugPage;
