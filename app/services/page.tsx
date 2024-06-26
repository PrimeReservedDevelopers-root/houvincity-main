import React from "react";
import ContactUs from "../components/Contact/Contact";
import Service from "../components/Services/Services";
import CustomerTestimony from "../components/Services/CustomerTestimony";
import ServiceBox from "../components/Contact/ServiceBox";

const ServicesPage = () => {
  return (
    <main className="pt-[6.46rem] md:pt-[7.3rem]">
      {/* Hero section */}
      <div
        className="relative flex h-96 items-center justify-center bg-cover bg-center px-4"
        style={{
          backgroundImage: "url('/images/services/Hero Section.svg')",
        }}
      ></div>

      <Service />
      {/* <CustomerTestimony /> */}
      <ServiceBox />
    </main>
  );
};

export default ServicesPage;