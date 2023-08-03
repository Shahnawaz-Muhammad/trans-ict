import React from "react";

import { BiSquareRounded } from "react-icons/bi";
import people from "../../assets/people.png";
const Services = () => {
  return (
    <>
      <div className="flex justify-center z-50 border mb-5">
        <div className="border grid lg:grid-cols-2 grid-cols-1 w-[80%] xl:mt-64 md:mt-[500px] mt-[73rem]  md:w-[80%] 2xl:w-[75%] ">
          <div className="border flex items-center">
            <div className="  border">
              <div className="flex  items-center space-x-2">
                <BiSquareRounded className="bg-[#0E59F2] text-[#0E59F2] text-[15px] " />
                <p className="text-lg text-[15px] font-semibold">
                  WELCOME TO OUR COMPANY
                </p>
              </div>
              <p className="text-[44px] text-[#1C1C25] leading-[58px] mt-3">
                We Make Awesome IT Services For Your Newly Business
              </p>
              <div className="sm:flex sm:flex-row flex flex-col gap-4  mt-9 border">
                <button className="border bg-[#0E59F2] rounded-full  text-[#FFFFFF] font-semibold text-[16px] w-[185px] h-[56px]  hover:bg-[#930000]">
                  Start A Projects
                </button>
                <div className=" flex items-center  border ">
                  <div className="border">
                    <p className="text-[#0E59F2] font-semibold text-[18px]">
                      Call Us: 258-3258 235
                    </p>
                    <p className="font-semibold text-[18px]">
                      {" "}
                      For any question
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center  sm:mt-0 border mt-1">
            <img src={people} className="w-[100%]  "></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
