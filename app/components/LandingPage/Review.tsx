import React from "react";
import ProfilePic from "@/public/images/banners/Ellipse 13.svg";
import Image from "next/image";
import StarFull from "@/public/images/landingpage/Star 1.svg";
import StarHalf from "@/public/images/landingpage/Star 2.svg";

function Review() {
  return (
    <div className="">
      <div className=" md:mx-10 mx-5 mb-[5rem] ">
        <h1 className="  text-customSecondary text-2xl md:text-3xl font-semibold mt-[7rem] mb-[4rem] flex justify-center">
          Customer Testimonies
        </h1>

        <div>
          <div  className="carousel-card">
            <div className=" text-sm lg:text-base flex flex-col text-secondBlack justify-center items-center text-center p-5 md:p-14 mb-10 shadow-lg rounded-2xl h-full  md:mx-[5rem] lg:mx-[10rem] xl:mx-[15rem]">
              <p>
                “I am privileged to have gotten my land through the agency of
                Houvincity Limited. It was indeed a seamless journey, from
                meeting Mr. Hope Uzodimma who educated and enlightened me on the
                importance of getting lands at locations where development would
                get to in a short time, places that share landmarks with
                Industries, schools, and major markets, to scheduling
                appointments and going for site inspection a couple of times, to
                finally making a good buying decision. He happens to know the
                ins and outs of the real estate industry and I leveraged his
                in-depth knowledge and experience.”
              </p>
              <Image
                src={ProfilePic}
                alt="Pic"
                width={120}
                height={120}
                className="pt-16 pb-5"
              />
              <p>Mr Agulonu Lawrence</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-[5rem] ">
          <button className="py-3 px-[3.5rem] border-[1px] border-primary rounded-md text-xs text-primary ">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review;
