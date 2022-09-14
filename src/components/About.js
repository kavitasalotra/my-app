import React from 'react';
import Image from 'next/image';
import about from '../../content/general/about.yaml';

const About = () => {
  return (
    <div className="container mx-auto px-8 py-6 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
      <div className="text-center">
        <h1 className="text-4xl text-neutral-800 font-semibold mb-4">
          {about.title}
        </h1>
        <p className="text-lg text-neutral-800 font-normal mb-9">
          {about.subTitle}
        </p>
      </div>
      <div class="flex items-start md:gap-11  gap-6">
        {about?.aboutImages.map((item) => (
          <div className="py-14  bg-white even:py-4">
            <Image
              src={item.image}
              className=" object-cover rounded"
              height={285}
              width={285}
            />
          </div>
        ))}
      </div>
      <div className="text-center  max-w-2xl lg:mx-auto">
        <p className="text-base text-gray-700 leading-7 my-3">
          {about.description}
        </p>
        <p className="text-base text-gray-700 leading-7 my-2">
          {about.descriptionOne}
        </p>
      </div>
    </div>
  );
};

export default About;
