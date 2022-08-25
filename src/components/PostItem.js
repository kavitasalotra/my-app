import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PostItem = ({ item, isSmall }) => {
  return (
    <div className={isSmall ? "md:w-4/12 w-full px-3" : "md:w-6/12 w-full px-3"}>
      <div className="bg-white shadow-none rounded-lg mb-5">
        <a>
          <div className="flex flex-col items-center">
            <div className="transition-transform duration-300 transform hover:scale-105 ">
              <Image className="object-cover w-full rounded-lg md:h-472 md:w-265 md:rounded-none md:rounded-lg" src={item.image} alt="blogimage"
                height={isSmall ? 301 : 265} width={isSmall ? 334 : 472} />
            </div>
          </div>
        </a>
        <div className="p-2">
          <h5 className="mb-2 uppercase text-xs font-medium tracking-wider text-blue-600 dark:text-white">{item.category}</h5>
          <p className=" font-semibold text-lg text-gray-800 dark:text-gray-400 bg-white">{item.description}</p>
        </div>
        <div className="p-2">
          <div className="inline-flex items-center">
            <div className="flex items-center ">
              <div className="relative">
                <div className="rounded-full w-6 h-6  bg-gray-200">
                  <Image src={item.AuthorImage} className="rounded-full" height={32} width={32} />
                </div>
                <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
              </div>
              <span className="mr-6 ml-3 text-sm text-neutral-500">
                {item.AuthorName}
              </span>
            </div>
            <div>
              <span className=" text-gray-300 text-xs mr-3.5   items-center">•</span>
              <p className="inline-block  whitespace-nowrap leading-tight rounded-xl">
                <span className="text-sm  ml-3 text-neutral-500">
                  {item.dateTime}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};



export default PostItem;
