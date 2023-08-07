import React, { useEffect, useState } from "react";
import AllImages from "../../data/allImages";

import { BsSquareFill } from "react-icons/bs";
import ProgressBar from "./progress-bar";

export default function Prograss() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="flex justify-center z-50  mb-5">
      <div className=" grid lg:grid-cols-2 grid-cols-1 w-[80%] gap-10 my-20 md:w-[80%] 2xl:w-[75%] ">
        <div className="w-full ">
          {/* Content for the blue div */}
          <div className="flex items-center">
            <BsSquareFill className="text-[#930000] w-3 h-3" />

            <p className="ml-2">WELCOME TO OUR COMPANY</p>
          </div>
          <h1 className="text-4xl font-semibold mt-4">We provide Excellent</h1>
          <h1 className="text-4xl font-bold">IT services for your</h1>
          <h1 className="text-4xl font-bold">success</h1>
          <div className="mt-10 md:mt-20 flex flex-col gap-2">
            <div>
              <div className="flex justify-between items-center">
                <p>BUSINESS SECURITY</p>
                <p>62%</p>
              </div>
              <ProgressBar percentage={62} />
            </div>

            <div>
              <div className="flex justify-between items-center">
                <p>CAREER DEVELOPMENT</p>
                <p>88%</p>
              </div>
              <ProgressBar percentage={88} />

            </div>

            <div>
              <div className="flex justify-between items-center">
                <p>BUSINESS INNOVATION</p>
                <p>90%</p>
              </div>
              <ProgressBar percentage={90} />

            </div>
          </div>
        </div>
        <div className="w-full " style={{}}>
          {/* Content for the red div */}
          <img
            src={AllImages.prograssImage}
            alt="Cover"
            className="w-full h-96 bg-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}