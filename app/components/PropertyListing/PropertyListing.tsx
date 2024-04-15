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
    let query = groq`*[_type == 'property']`;
    let params: any = {};

    if (searchType) {
      query += groq` && propertyType == $propertyType`;
      params.propertyType = searchType;
    }
    if (searchLocation) {
      query += groq` && location == $location`;
      params.location = searchLocation;
    }

    const properties: Property[] = await client.fetch(query, params);
    setFilteredProperties(properties || []); // Ensure filteredProperties is always an array
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
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mt-8 p-4 bg-gray-100 rounded-md shadow-md transition duration-300">
        {/* Property Type dropdown */}
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="w-full md:w-auto border border-gray-300 rounded-md py-2 px-4"
        >
          <option value="">Property Type</option>
          <option value="House">House</option>
          <option value="Land">Land</option>
        </select>

        {/* Location dropdown */}
        <select
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          className="w-full md:w-auto border border-gray-300 rounded-md py-2 px-4"
        >
          <option value="">Location</option>
          <option value="Port Harcourt">Port Harcourt</option>
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
        </select>

        {/* Search button */}
        <button
          onClick={handleSearch}
          className="bg-primary text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Search
        </button>

        {/* View all property listings button */}
        <button
          onClick={() => {
            setSearchType('');
            setSearchLocation('');
            fetchProperties(); // Fetch all properties
          }}
          className="bg-primary text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          View All Property Listings
        </button>
      </div>

      {/* Property listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Display filteredProperties */}
        {currentProperties.map((property, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-4 transition duration-300"
          >
            {/* Property details */}
            <div className="relative w-full h-48 mb-4">
              <Image
                src={urlFor(property.propertyImage).url()}
                alt={property.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">{property.title}</h2>
            <p className="text-gray-600 mb-2">{property.location}</p>
            <p className="text-gray-600 mb-2">{property.propertySize}</p>
            <p className="text-gray-600 mb-2">${property.budget}</p>
            <p className="text-gray-600 mb-2">{property.description}</p>
            {/* View full details button */}
            <Link href={`/property/${property.slug?.current || ''}`}>
              <span className="bg-primary text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                View Full Details
              </span>
            </Link>
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
      <div className="flex justify-center mt-8 space-x-4">
        {/* Check out other services button */}
        <Link href="/services">
          <span className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded">
            Check out our other services
          </span>
        </Link>

        {/* Contact Us button */}
        <Link href="/contact">
          <span className="bg-primary text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Contact Us
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PropertyListing;
