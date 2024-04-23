import Image from "next/image";
import Link from "next/link";
import { Services, services } from "./data/service";
import ArrowRight from "@/public/images/services/ArrowRight.svg";

export default function Service() {
  return (
    <main className="bg-[#FAFAFA] pb-10">
      <h1 className="py-10 text-center text-4xl text-primary font-bold border-primary underline">
        Our Services
      </h1>
      <div className="flex flex-wrap justify-center items-center mx-6 md:mx-0 space-y-8 ">
        {services
          .reduce((rows: Services[][], service: Services, index: number) => {
            if (index % 3 === 0) {
              rows.push([service]);
            } else {
              rows[rows.length - 1].push(service);
            }
            return rows;
          }, [])
          .map((row, rowIndex) => (
            <div
              className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 "
              key={rowIndex}
            >
              {row.map((service, index) => (
                <div
                  className="container card bg-base-100 shadow-x"
                  key={index}
                >
                  <figure>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                    />
                  </figure>
                  <Link href={`/services/${service.slug}`}>
                    <div className="py-5 justify-between hover:bg-primary hover:text-white shadow shadow-primary px-4">
                      <div className="flex justify-between">
                        <p className=" text-base md:text-sm lg:text-xl">{service.title}</p>
                        <Image
                          src={ArrowRight}
                          alt="Arrow Right"
                          width={10}
                          height={18}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
              {[...Array(3 - row.length)].map((_, index) => (
                <div key={row.length + index}>
                  <div className="card bg-base-100 shadow-xl"></div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </main>
  );
}
