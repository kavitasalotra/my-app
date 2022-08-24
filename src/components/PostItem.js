import React from 'react';
import Image from 'next/image';


const PostItem = ({ item }) => {
  return (
    <div>
      <div className="bg-white shadow-none  md:max-w-md s
        rounded-lg max-w-xs mb-5">
        <a href="#">
          <div className="flex flex-col items-center">
            <div className="transition-transform duration-300 transform hover:scale-105 ">
              <Image className="object-cover w-full rounded-lg md:h-472 md:w-265 md:rounded-none md:rounded-lg" src={item.image} alt="blogimage"
                height={265} width={472} />
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
      {/* /* <div>
        <div className="bg-white shadow-none rounded-lg max-w-xs mb-5" >
          <a href="#">
            <div className="transition-transform duration-300 transform hover:scale-105 ">
              <Image className="rounded-t-lg object-cover" src={item.image} height={301} width={334} alt="" />
            </div>
          </a>
          <div className="p-5">
            <h5 className="mb-2 uppercase text-xs font-medium tracking-wider text-emerald-700 dark:text-white">{item.category}</h5>
            <a href="#">
              <h5 className="text-gray-900 text-neutral-800 font-bold  text-lg tracking-tight mb-2">{item.description}</h5>
            </a>
            <div className="inline-flex items-center">
              <div className="flex items-center ">
                <div className="relative">
                  <div className="rounded-full w-6 h-6  bg-gray-200">
                    <Image src={item.AuthorImage} className="rounded-full object-cover" height={32} width={32} />
                  </div>
                  <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                </div>
                <span className="mr-3 ml-1 text-sm text-neutral-500">
                  {item.AuthorName}
                </span>
              </div>
              <span className=" text-gray-300 text-xs  flex  items-center">•</span>
              <p className="inline-block  whitespace-nowrap leading-tight rounded-xl">
                <span className="text-sm  ml-3 text-neutral-500">
                  {item.dateTime}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};



export default PostItem;
