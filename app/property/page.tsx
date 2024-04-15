import PropertyListing from '../components/PropertyListing/PropertyListing';

const PropertyPage = () => {
  return (
    <main className="pt-[6.46rem] md:pt-[7.3rem]">
      {/* Hero section */}
      <div
        className="relative flex h-96 items-center justify-center bg-cover bg-center px-4"
        style={{
          backgroundImage: "url('/images/banners/real estate blog 3.jpg')",
        }}
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
          {/* Text Content */}
          <h1 className="text-4xl font-bold text-white">Property Listing</h1>
          <p className="text-md my-6 px-8 text-center text-white md:max-w-2xl md:text-2xl">
            Houvincity—Your Stress-free Real Estate Company!
          </p>
        </div>
      </div>

      {/* Property Listing section */}
      <section className="py-12 md:py-20">
        <PropertyListing />
      </section>
    </main>
  );
};

export default PropertyPage;
