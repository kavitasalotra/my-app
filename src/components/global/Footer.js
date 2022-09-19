import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-center mt-6 p-7  lg:text-left md:mt-0 p-6">
      <div className="text-center text-xs md:text-sm">
        Copyright © 2022 Stablo:
        <span> All rights reserved.</span>
      </div>
      <div className="text-gray-700 text-sm text-center">
        Made by
        <span>
          <a className="text-gray-700 ml-2" href="https://www.zeiq.co/">
            zeiq.co
          </a>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
