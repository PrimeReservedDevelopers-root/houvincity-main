import Image, { StaticImageData } from "next/image";
import Founder_one from "@/public/images/about/image1.svg";
import Founder_two from "@/public/images/about/image2.svg";
import Founder_three from "@/public/images/about/image3.svg";
import About_section from "@/public/images/about/image4.svg";

interface Founder {
    image: StaticImageData;
    name: string;
    position: string;
}

const founders: Founder[] = [
    {
        image: Founder_three,
        name: "Emmanuel Hope. U.",
        position: "GMD/Founder"
    },
    {
        image: Founder_two,
        name: "Barr. Woryi Micheal. Onyema",
        position: "Co-founder"
    },
    {
        image: Founder_three,
        name: "Enoma Osawemwenma .J",
        position: "CO-founder"
    }
];

export default function Founders() {
    return (
        <div className=" ">
            {/* Founder section  */}
            <h1 className="mt-5 text-center text-4xl text-[#040A3B] font-bold">Founders</h1>
            <div className="lg:wrapper flex flex-col md:flex-row justify-between items-center gap-10 md:gap-2 lg:gap-10 p-10  mb-[5rem] ">
                {founders.map((founder, index) => (
                    <div className="card bg-base-100 shadow-xl" key={index}>
                        <figure>
                            <Image
                                src={founder.image}
                                alt={founder.name}
                                width={400}
                            />
                        </figure>
                        <div className="card-body text-center py-6">
                            <h2 className="card-title space-y-4 text-[#040A3B]">{founder.name}</h2>
                            <p className="text-1xl text-[#79747E]  font-extralight">({founder.position})</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* About Section  */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center md:mx-8">
                <section className="md:px-10 md:py-5 text-white bg-customSecondary lg:w-6/12 w-[100%]">
                    <section className="p-5">
                        <h2 className="mb-5 text-2xl">Discover our work ethics</h2>
                        <h1 className="text-4xl mb-5">About Our Company</h1>
                        <p>We are a group of real estate engineers with the core value of satisfying our clients needs and desires. We set out principles and work towards the improvements, both for us as a company and to our clients, their satisfaction is our utmost priority
                        </p>
                    </section>

                    <section className="mb-5 p-5">
                        <h3 className="mb-5 text-2xl">Mission</h3>
                        <p>To be the leading real estate company that promotes the safety of clients’ investments through an automated property insurance system.
                        </p>
                    </section>
                    <section className="mb-5 p-5">
                        <h3 className="mb-5 text-2xl">Vision</h3>
                        <p>LTo revolutionize the real estate system of operation by introducing a viable system that eliminates fraud, property theft, or land grabbing through adequate safety measures, and building smart cities that meet international standards, in real estate and housing.
                        </p>
                    </section>
                    <section className="mb-5 p-5">
                        <h3 className="mb-5 text-2xl">Value</h3>
                        <p>Viability, Innovativeness, Credibility and Excellence (VICE)
                        </p>
                    </section>
                </section>
                <section className="">
                    <Image
                    className=""
                        src={About_section}
                        alt="About section"
                    />
                </section>
            </div>

            {/* Overview on our career  */}
            <div className="">
                <section className="text-center m-10 uppercase">
                    <h3 className=" text-xl md:text-3xl text-primary font pb-2">Overview on our career</h3>
                    <h1 className="text-[27px] md:text-5xl text-[#040A3B]">Discover quick facts</h1>
                </section>
                <hr className="border-solid border-1 border-primary" />
                <div className="flex flex-row md:items-center justify-evenly p-10 gap-5 md:gap-0">
                    <section className="text-center">
                        <div className="text-primary md:text-3xl text-lg  font-semibold">1</div>
                        <div className="text-[#040A3B] text-sm md:text-base font-semibold">Years of Experience</div>
                    </section>
                    <section className="text-center">
                        <div className="text-primary md:text-3xl text-lg font-semibold">12</div>
                        <div className="text-[#040A3B] text-sm md:text-base font-semibold mt-3 md:mt-0">Services</div>
                    </section>
                    <section className="text-center">
                        <div className="text-primary md:text-3xl text-lg font-semibold">80%</div>
                        <div className="text-[#040A3B] text-sm md:text-base font-semibold">Happy Clients</div>
                    </section>
                    <section className="text-center">
                        <div className="text-primary md:text-3xl text-lg font-semibold">3</div>
                        <div className="text-[#040A3B] text-sm md:text-base font-semibold">Skilled Agents</div>
                    </section>
                </div>
                <hr className="border-solid border-1 border-primary" />
            </div>
 
            {/* Buttons  */}
            <div className="flex flex-col md:flex-row mt-10 md:mt-0 mx-8 justify-center gap-3 md:mb-20 relative md:bottom-5">
                <button className="btn rounded-md bg-primary text-white py-4 px-5">Have a Question</button>
                <button className="btn rounded-md bg-[#040A3B] text-white py-4 px-6">Find Property</button>
            </div>
        </div>
    );
};