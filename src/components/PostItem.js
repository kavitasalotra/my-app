import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PostItem = ({ item, isSmall, filePath }) => {
  const href = filePath ? `/post/${filePath.replace(/\.mdx?$/, '')}` : "";
  return (
    <div className={isSmall ? "md:w-4/12 w-full px-3" : "md:w-6/12 w-full px-3"}>
      <div className="bg-white shadow-none rounded-lg mb-5">
        <Link
          href={href}
        >
          <a>
            <div className="flex flex-col items-center">
              <div className="transition-transform duration-300 transform hover:scale-105 ">
                <Image className="object-cover w-full rounded-lg md:h-472 md:w-265 md:rounded-none md:rounded-lg" src={item.image} alt="blogimage"
                  height={isSmall ? 301 : 265} width={isSmall ? 334 : 472} />
              </div>
            </div>
          </a>
        </Link>
        <div className="md:p-2 group ">
          <h5 className="mb-2 uppercase text-xs font-medium tracking-wider text-blue-600  dark:text-white">{item.category}</h5>
          <Link
            href={href}
          >
            <a className=" font-semibold text-lg text-gray-800 dark:text-gray-400 bg-white bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">{item.title}</a>
          </Link>
        </div>
        <div className="p-2">
          <div className="inline-flex items-center">
            <div className="flex items-center ">
              <div className="relative">
                <div className="rounded-full w-6 h-6  bg-gray-200">
                  <Image src={item.AuthorImage} className="rounded-full object-cover" height={32} width={32} />
                </div>
                <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
              </div>
              <span className=" mx-0 sm:mr-6 sm:ml-3 lg:text-sm text-xs text-neutral-500">
                {item.AuthorName}
              </span>
            </div>
            <div>
              <span className=" text-gray-300 text-xs mr-3.5  items-center px-2">•</span>
              <p className="inline-block  whitespace-nowrap leading-tight rounded-xl">
                <span className="text-xs ml-3 text-neutral-500">
                  {item.dateTime}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default PostItem;
