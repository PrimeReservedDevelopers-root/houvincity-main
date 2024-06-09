import React from "react";
import Thick from "@/public/images/landingpage/Thick.svg";
import Image from "next/image";
import LuxuryHome from "@/public/images/banners/Union.svg";

function AboutProperty() {
  return (
    <div className="mx-6 md:mx-10 my-[5rem] flex flex-col md:flex-row gap-5 items-center justify-evenly">
      <div>
        <h1 className="font-semibold text-3xl text-customSecondary">
          Why Choose Us
        </h1>
        <div className="mt-5 md:w-[453px]  ">
          <div className="flex items-start gap-4">
            <Image src={Thick} alt="Thick" width={28} height={28} />
            <div className="">
              <h1 className="font-semibold text-xl md:text-2xl text-customSecondary">
                Best Prices
              </h1>
              <p className="font-medium text-sm text-customTextColor mt-2">
                Experience the luxury of affordability with our best prices on
                top-tier properties, making upscale living accessible to all, ur
                commitment to competitive prices ensures...
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 mt-5">
            <Image src={Thick} alt="Thick" width={28} height={28} />
            <div className="">
              <h1 className="font-semibold text-xl md:text-2xl text-customSecondary">
                High Quality Properties
              </h1>
              <p className="font-medium text-sm text-customTextColor mt-2">
                Experience the luxury of affordability with our best prices on
                top-tier properties, making upscale living accessible to all, ur
                commitment to competitive prices ensures...
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 mt-5">
            <Image src={Thick} alt="Thick" width={28} height={28} />
            <div className="">
              <h1 className="font-semibold text-xl md:text-2xl text-customSecondary">
                Local Market Insight
              </h1>
              <p className="font-medium text-sm text-customTextColor mt-2">
                Experience the luxury of affordability with our best prices on
                top-tier properties, making upscale living accessible to all, ur
                commitment to competitive prices ensures...
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 mt-5">
            <Image src={Thick} alt="Thick" width={28} height={28} />
            <div className="">
              <h1 className="font-semibold text-xl md:text-2xl text-customSecondary">
                Trusted Reputation
              </h1>
              <p className="font-medium text-sm text-customTextColor mt-2">
                Experience the luxury of affordability with our best prices on
                top-tier properties, making upscale living accessible to all, ur
                commitment to competitive prices ensures...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={LuxuryHome}
          alt="Luxury Home"
          width={407}
          height={390.39}
          style={{
            clipPath: "polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%)",
          }}
        />
      </div>
    </div>
  );
}

export default AboutProperty;
