'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import BtnArrowIcon from '../Buttons/BtnArrowIcon';
import IconButtonHref from '../Buttons/IconButtonHref';
const getCurrentYear = () => {
  return new Date().getFullYear();
};

const FooterHome = () => {
  return (
    <footer className="relative z-10 bg-customSecondary pt-16 dark:bg-customDarkBg md:pt-20 lg:pt-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className=" ">
            {/* intro */}
            <div className=" pl-4">
              <div className="mb-12 lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  className="w-full dark:hidden"
                  width={140}
                  height={30}
                />
                <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  className="hidden w-full dark:block"
                  width={140}
                  height={30}
                />
                </Link>
                <p className="dark:text-white-dark mb-9 md:text-[14px] text-[14px] font-light leading-loose text-white px-4 w-[100%]  md:w-[100%] lg:w-[75%] mt-2">
                  Your Trusted Partner in Real Estate Excellence. Unlock your
                  dream home with our dedicated team, offering tailored
                  solutions for every property journey. From starter homes to
                  luxury estates, we&lsquo;re committed to making your real
                  estate experience seamless and rewarding.
                </p>
              </div>
              {/* Contact Us Section */}
              <div className="w-[100%] pl-4 mb-12 max-w-[95%] md:max-w-[85%] lg:mb-16 -mt-4">
                <div className="dark:text-white-dark mb-9 text-[14px] font-light leading-relaxed text-white">
                  <h1 className="text-[18px] ">Contact Us:</h1>
                  <p className="pt-3">Phone Number: +2348034652178</p>
                  <p className="py-2">
                    Address: 31C Rumuola Road by Rumuola Junction.
                  </p>
                  <p className="pt">Email: info@houvincityltd.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex md:space-x-[12rem] justify-between md:justify-normal px-8">
              <QuickLinks />
              <Services />
            </div>

            {/* Social Media Links */}
            <div className=" md:hidden border-t-[1px] "></div>
            <div className="flex md:-mt-6 md:ml-7 my-6 items-center  md:justify-normal justify-center gap-10 md:gap-0">
              <span className="md:text-[20px] text-[14px] text-white md:mr-10">
                Follow Us
              </span>
              <div className="flex md:space-x-14">
                <SocialLink
                  href="https://www.linkedin.com/company/primereserved"
                  image="/images/icons/ig-logo.svg"
                  alt="Instagram"
                />
                <SocialLink
                  href="https://www.instagram.com/primereservedtech"
                  image="/images/icons/ig-logo.svg"
                  alt="Instagram"
                />
                <SocialLink
                  href="https://www.facebook.com/groups/1554028415142497/"
                  image="/images/icons/fb-logo.svg"
                  alt="Facebook"
                />
                <SocialLink
                  href="https://www.youtube.com/@primereservedtech"
                  image="/images/icons/youtube-logo.svg"
                  alt="Youtube"
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" border-t-[1px] "></div>

        <Copyright />

        {/* Mobile */}
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ href: string; image: string; alt: string }> = ({
  href,
  image,
  alt,
}) => (
  <a
    href={href}
    aria-label="social-link"
    className="dark:text-white-dark mr-6 text-white duration-300 hover:text-primary dark:hover:text-primary"
  >
    <Image src={image} alt={alt} width={40} height={30} />
  </a>
);


const QuickLinks = () => (
  <div className="mb-12 lg:mb-16">
    <h2 className="mb-10 text-2xl font-semibold text-white dark:text-white">
      NAVIGATION
    </h2>
    <ul>
      <li>
        <Link
          href="/"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/property"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          Property
        </Link>
      </li>
      <li>
        <Link
          href="/services"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/blog"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          Blog
        </Link>
      </li>
    </ul>
  </div>
);

const Services = () => (
  <div className="mb-12 mr-4 lg:mb-16 lg:mr-2">
    <h2 className="mb-10 text-2xl font-semibold text-white dark:text-white">
      SUPPORT
    </h2>
    <ul>
      <li>
        <Link
          href="/services#webDevelopment"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          href="/faqs"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          FAQS
        </Link>
      </li>
      <li>
        <Link
          href="/privacy"
          className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
        >
          Privacy Policy
        </Link>
      </li>
    </ul>
  </div>
);

const Copyright = () => (
  <div className="items-center justify-center py-8 font-light flex">
    <p className=" text-[14px] md:text-base text-white dark:text-white">
      Copyright © {getCurrentYear()} PrimeReserved. All rights reserved.
    </p>
  </div>
);

export default FooterHome;














