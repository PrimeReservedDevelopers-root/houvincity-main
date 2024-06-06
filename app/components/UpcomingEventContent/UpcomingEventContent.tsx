'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { urlFor } from '../../lib/createClient';
import { CiClock2 } from 'react-icons/ci';
import { UpcomingEvent } from '../../../types';
import { IoIosNotifications } from 'react-icons/io';

interface Props {
  events: UpcomingEvent[];
}

const UpcomingEventContent = ({ events }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const PAGE_SIZE = 4; // Number of events per page

  useEffect(() => {
    // Calculate total pages
    const totalPagesCount = Math.ceil(events.length / PAGE_SIZE);
    setTotalPages(totalPagesCount);
  }, [events]);

  // Pagination logic
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = currentPage * PAGE_SIZE;
  const displayedEvents = events.slice(startIndex, endIndex);

  return (
    <div className="grid grid-cols-1 gap-10 mt-20 xl:mx-10 justify-center mx-5">
      <div className="col-span-1">
        <h2 className="text-4xl font-bold mb-10 text-center lg:text-left p-2 md:pl-20">
          Upcoming Events
        </h2>
        {displayedEvents.map((event, idx) => (
          <div
            key={event._id}
            className="my-8 py-8 px-4 md:px-20 flex flex-col lg:flex-row bg-white rounded-lg shadow-md gap-8"
          >
            {/* Thumbnail */}
            <div className="relative rounded-lg overflow-hidden shadow-md w-full lg:w-1/3 h-64 lg:h-auto">
              <Image
                src={urlFor(event.thumbnail.asset).url()}
                alt={event.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* Event details */}
            <div className="flex flex-col justify-center gap-4 items-start w-full lg:w-2/3 py-4">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-center lg:text-left">
                  {event.title}
                </h3>
                <p className="text-sm text-black my-8 text-center lg:text-left">
                  {event.description}
                </p>
              </div>
              <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8">
                <button
                  onClick={() =>
                    document
                      .getElementById('mailchimpNewsletter')
                      ?.scrollIntoView({
                        behavior: 'smooth',
                      })
                  }
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-gray-600 transition duration-200"
                >
                  <IoIosNotifications className="w-4 h-4 mr-2" />
                  Remind Me
                </button>
                <div className="flex items-center rounded-lg border-primary border-2 px-4 py-2 justify-center">
                  <CiClock2 className="w-4 h-4 mr-2" />
                  <p className="text-sm text-black">
                    Date:{' '}
                    {new Date(event.date).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}{' '}
                    {new Date(event.date).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center w-full mt-10">
          {currentPage > 1 && (
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="mr-4 px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition duration-200"
            >
              Previous
            </button>
          )}
          <span className="flex items-center">{`Page ${currentPage} of ${totalPages}`}</span>
          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="ml-4 px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition duration-200"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventContent;
