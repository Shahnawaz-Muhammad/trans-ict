import React from "react";
import technology from "../../assets/technologysolution.svg";
import itmanagement from "../../assets/itmanagement.svg";
import mobile from "../../assets/mobile.svg";
import datatracking from "../../assets/datatracking.svg";
import circle from "../../assets/circle.svg";
import { BiSquareRounded } from "react-icons/bi";

const Features = () => {
  return (
    <>
      {/* circle part */}

      <div className=" relative border ">
        <div className="w-full flex py-16 z-0 justify-center ">
          <img src={circle} alt="" className="absolute" />
          <div className="w-full md:max-w-screen-xl md:mx-auto flex flex-col items-center justify-center mt-12">
            <span className="flex justify-center items-center space-x-2  border ">
              <BiSquareRounded className="text-[#0E59F2] bg-[#0E59F2] text-[9px]"></BiSquareRounded>
              <p>OUR FEATURES</p>
              <BiSquareRounded className="text-[#0E59F2] bg-[#0E59F2] text-[9px]"></BiSquareRounded>
            </span>
            <p className="text-4xl mt-4 pb-40">Awesome Features</p>
          </div>
        </div>

        {/* four boxes main div */}
        <div className="absolute z-0 flex justify-center space-x-5 border w-[100%]  top-64 ">
          <div className=" border w-[80%] md:w-[80%] 2xl:w-[75%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
            {/* first card  */}

            <div className="border md:w-[100%] md:h-[300px]  xl:w-[100%] xl:h-[360px] flex justify-center items-center bg-[#FFFFFF] rounded-[15px]">
              <div className=" w-[75%] h-[300px]">
                <div className="border w-[70px] h-[70px] flex justify-center items-center bg-[#E6EEFE] rounded-lg mt-4">
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
                <div className="border w-[70px] h-[70px] flex justify-center items-center bg-[#E6EEFE] rounded-lg mt-4">
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
                <div className="border w-[70px] h-[70px] flex justify-center items-center bg-[#E6EEFE] rounded-lg mt-4">
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
                <div className="border w-[70px] h-[70px] flex justify-center items-center bg-[#E6EEFE] rounded-lg mt-4">
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
