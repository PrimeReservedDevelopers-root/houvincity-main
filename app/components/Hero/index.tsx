import React from 'react';
import { BiRocket } from 'react-icons/bi';
import Image from 'next/image';
import BtnArrowIcon from '../Buttons/BtnArrowIcon';
import IconButtonHref from '../Buttons/IconButtonHref';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-center bg-cover mt-20 md:mt-[7.3rem] py-20 md:py-28">
      {/* Background Image */}
      <Image
        src="/images/banners/real estate blog 2.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-white relative z-10">
        <div className="max-w-2xl">
          {/* Heading */}
          <h1 className="mb-4 text-3xl font-extrabold md:text-4xl xl:text-5xl text-left">
            Unlock Your Dream
            <br />
            Home Now!
          </h1>
          {/* Paragraph */}
          <p className="mb-6 text-lg leading-relaxed md:text-xl text-left">
            PrimeReserved—Your Ultimate Destination for Outstanding Website
            Designs and Seamless Application Developments. Your satisfaction is
            our prime reserve!
          </p>
          {/* Contact Button */}
          <IconButtonHref
            text="Property listing"
            href="/property"
            icon={<BtnArrowIcon />}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
