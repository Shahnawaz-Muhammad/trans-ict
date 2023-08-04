import React from "react";
import technology from "../../assets/technologysolution.svg";
import itmanagement from "../../assets/itmanagement.svg";
import mobile from "../../assets/mobile.svg";
import datatracking from "../../assets/datatracking.svg";
import circle from "../../assets/circle.svg";
import {  BsSquareFill } from "react-icons/bs";

const Features = () => {
  return (
    <>
      {/* circle part */}

      <div className=" relative ">
        <div className="w-full flex py-16 justify-center ">
          <img src={circle} alt="" className="absolute z-0" />
          <div className="w-full md:max-w-screen-xl md:mx-auto flex flex-col items-center justify-center mt-12">
            <span className="flex justify-center items-center space-x-2   ">
            <BsSquareFill className="text-[#930000] w-3 h-3" />
              <p className="text-md uppercase">OUR FEATURES</p>
              <BsSquareFill className="text-[#930000] w-3 h-3" />
            </span>
            <p className="text-4xl mt-4 pb-40">Awesome Features</p>
          </div>
        </div>

        {/* four boxes main div */}
        <div className="absolute z-0 flex justify-center space-x-5  w-[100%]  top-64 ">
          <div className="  w-[80%] md:w-[80%] 2xl:w-[75%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
            {/* first card  */}

            <div className="border md:w-[100%] md:h-[300px]  xl:w-[100%] xl:h-[360px] flex justify-center items-center bg-[#FFFFFF] rounded-[15px]">
              <div className=" w-[75%] h-[300px]">
                <div className=" w-[70px] h-[70px] flex justify-center items-center bg-[#E6EEFE] rounded-lg mt-4 p-4">
                  <img src={technology} alt="none"></img>
                </div>
                <div className="mt-4">
                  <p className="text-[24px] text-[#1C1C25]">
                    Technology <br></br>solution
                  </p>
                  <p className="mt-3 ">
                    Risus turpis id mauris tellus ultricies cras nulla
                  </p>
                </div>
              </div>
            </div>

            {/* second card  */}
            <div className="border md:w-[100%] md:h-[300px]  xl:w-[100%] xl:h-[360px] flex justify-center items-center bg-[#FFFFFF] rounded-[15px]">
              <div className=" w-[75%] h-[300px]">
                <div className=" w-[70px] h-[70px] flex justify-center items-center bg-[#E6EEFE] rounded-lg mt-4 p-4">
                  <img src={itmanagement} alt="none"></img>
                </div>
                <div className="mt-4">
                  <p className="text-[24px] text-[#1C1C25]">
                    Technology <br></br>solution
                  </p>
                  <p className="mt-3 ">
                    Risus turpis id mauris tellus <br></br> ultricies cras nulla
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd card  */}

            <div className="border  md:w-[100%] md:h-[300px]  xl:w-[100%] xl:h-[360px] flex justify-center items-center bg-[#FFFFFF] rounded-[15px]">
              <div className=" w-[75%] h-[300px]">
                <div className=" w-[70px] h-[70px] flex justify-center items-center bg-[#E6EEFE] rounded-lg mt-4 p-4">
                  <img src={mobile} alt="none"></img>
                </div>
                <div className="mt-4">
                  <p className="text-[24px] text-[#1C1C25]">
                    Technology <br></br>solution
                  </p>
                  <p className="mt-3 ">
                    Risus turpis id mauris tellus <br></br> ultricies cras nulla
                  </p>
                </div>
              </div>
            </div>
            {/* four card  */}
            <div className="border  md:w-[100%] md:h-[300px]  xl:w-[100%] xl:h-[360px] flex justify-center items-center bg-[#FFFFFF] rounded-[15px]">
              <div className=" w-[75%] h-[300px]">
                <div className=" w-[70px] h-[70px] flex justify-center items-center bg-[#E6EEFE] rounded-lg mt-4 p-4">
                  <img src={datatracking} alt="none"></img>
                </div>
                <div className="mt-4">
                  <p className="text-[24px] text-[#1C1C25]">
                    Technology <br></br>solution
                  </p>
                  <p className="mt-3 ">
                    Risus turpis id mauris tellus <br></br> ultricies cras nulla
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
