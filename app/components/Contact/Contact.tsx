"use client";

import { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";

function Contact() {
  return (
    <div className="md:my-[10rem] my-[8rem] ">
      <div className=" pb-10  md:pb-[5rem] flex-col justify-center items-center text-center">
        <h1 className="font-semibold text-[40px] ">Contact Us</h1>
        <p className="text-anotherGray">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const links = [
    {
      id: "1",
      logo: BiSolidPhoneCall,
      details: "+234 803 465 2178",
    },
    {
      id: "2",
      logo: MdMail,
      details: "info@houvincityltd.com",
    },
    {
      id: "3",
      logo: FaLocationDot,
      details: "31C Rumuola Road by Rumuola Junction",
    },
  ];

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:flex-row items-center justify-between  shadow-md rounded-lg p-2 mx-[1rem] md:mx-8  ">
        <section className="md:px-10 md:py-5 text-white bg-anotherBlack  w-[100%] rounded-lg h-[647px]  ">
          <section className=" lg:mb-5 p-5 flex flex-col justify-center items-center lg:justify-normal lg:items-start pt-6">
            <h3 className=" text-[25px] md:text-[38px] ">Contact Information</h3>
            <p className="text-[14px] md:text-base pt-1 ">Say something to start a chat!</p>
          </section>
          <div className="flex flex-col  justify-start  md:justify-center md:pt-10">
            {links.map((link) => (
              <section className="mb-5 p-5" key={link.id}>
                <div className="flex flex-col md:flex-row items-center gap-3  md:gap-10 ">
                  <link.logo className="md:text-lg  text-2xl"/>
                  <p className="xl:text-base lg:text-[15px] ">{link.details}</p>
                </div>
              </section>
            ))}
          </div>
          <div className="pt-10 md:pl-5 flex justify-center lg:justify-start  ">
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
        </section>
        <form  className="p-5">
          <div className="flex justify-between items-center gap-5 mt-10">
            <label htmlFor="event" className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>
              <input
                type="text"
                placeholder="Serina"
                className=" mt-5 outline-none border-b-[1px] w-full max-w-xs border-[#8D8D8D] "
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label htmlFor="event" className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Last Name</span>
              </div>
              <input
                type="text"
                placeholder="Doe"
                className="mt-5 outline-none border-b-[1px] w-full max-w-xs border-[#8D8D8D]"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>
          <div className="flex  justify-between items-center gap-5 mt-10">
            <label htmlFor="event" className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                placeholder="serinawill-i-am@gmail.com"
                className="mt-5 outline-none border-b-[1px] w-full max-w-xs border-[#8D8D8D]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="event" className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Phone Number</span>
              </div>
              <input
                type="text"
                placeholder="Wechie"
                className="mt-5 outline-none border-b-[1px] w-full max-w-xs border-[#8D8D8D]"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </label>
          </div>
          <div className="mt-10 w-[100%]">
          <label className="form-control  ">
            <div className="label">
              <span className="label-text">Message</span>
            </div>
            <textarea
              className="mt-3 outline-none border-b-[1px] border-[#8D8D8D] w-[100%]"
              placeholder="Bio"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>

          </div>
            <div className="flex justify-center mt-10  ">
              <button
                className="btn bg-primary text-white px-10 py-3 rounded-lg"
                type="submit"
              >
                Send message
              </button>
            </div>
        </form>
      </div>
    </>
  );
}

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
