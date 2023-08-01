import React from "react";
import PersonIcon from "../../assets/icons/person.svg";
import { BsCheckCircle } from "react-icons/bs";

const Pricing = () => {
  return (
    <div className="w-screen  py-20 flex justify-center">
      <div className="max-w-[1200px] w-full text-center ">
        <div className="flex flex-col gap-5 items-center">
          <p className="text-md uppercase">Pricing Plans</p>
          <h1 className="text-5xl font-medium ">Pricing Packages</h1>
          <p className="w-[60%] text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            obortis ligula euismod sededesty am augue nisl.
          </p>
        </div>

        <div className="flex gap-6 my-10">
          <div className="flex p-16 border rounded-xl w-full justify-between">
            <div className="flex flex-col gap-5 ">
              <div className="flex flex-col gap-5 relative">
                <img
                  src={PersonIcon}
                  alt="PersonIcon"
                  width={80}
                  className="z-10"
                />
                <h1 className="text-5xl text-start z-10">$39</h1>
                <div className="absolute bg-gray-200 w-36 h-36 rounded-full left-10 top-6"></div>
              </div>
              <p className="text-xl text-gray-600 ">Great for large business</p>
            </div>
            <div className="flex flex-col  gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                  <BsCheckCircle className="text-xl text-[#800000]" />
                  <p className="text-xl">Design & Marketing</p>
                </div>
                <div className="flex gap-3 items-center">
                  <BsCheckCircle className="text-xl text-[#800000]" />
                  <p className="text-xl">Design & Marketing</p>
                </div>
                <div className="flex gap-3 items-center">
                  <BsCheckCircle className="text-xl text-[#800000]" />
                  <p className="text-xl">Design & Marketing</p>
                </div>
                <div className="flex gap-3 items-center">
                  <BsCheckCircle className="text-xl text-[#800000]" />
                  <p className="text-xl">Design & Marketing</p>
                </div>
              </div>
              <button className="text-xl bg-slate-300 px-6 py-3 rounded-full">
                Choose Plan
              </button>
            </div>
          </div>

          <div className="flex p-16  border rounded-xl w-full justify-between">
            <div className="flex flex-col ">
              <div className="flex flex-col gap-5 relative">
                <img
                  src={PersonIcon}
                  alt="PersonIcon"
                  width={80}
                  className="z-10"
                />
                <h1 className="text-5xl text-start z-10">$39</h1>
                <div className="absolute bg-gray-200 w-36 h-36 rounded-full left-10 top-6"></div>
              </div>
              <p className="text-xl text-gray-600 ">Great for large business</p>
            </div>
            <div className="flex flex-col  gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                  <BsCheckCircle className="text-xl text-[#800000]" />
                  <p className="text-xl">Design & Marketing</p>
                </div>
                <div className="flex gap-3 items-center">
                  <BsCheckCircle className="text-xl text-[#800000]" />
                  <p className="text-xl">Design & Marketing</p>
                </div>
                <div className="flex gap-3 items-center">
                  <BsCheckCircle className="text-xl text-[#800000]" />
                  <p className="text-xl">Design & Marketing</p>
                </div>
                <div className="flex gap-3 items-center">
                  <BsCheckCircle className="text-xl text-[#800000]" />
                  <p className="text-xl">Design & Marketing</p>
                </div>
              </div>
              <button className="text-xl bg-slate-300 px-3 py-3 rounded-full">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
