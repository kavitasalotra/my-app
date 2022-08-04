import React from 'react';
import Image from 'next/image';


const data = [
  {
    id: 1,
    image: "/images/home-image-1.webp",
    title: 'Technology',
    description: 'Architectural Engineering Wonders of the modern era for your Inspiration',
  },
  {
    id: 2,
    image: "/images/home-image-2.webp",
    title: 'Lifestyle',
    description: '5 Effective Brain Recharging Activities No One is Talking About',
  },
]

const HomeHero = () => {
  return (
    <div class="container  mx-auto px-9 py-6 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
      <div class="flex min-h-screen flex-row gap-11 items-center justify-center py-2 md:flex-cols flex-wrap ">
        {data.map((item) => (
          <a href="#" class="bg-white rounded-lg border shadow-md md:flex-col md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="flex flex-col items-center">
              <Image class="object-cover w-full h-96 rounded-t-lg md:h-472 md:w-265 md:rounded-none md:rounded-l-lg" src={item.image} alt=""
                height={265} width={472} />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 uppercase text-xs font-medium tracking-wider text-blue-600 dark:text-white">{item.title}</h5>
                <p class="mb-3 font-semibold text-lg text-gray-800 dark:text-gray-400">{item.description}</p>
              </div>
            </div>
            <div class="inline-flex p-4 items-center">
              <div class="flex items-center ">
                <div class="relative">
                  <div class="rounded-full w-6 h-6  bg-gray-200">
                    <Image src="/images/image-2.webp" class="rounded-full" height={32} width={32} />
                  </div>
                  <span class="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                </div>
                <span class="mr-6 ml-3 text-sm">
                  Mario Sanchez
                </span>
              </div>
              <span class=" text-gray-300 text-xs mr-3.5 flex  items-center">•</span>

              <p class="inline-block  whitespace-nowrap leading-tight rounded-xl">
                <span class="text-sm uppercase ml-3">
                  May 20, 2022
                </span>
              </p>
            </div>

          </a>
        ))}
      </div>
    </div>
  );
};

export default HomeHero;
