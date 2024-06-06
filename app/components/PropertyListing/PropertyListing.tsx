'use client';
import { useState, useEffect } from 'react';
import { groq } from 'next-sanity';
import { urlFor, client } from '../../lib/createClient';
import Image from 'next/image';
import Link from 'next/link';
import { Property } from '../../../types';

const PropertyListing = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [searchType, setSearchType] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchSize, setSearchSize] = useState('');
  const [searchBudget, setSearchBudget] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage] = useState(6);

  useEffect(() => {
    // Fetch properties when component mounts
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    const query = groq`*[_type == 'property']`;
    const properties: Property[] = await client.fetch(query);
    setFilteredProperties(properties);
  };

  const handleSearch = async () => {
    let query = groq`*[_type == 'property'`;
    let params: any = {};

    if (searchType) {
      query += ` && propertyType == $propertyType`;
      params.propertyType = searchType;
    }
    if (searchLocation) {
      query += ` && location == $location`;
      params.location = searchLocation;
    }
    if (searchSize) {
      query += ` && propertySize == $propertySize`;
      params.propertySize = searchSize;
    }
    if (searchBudget) {
      query += ` && budget == $budget`;
      params.budget = searchBudget;
    }

    query += `]`;

    const properties: Property[] = await client.fetch(query, params);
    setFilteredProperties(properties || []); // Update filteredProperties based on search criteria
    setCurrentPage(1); // Reset to first page after search
  };

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto">
      {/* Filter section */}
      <div className="flex flex-col justify-center items-center -mt-[8rem] ">
        <div className="xl:w-[1019px]  lg:h-[117px] md:h-[90px] z-40 h-[80px] bg-white shadow-lg rounded-lg flex items-center justify-evenly gap-2 px-2">
          {/* Property Type dropdown */}
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="w-full md:w-auto border border-gray-300 text-xs rounded-md py-2 px-4"
          >
            <option value="">Property Type</option>
            <option value="House">House</option>
            <option value="Land">Land</option>
          </select>

          {/* Location dropdown */}
          <select
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            className="w-full md:w-auto border border-gray-300 rounded-md text-xs py-2 px-4"
          >
            <option value="">Location</option>
            <option value="Port Harcourt">Port Harcourt</option>
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
          </select>

          {/* Property Size Dropdown */}

          <select
            value={searchSize}
            onChange={(e) => setSearchSize(e.target.value)}
            className="w-full md:w-auto border border-gray-300 text-xs rounded-md py-2 px-4"
          >
            <option value="">Property Size</option>
            <option value="500m² - 5,000m²">500m² - 5,000m²</option>
            <option value="5,000m² - 10,000m²">5,000m² - 10,000m²</option>
            <option value="10,000m² - 20,000m²">10,000m² - 20,000m²</option>
          </select>

          {/* Budget Dropdown */}

          {/* Budget dropdown */}
          <select
            value={searchBudget}
            onChange={(e) => setSearchBudget(e.target.value)}
            className="w-full md:w-auto border border-gray-300 rounded-md text-xs py-2 px-4"
          >
            <option value="">Budget</option>
            <option value="₦(10 Million to 50 Million)">
              ₦(10 Million to 50 Million)
            </option>
            <option value="₦(50 Million to 100 Million)">
              ₦(50 Million to 100 Million)
            </option>
            <option value="₦(100 Million to 200 Million)">
              ₦(100 Million to 200 Million)
            </option>
          </select>
          {/* View all property listings button */}
          <button
            onClick={() => {
              setSearchType('');
              setSearchLocation('');
              setSearchSize('');
              setSearchBudget('');
              fetchProperties(); // Fetch all properties
            }}
            className="bg-primary text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            View All Property Listings
          </button>
        </div>
        {/* Search button */}
        <div
          className="flex gap-3 bg-primary xl:w-[175px] md:w-[120px] z-40  w-[100px] xl:h-[40px] md:h-[40px] h-[35px] transition duration-200 rounded-lg cursor-pointer items-center justify-center -mt-4 xl:-mt-5 md:-mt-5 "
          onClick={handleSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              fill="#fff"
              d="M11.063 9.75h-.692l-.245-.236A5.662 5.662 0 0011.5 5.813 5.687 5.687 0 105.812 11.5a5.662 5.662 0 003.702-1.374l.236.245v.691l4.375 4.367 1.304-1.304-4.367-4.375zm-5.25 0a3.932 3.932 0 01-3.938-3.938 3.932 3.932 0 013.938-3.937A3.932 3.932 0 019.75 5.813 3.932 3.932 0 015.812 9.75z"
            ></path>
          </svg>
          <p className="xl:text-lg md:text-base text-white text-xs ">Search</p>
        </div>
      </div>

      {/* Property listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[5rem] ">
        {/* Display filteredProperties */}
        {currentProperties.map((property, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg transition duration-300  bg-base-100 shadow-xl rounded-b-md"
          >
            {/* Property details */}
            <div className="relative w-full h-60 mb-4">
              <Image
                src={urlFor(property.propertyImage).url()}
                alt={property.title}
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>

            <div className="card-body mx-5 mt-5">
              <div className="flex justify-between ">
                <p className="card-title text-sm text-primary font-semibold">
                  {property.title}
                </p>
                <div className="flex gap-1 items-center">
                  <div className="flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 50 50"
                    >
                      <path d="M5 10c-1.645 0-3 1.355-3 3v15.188c.004.062.016.125.031.187v.031c-.449.707-.816 1.461-1.094 2.282C.318 32.52.051 34.62 0 37v13h7v-4c0-.832.203-1.266.469-1.531C7.734 44.203 8.168 44 9 44h32c.832 0 1.266.203 1.531.469.266.265.469.699.469 1.531v4h7V38.156c.004-.05.004-.105 0-.156 0-.344.008-.668 0-1-.05-2.379-.316-4.48-.938-6.313a10.437 10.437 0 00-1.093-2.25c.02-.082.031-.164.031-.25V13c0-1.645-1.355-3-3-3zm0 2h40c.563 0 1 .438 1 1v13.156a13.11 13.11 0 00-3-1.844V20c0-.703-.46-1.25-.969-1.594-.508-.343-1.129-.582-1.906-.781C38.57 17.227 36.387 17 33.5 17s-5.07.227-6.625.625c-.758.195-1.375.418-1.875.75-.5-.332-1.117-.555-1.875-.75C21.57 17.227 19.387 17 16.5 17s-5.07.227-6.625.625c-.777.2-1.398.438-1.906.781C7.46 18.75 7 19.296 7 20v4.313a13.11 13.11 0 00-3 1.843V13c0-.563.438-1 1-1zm11.5 7c2.781 0 4.844.234 6.125.563.64.164 1.082.363 1.281.5.082.054.086.062.094.062V22c-6.574.043-11.441.535-15 1.625v-3.5c.008 0 .012-.008.094-.063.199-.136.64-.335 1.281-.5C11.656 19.235 13.719 19 16.5 19zm17 0c2.781 0 4.844.234 6.125.563.64.164 1.082.363 1.281.5.082.054.086.062.094.062v3.5c-3.559-1.09-8.426-1.582-15-1.625v-1.875c.008 0 .012-.008.094-.063.199-.136.64-.335 1.281-.5C28.656 19.235 30.719 19 33.5 19zm-8.688 5c.106.016.208.016.313 0h.094c10.008.016 15.789 1.063 18.875 3.188 1.554 1.07 2.496 2.398 3.093 4.156.52 1.531.731 3.418.782 5.656H2.03c.051-2.238.262-4.125.781-5.656.598-1.758 1.54-3.086 3.094-4.157 3.086-2.128 8.88-3.175 18.907-3.187zM2 39h46v9h-3v-2c0-1.168-.297-2.234-1.031-2.969C43.234 42.297 42.168 42 41 42H9c-1.168 0-2.234.297-2.969 1.031C5.297 43.766 5 44.832 5 46v2H2z"></path>
                    </svg>
                    <p className="text-xs ">3</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="10"
                      fill="none"
                      viewBox="0 0 12 10"
                    >
                      <path
                        fill="#040A3B"
                        d="M4.05 6c0-.275.248-.5.55-.5.303 0 .55.225.55.5s-.248.5-.55.5c-.302 0-.55-.225-.55-.5zm2.2.5c.303 0 .55-.225.55-.5s-.247-.5-.55-.5c-.303 0-.55.225-.55.5s.247.5.55.5zm1.65 0c.303 0 .55-.225.55-.5s-.247-.5-.55-.5c-.303 0-.55.225-.55.5s.248.5.55.5zM6.25 2.75c-.968 0-1.771.655-1.903 1.5h3.811a1.724 1.724 0 00-.648-1.071 2.053 2.053 0 00-1.26-.429zm0-.75C7.768 2 9 3.12 9 4.5V5H3.5v-.5C3.5 3.12 4.732 2 6.25 2zM4.6 8c.303 0 .55-.225.55-.5S4.902 7 4.6 7c-.302 0-.55.225-.55.5s.248.5.55.5zm1.65 0c.303 0 .55-.225.55-.5S6.553 7 6.25 7c-.303 0-.55.225-.55.5s.247.5.55.5zM7.9 8c.303 0 .55-.225.55-.5S8.203 7 7.9 7c-.303 0-.55.225-.55.5s.248.5.55.5zm2.75-7h-8.8v8h8.8V1zm0-1c.605 0 1.1.45 1.1 1v8c0 .55-.495 1-1.1 1h-8.8c-.605 0-1.1-.45-1.1-1V1c0-.55.495-1 1.1-1h8.8z"
                      ></path>
                    </svg>
                    <p className="text-xs ">4</p>
                  </div>
                  <p className="text-xs ">{property.propertySize}</p>
                </div>
              </div>
              <p className="text-sm font-medium mt-4">{property.location}</p>

              <div className="mt-2 flex justify-between">
                <p className="text-black font-semibold ">{property.budget}</p>
                {/* <p className="text-gray-600 mb-2">{property.description}</p> */}
                {/* <Link href={`/listing/${property.slug?.current}`}>
                  <button className="text-white bg-primary text-base px-3 py-2 -mr-5 rounded-br-md">
                    View Full Details
                  </button>
                </Link> */}

                <Link
                  href={
                    property.propertyType === 'Land'
                      ? `/listingLand/${property.slug?.current}`
                      : `/listing/${property.slug?.current}`
                  }
                >
                  <button className="text-white bg-primary text-base px-3 py-2 -mr-5 rounded-br-md">
                    View Full Details
                  </button>
                </Link>
              </div>
            </div>

            {/* View full details button */}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-4">
        {Array.from({
          length: Math.ceil(filteredProperties.length / propertiesPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* No results message */}
      {filteredProperties.length === 0 && (
        <div className="text-center mt-8">
          <p>
            Did not find something? Use the search filter above or check back
            later as we are constantly adding new properties.
          </p>
        </div>
      )}

      {/* Other buttons */}
      <div className="flex  justify-center items-center gap-[4rem] my-[7rem] ">
        {/* Check out other services button */}
        <Link href="/services">
          <button className="w-[150px] md:w-[250px] lg:w-[353px] h-[83px] border-[1px] rounded-lg border-primary text-primary md:text-sm lg:text-base font-semibold bg-white hover:bg-primary hover:text-white">
            Check out our other services
          </button>
        </Link>

        {/* Contact Us button */}
        <Link href="/contact">
          <button className="w-[150px] md:w-[250px] lg:w-[353px] h-[83px] border-[1px] rounded-lg border-primary text-primary md:text-sm lg:text-base font-semibold bg-white hover:bg-primary hover:text-white ">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyListing;
