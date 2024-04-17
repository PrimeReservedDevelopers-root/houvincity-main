import React from "react";
import ArrowUp from "@/public/images/landingpage/ArrowUp.svg";
import ArrowDown from "@/public/images/landingpage/ArrowDown.svg";
import Image from "next/image";
import ContactUs from "../components/Contact/ContactUs";

function page() {
  return (
    <div>
      <main className="pt-[6.46rem] md:pt-[7.3rem]">
        {/* Hero section */}
        <div
          className="relative flex h-96 items-center justify-center bg-cover bg-center px-4"
          style={{
            backgroundImage: "url('/images/landingpage/FaqHero.svg')",
          }}
        >
          {" "}
        </div>

        {/* Faqs Body section */}
        <section className="py-12 md:py-20 md:wrapper mx-[3rem]">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-semibold text-xl md:text-3xl text-customSecondary">
              Frequently Asked Questions
            </h1>
            <p className="text-sm font-medium md:my-5 my-3 text-customTextColor">
              Questions you might ask about our services
            </p>
          </div>

          <div className="flex justify-between items-start mt-[3rem] border-b-[1px] pb-[2rem] ">
            <div className=" w-[574px] ">
              <p className="md:font-semibold font-medium md:text-lg text-base text-customSecondary">
                What are your fears in making that real property investment
                move?
              </p>
              <p className="md:text-sm text-xs font-medium my-5 text-customTextColor">
                Embark on a technological voyage with PrimeReserved as we
                revolutionize web development landscapes. Our expertise lies in
                architecting robust online experiences, meticulously designed
                for the dynamic demands of industry leaders.
              </p>
            </div>
            <Image src={ArrowUp} alt="Arrow Up" width={40} height={40} />
          </div>

          <div className="border-b-[1px] py-[2rem] flex justify-between items-center">
            <p className="md:font-semibold font-medium md:text-lg text-base text-customSecondary ">
              What are you concerned about?
            </p>
            <Image src={ArrowDown} alt="Arrow Up" width={40} height={40} />
          </div>

          <div className="border-b-[1px] py-[2rem] flex justify-between items-center">
            <p className="md:font-semibold font-medium md:text-lg text-base text-customSecondary w-[237px] md:w-[570px]">
              Have you bought a property before and probably lost it because of
              some unforeseen circumstances?{" "}
            </p>
            <Image src={ArrowDown} alt="Arrow Up" width={40} height={40} />
          </div>

          <div className="border-b-[1px] py-[2rem] flex justify-between items-center">
            <p className="md:font-semibold font-medium md:text-lg text-base text-customSecondary w-[237px] md:w-[570px]">
              How do I know the property I want to buy is genuine?{" "}
            </p>
            <Image src={ArrowDown} alt="Arrow Up" width={40} height={40} />
          </div>

          <div className="border-b-[1px] py-[2rem] flex justify-between items-center">
            <p className="md:font-semibold font-medium md:text-lg text-base text-customSecondary w-[237px] md:w-[570px]">
              Fundamental steps to be taken during land or property acquisition?{" "}
            </p>
            <Image src={ArrowDown} alt="Arrow Up" width={40} height={40} />
          </div>

          <div className="border-b-[1px] py-[2rem] flex justify-between items-center">
            <p className="md:font-semibold font-medium md:text-lg text-base text-customSecondary w-[237px] md:w-[570px]">
              Can I trust my funds with a real estate broker?{" "}
            </p>
            <Image src={ArrowDown} alt="Arrow Up" width={40} height={40} />
          </div>
        </section>
        <div className=" my-10 mx-[3rem] w-[327px] md:w-[570px] ">
          <h1 className="font-semibold text-2xl  text-customSecondary">
            Still Have Questions?{" "}
          </h1>
          <p className="text-sm font-medium my-3 text-customTextColor">
            Can’t Find the answer you are looking for? Please contact us.{" "}
          </p>
        </div>
        <ContactUs/>
      </main>
    </div>
  );
}

export default page;
