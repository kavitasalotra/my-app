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
const post = [
  {
    id: 1,
    image: "/images/img-7.webp",
    category: 'Personal Growth',
    subTitle: '10 Simple Practices That Will Help You Get 1% Better Every Day',
    userImage: '/images/image-3.webp',
    userName: 'Erika Oliver',
    dateTime: 'May 20, 2022',
  },
  {
    id: 2,
    image: "/images/img-3.webp",
    category: 'Design',
    subTitle: 'Every Artist has to see the Amazing Pictures on the Internet',
    userImage: '/images/image-2.webp',
    userName: 'Mario Sanchez',
    dateTime: 'May 11, 2022',
  },
  {
    id: 3,
    image: "/images/img-4.webp",
    category: 'Technology',
    subTitle: 'How Technology Evolved Under the Bright Sun of Universe',
    userImage: '/images/image-3.webp',
    userName: 'Erika Oliver',
    dateTime: 'May 11, 2022',
  },
  {
    id: 4,
    image: "/images/img-5.webp",
    category: 'Travel',
    subTitle: 'Lessons Of Happiness I learned from a Mountain Village',
    userImage: '/images/user-image.webp',
    userName: 'Joshua Wood',
    dateTime: 'May 11, 2022',
  },
  {
    id: 5,
    image: "/images/img-6.webp",
    category: 'Lifestyle',
    subTitle: 'There’s Nothing New About Undermining Women’s Autonomy',
    userImage: '/images/image-3.webp',
    userName: 'Erika Oliver',
    dateTime: 'May 11, 2022',
  },
  {
    id: 6,
    image: "/images/image-1.webp",
    category: 'Technology',
    subTitle: 'Escape Fantasies of the Tech Billionaire',
    userImage: '/images/image-3.webp',
    userName: 'Erika Oliver',
    dateTime: 'May 11, 2022',
  },
]

const HomeHero = () => {
  return (
    <div className="container  mx-auto px-8 py-6 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
      <div className="flex flex-row gap-11 items-center justify-center py-2 md:flex-cols flex-wrap ">
        {data.map((item) => (
          <a href="#" className="bg-white rounded-lg border md:flex-col md:max-w-md  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col items-center">
              <div className="transition-transform duration-500 transform hover:scale-110 ">
                <Image className="object-cover w-full rounded-t-lg md:h-472 md:w-265 md:rounded-none md:rounded-l-lg" src={item.image} alt=""
                  height={265} width={472} />
              </div>
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 uppercase text-xs font-medium tracking-wider text-blue-600 dark:text-white">{item.title}</h5>
              <p className="mb-3 font-semibold text-lg text-gray-800 dark:text-gray-400">{item.description}</p>
            </div>
            <div className="inline-flex p-4 items-center">
              <div className="flex items-center ">
                <div className="relative">
                  <div className="rounded-full w-6 h-6  bg-gray-200">
                    <Image src="/images/image-2.webp" className="rounded-full" height={32} width={32} />
                  </div>
                  <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                </div>
                <span className="mr-6 ml-3 text-sm text-neutral-500">
                  Mario Sanchez
                </span>
              </div>
              <span className=" text-gray-300 text-xs mr-3.5 flex  items-center">•</span>
              <p className="inline-block  whitespace-nowrap leading-tight rounded-xl">
                <span className="text-sm  ml-3 text-neutral-500">
                  May 20, 2022
                </span>
              </p>
            </div>
          </a>
        ))}
      </div>
      <div className="px-4 py-6 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 xl:grid-cols-3 gap-10">
        {post.map((item) => (
          <div className="bg-white shadow-none rounded-lg max-w-xs mb-5">
            <a href="#">
              <div className="transition-transform duration-300 transform hover:scale-105 ">
                <Image className="rounded-t-lg object-cover" src={item.image} height={301} width={334} alt="" />
              </div>
            </a>
            <div className="p-5">
              <h5 className="mb-2 uppercase text-xs font-medium tracking-wider text-emerald-700 dark:text-white">{item.category}</h5>
              <a href="#">
                <h5 className="text-gray-900 text-neutral-800 font-bold text-lg tracking-tight mb-2">{item.subTitle}</h5>
              </a>
              <div className="inline-flex items-center">
                <div className="flex items-center ">
                  <div className="relative">
                    <div className="rounded-full w-6 h-6  bg-gray-200">
                      <Image src={item.userImage} className="rounded-full object-cover" height={32} width={32} />
                    </div>
                    <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                  </div>
                  <span className="mr-3 ml-1 text-sm text-neutral-500">
                    {item.userName}
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
        ))}
      </div>
    </div>
  );
};

export default HomeHero;
