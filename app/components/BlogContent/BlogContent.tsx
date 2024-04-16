"use client";
import Link from "next/link";
import { Post } from "../../../types";
import { urlFor } from "../../lib/createClient";
import Image from "next/image";
import { useState, useEffect } from "react";
import Calendar from "@/public/images/calendar.svg";
import ArrowRightWhite from "@/public/images/ArrowRightWhite.svg";

interface Props {
  posts: Post[];
}

const BlogContent = ({ posts }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const PAGE_SIZE = 4; // Number of posts per page

  useEffect(() => {
    // Calculate total pages
    const totalPagesCount = Math.ceil(posts.length / PAGE_SIZE);
    setTotalPages(totalPagesCount);
  }, [posts]);

  // Pagination logic
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = currentPage * PAGE_SIZE;
  const displayedPosts = posts.slice(startIndex, endIndex);

  // Filter other posts
  const otherPosts = posts.filter(
    (post) => !post.categories.find((category) => category.title === "Featured")
  );

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-[5rem] xl:mx-10 justify-center mx-5">
      {/* Left column for featured posts */}
      <div className=" col-span-1">
        <div className="lg:flex lg:flex-col lg:space-y-4 hidden">
          <p className="text-primary font-medium text-xl mb-5">Recent Posts</p>
          {posts
            .filter((post) =>
              post.categories.find((category) => category.title === "Featured")
            )
            .map((post, idx) => (
              <Link href={`/post/${post.slug.current}`} key={idx}>
                <figure className="flex bg-white rounded-md drop-shadow-md overflow-hidden h-[120px] w-[full] space-y-4">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    width={150}
                    height={500}
                    className="-ml-[29px] w-[150px] h-[500px]  object-fill "
                  />
                  <div className="flex flex-col justify-between px-4 py-2">
                    <blockquote className="mb-3">
                      <p className="text-sm font-medium line-clamp-2">
                        {post.description}
                      </p>
                    </blockquote>
                    <figcaption className="text-[16px] font-medium flex gap-3 mb-2 items-center">
                      <div className="text-primary lg:text-[12px] xl:text-base">
                        Read More
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#6DBA3A"
                          d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8-8-8z"
                        ></path>
                      </svg>
                    </figcaption>
                  </div>
                </figure>
              </Link>
            ))}
        </div>
      </div>

      {/* Right column for other posts */}
      <div className=" col-span-2">
        <div className="mb-10">
          {/* Render other posts */}
          <div className="grid grid-cols-2 gap-10">
            {displayedPosts.map((post, idx) => (
              <Link href={`/post/${post.slug.current}`} key={idx}>
                <div className="border rounded-lg overflow-hidden bg-white shadow-md  transition duration-300 transform hover:scale-105 flex flex-col">
                  <div className="relative overflow-hidden rounded-t-lg h-72">
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src={Calendar}
                        alt="Calendar"
                        width={13}
                        height={13}
                      />

                      <p className="text-xs">
                        {new Date(post._createdAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <h3 className="text-lg line-clamp-2 font-bold mt-2 hover:text-blue-600 transition duration-200 cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                      {post.description}
                    </p>

                    <div className="mt-5">
                      <button className="py-4 px-8  bg-primary text-white text-sm rounded-md  flex gap-3 items-center">
                        <p>Read more</p>
                        <Image
                          src={ArrowRightWhite}
                          alt="Arrow Right"
                          width={12}
                          height={12}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Pagination controls */}
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

export default BlogContent;
