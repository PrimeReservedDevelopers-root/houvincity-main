import ServiceBox from "@/app/components/Contact/ServiceBox";
import { services, Services } from "@/app/components/Services/data/service"


function addSpaceAfterFourLines(content: string) {
  // Split the content into an array of lines
  const lines = content.split('\n');
  
  // Initialize an empty array to store modified lines
  const modifiedLines = [];

  // Loop through the lines array
  for (let i = 0; i < lines.length; i++) {
      // Add the current line to the modified lines array
      modifiedLines.push(lines[i]);

      // Check if the current line is a multiple of four (i.e., every fourth line)
      if ((i + 1) % 4 === 0 && i !== lines.length - 1) {
          // If so, add an empty line after the current line
          modifiedLines.push('');
      }
  }

  // Join the modified lines array back into a single string and return it
  return modifiedLines.join('\n');
}


const Page = ({ params }: { params: Services })  => {

    const { slug } = params;

    const service = services.find(service => service.slug === slug);
    if (!service) {
        return <div className="mx-auto">Service not found</div>;
    }

    const { title, hero, description } = service;
    console.log(title)

    const modifiedContent = addSpaceAfterFourLines(description)

    return (
      <main className="pt-[6.46rem] md:pt-[7.3rem]">
        <div
        className="relative flex h-96 items-center justify-center bg-cover bg-center px-4"
        style={{
          backgroundImage: `url(${service.image})`,
        }}
      >{title}</div>

        <div className="bg-[#FAFAFA] mb-10 h-20">
          <h3 className="pl-20 font-bold pt-5">Service: <span className="font-normal">{title}</span></h3>
        </div>

        <section className="px-20 pb-20 whitespace-normal text-justify subpixel-antialiased tracking-wide">
          { modifiedContent }
        </section>

        <ServiceBox />
      </main>
    );
  }

export default Page;