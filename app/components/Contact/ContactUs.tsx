import React from "react";
import CommentIcon from "@/public/images/landingpage/comment.svg";
import HouseIcon from "@/public/images/landingpage/HouseIcon.svg";
import Image from "next/image";

function ContactUs() {
  return (
    <div className="py-[5rem] bg-[#FAFAFA]">
      <div className=" flex flex-col md:flex-row  gap-[4rem] justify-center items-center">
        <div className="w-[305px] md:w-[404px] h-[237px] md:h-[253px] bg-white px-6 flex flex-col justify-center items-center text-center border-[1px] border-customSecondary rounded-md shadow-lg transition duration-300 transform hover:scale-105">
          <Image src={CommentIcon} alt="Arrow Up" width={40} height={40} />
          <p className="font-medium text-lg my-4 ">Contact Us</p>
          <p className="text-sm w-[260px] ">
            Would you like to know more about our services? Let’s talk
          </p>
        </div>

        <div className="w-[305px] md:w-[404px] h-[237px] md:h-[253px] bg-white px-6 flex flex-col justify-center items-center text-center border-[1px] border-customSecondary rounded-md shadow-lg transition duration-300 transform hover:scale-105">
          <Image src={CommentIcon} alt="Arrow Up" width={40} height={40} />
          <p className="font-medium text-lg my-4">Buy Propertiess</p>
          <p className="text-sm w-[260px] ">
            Would you like to search our beautiful properties? Let’s explore
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
