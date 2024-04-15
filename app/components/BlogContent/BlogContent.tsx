'use client';
import Link from 'next/link';
import { Post } from '../../../types';
import { urlFor } from '../../lib/createClient';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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
    (post) => !post.categories.find((category) => category.title === 'Featured')
  );

  return (
    <div className="flex flex-col md:flex-row gap-5 pt-4 md:pt-2 px-4 md:px-20 mt-[-5rem]">
      {/* Left column for featured posts */}
      <div className="hidden lg:flex lg:flex-col md:w-1/3">
        {/* Render featured posts */}
        {posts
          .filter((post) =>
            post.categories.find((category) => category.title === 'Featured')
          )
          .map((post, idx) => (
            <Link href={`/post/${post.slug.current}`} key={idx}>
              <div className="border rounded-lg overflow-hidden bg-white shadow-md mb-5 transition duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="w-1/3 h-full float-left">
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 float-left p-4">
                    <div className="flex items-center gap-2">
                      {post.categories.map((category, idx) => (
                        <p
                          key={idx}
                          className="text-xs uppercase text-blue-600 font-semibold"
                        >
                          {category.title}
                        </p>
                      ))}
                    </div>
                    <h3 className="text-lg line-clamp-2 font-bold mt-2 hover:text-blue-600 transition duration-200 cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-sm font-semibold text-gray-500">
                        {new Date(post._createdAt).toLocaleDateString('en-US', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                      <div className="flex items-center gap-2">
                        <Image
                          src={urlFor(post.author.image).url()}
                          width={200}
                          height={200}
                          alt="author image"
                          className="rounded-full object-cover w-10 h-10"
                        />
                        <p className="text-sm font-medium">
                          {post.author.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>

      {/* Right column for other posts */}
      <div className="md:w-3/3 lg:w-2/3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-5">
        {/* Render other posts */}
        {displayedPosts.map((post, idx) => (
          <Link href={`/post/${post.slug.current}`} key={idx}>
            <div className="border rounded-lg overflow-hidden bg-white shadow-md transition duration-300 transform hover:scale-105 flex flex-col h-full">
              <div className="relative overflow-hidden rounded-t-lg h-72">
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    {post.categories.map((category, idx) => (
                      <p
                        key={idx}
                        className="text-xs uppercase text-blue-600 font-semibold"
                      >
                        {category.title}
                      </p>
                    ))}
                  </div>
                  <h3 className="text-lg line-clamp-2 font-bold mt-2 hover:text-blue-600 transition duration-200 cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                    {post.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm font-semibold text-gray-500">
                    {new Date(post._createdAt).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      src={urlFor(post.author.image).url()}
                      width={200}
                      height={200}
                      alt="author image"
                      className="rounded-full object-cover w-10 h-10"
                    />
                    <p className="text-sm font-medium">{post.author.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* Pagination controls */}
        <div className="flex justify-center w-full mt-8">
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
