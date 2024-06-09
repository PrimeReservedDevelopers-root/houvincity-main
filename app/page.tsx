import Hero from "./components/Hero";
import AboutProperty from "./components/LandingPage/AboutProperty";
import BlogHomePage from "./components/LandingPage/BlogHomePage";
import Card from "./components/LandingPage/Card";
import LiveTour from "./components/LandingPage/LiveTour";
import Review from "./components/LandingPage/Review";
import MailchimpNewsletter from "./components/NewsLetter/MailchimpNewsletter";
import Newsletter from "./components/NewsLetter/Newletter";
import { client } from "./lib/createClient";
import { groq } from "next-sanity";

export const revalidate = 30;
const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;

export default async function Home() {
  const posts = await client.fetch(query);

  return (
    <main>
      <Hero />

      {/* Discover Property */}
      <div className=" mx- flex justify-center my-[6rem] ">
        <div className="flex flex-col w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] text-center px-4 ">
          <h1 className="text-2xl font-medium">
            Effortless Property Dicovery, Just For You
          </h1>
          <p className="text-sm font-medium my-5 text-customTextColor leading-loose">
            Dive into a realm where walls and roofs transform into the backdrop
            of your unique story. Your next home is not just a space , it a
            canvas inviting you to paint the chapters of your life
          </p>

          <div className="flex justify-center">
            <div className="flex gap-5 justify-center bg-white drop-shadow-lg px-5 py-5 md:py-10 md:px-5">
              <button className=" w-[130px] md:w-[200px] px-2 py-2 md:py-3 md:px-[3.5rem] border-[1px] border-primary rounded-md text-xs text-primary ">
                Land
              </button>
              <button className="w-[130px] md:w-[200px] px-2 py-2 md:py-3 md:px-[3.5rem] bg-primary rounded-md text-xs text-white">
                Smart Homes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Land */}
      <Card />
      <AboutProperty />

      <BlogHomePage posts={posts} />
      <div>
        <h1 className="flex justify-center text-customSecondary text-2xl md:text-3xl mb-5 font-semibold">View Live Open Houses</h1>
        <LiveTour />
      </div>

      <Review />
      <MailchimpNewsletter />
    </main>
  );
}
