import React from 'react';
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';
import { BiPhone } from 'react-icons/bi';

const Contact = () => {
  return (
    <div className="container mx-auto px-8 py-6 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
      <div className="text-center mb-6">
        <h1 className="text-4xl text-neutral-800 font-semibold mb-4">
          Contact
        </h1>
        <p className="text-lg text-neutral-800 font-normal mb-9">
          We are a here to help.
        </p>
      </div>
      <section className="bg-white py-11 lg:py-11 overflow-hidden relative z-10">
        <div className="container">
          <div className="flex flex-wrap lg:justify-between -mx-4">
            <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
              <div className="max-w-[570px] mb-12 lg:mb-0">
                <span className="block mb-4 text-2xl text-neutral-800 font-semibold">
                  Contact Stablo
                </span>
                <p className="text-base text-neutral-800 font-normal mb-5">
                  Have something to say? We are here to help. Fill up the form
                  or send email or call phone.
                </p>
                <div className="flex mb-1 max-w-[370px] w-full items-center">
                  <HiOutlineLocationMarker />
                  <div className="w-full ml-2">
                    <p className="text-base text-neutral-800">
                      1734 Sanfransico, CA 93063
                    </p>
                  </div>
                </div>
                <div className="flex mb-1 max-w-[370px] w-full items-center">
                  <BiPhone />
                  <div className="w-full ml-2">
                    <p className="text-base text-neutral-800">
                      +1 (987) 4587 899
                    </p>
                  </div>
                </div>
                <div className="flex mb-1 max-w-[370px] w-full items-center">
                  <HiOutlineMail />
                  <div className="w-full ml-2">
                    <p className="text-base text-neutral-800">
                      info@yourdomain.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2  px-4">
              <div className="bg-white  rounded-lg">
                <form>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="
                        w-full
                        rounded-md
                        py-3
                        px-4
                        placeholder-gray-800
                        text-neutral-800 text-base
                        border-gray-300
                        border-2
                        outline-none
                        focus:ring-4  focus:border-red-600 ring-red-100 dark:ring-0"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder=" Email Address"
                      className="
                        w-full
                        rounded-md
                        py-3
                        px-4
                        placeholder-gray-800
                        text-neutral-800 text-base
                        border-gray-300
                        border-2
                        outline-none
                        focus:ring-4   focus:border-red-600 ring-red-100 dark:ring-0"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      rows="6"
                      placeholder="Your Message"
                      className="
                        w-full
                        rounded-md
                        py-3
                        px-4
                        placeholder-gray-800
                        text-neutral-800 text-base
                        border-gray-300
                        border-2
                        outline-none
                        focus:ring-4  focus:border-red-600 ring-red-100 dark:ring-0"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="
                        w-full
                        text-white
                        bg-white
                        rounded
                        bg-neutral-800
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
