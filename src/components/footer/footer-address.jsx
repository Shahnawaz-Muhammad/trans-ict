import React from "react";
import { TfiLocationPin } from "react-icons/tfi";


const FooterAddress = () => {
  return (
    <>
      <div className="w-full flex xl:justify-center md:gap-4">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:justify-between my-10 mx-10 md:mx-20 lg:mx-10 xl:mx-0">
          <div className="flex gap-5 items-center xl:justify-center">
            <div className="w-20 h-20 bg-gray-200 bg-opacity-20 flex justify-center items-center rounded-full p-3">
              <TfiLocationPin className="w-10 h-10 text-white  opacity-100" />
            </div>
            <div className=" flex flex-col gap-3 text-white ">
              <p className="text-xl">Location</p>
              <p className="text-gray-300">
                258 Daniel Mansion 258 Berlin Germany
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-center xl:justify-center">
            <div className="w-20 h-20 bg-gray-200 bg-opacity-20 flex justify-center items-center rounded-full p-3">
              <TfiLocationPin className="w-10 h-10 text-white  opacity-100" />
            </div>
            <div className=" flex flex-col gap-3 text-white ">
              <p className="text-xl">Working Hours</p>
              <div className="flex flex-row md:flex-col gap-3">
                <p className="text-gray-300">Weekdays 8am-22pm</p>
                <p className="text-gray-300">Weekdays 8am-22pm</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 items-center xl:justify-center">
            <div className="w-20 h-20 bg-gray-200 bg-opacity-20 flex justify-center items-center rounded-full p-3">
              <TfiLocationPin className="w-10 h-10 text-white  opacity-100" />
            </div>
            <div className=" flex flex-col gap-3 text-white ">
              <p className="text-xl">Contact Us</p>
              <div className="flex flex-row md:flex-col gap-3">
                <p className="text-gray-300">tronixinfo@tronix.com </p>
                <p className="text-gray-300">(+259)2257 6156</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterAddress;
