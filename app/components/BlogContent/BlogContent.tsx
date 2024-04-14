import Link from 'next/link';
import { Post } from '../../../types';
import { urlFor } from '../../lib/createClient';
import Image from 'next/image';

// Define interface for post data
interface Props {
  posts: Post[];
}

// BlogContent component
const BlogContent = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-20 md:gap-10 md:px-36">
      {posts.map((post, idx) => (
        <div
          key={idx}
          className="border rounded-lg overflow-hidden bg-white shadow-md"
        >
          <div className="relative overflow-hidden rounded-t-lg h-[200px]">
            <Image
              src={urlFor(post.mainImage).url()}
              alt="image"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 bg-black/20 w-full h-full hidden group-hover:inline-flex items-center justify-center bg-opacity-20 backdrop-blur-lg rounded-tl-lg rounded-bl-lg">
              <p className="text-lg font-semibold">Click to Read</p>
            </div>
          </div>
          <div className="p-4">
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
            <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
            <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
              {post.description}
            </p>
            <div className="flex items-center justify-between mt-2">
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
            <div className="mt-4">
              <Link href={`/post/${post.slug.current}`} passHref>
                <button className="text-white bg-blue-500 rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Continue Reading
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Default export
export default BlogContent;
