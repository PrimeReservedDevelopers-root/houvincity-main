import React from "react";
import Founders from "../components/About/Founders";

const AboutPage = () => {
  return (
    <main className="pt-[6.46rem] md:pt-[7.3rem] mb-10">
      {/* Hero section */}
      <div
        className="relative flex h-96 items-center justify-center bg-cover bg-center px-4"
        style={{
          backgroundImage: "url('/images/about/Hero.svg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          {/* Text Content */}
          <h1 className="text-4xl font-bold text-white">About Us</h1>
          <p className="text-sm my-6 px-8 text-center text-white md:max-w-2xl md:text-sm">
          HOUVIN CITY LIMITED: Your Gateway to stress-free Real Estate Solutions
          </p>
        </div>
      </div>

      <Founders />
    </main>
  );
};

export default AboutPage;