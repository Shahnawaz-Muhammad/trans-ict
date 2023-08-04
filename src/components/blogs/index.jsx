import React from "react";
import {  BsSquareFill } from "react-icons/bs";

const Blogs = () => {
  return (
    <div className="flex flex-col items-center py-20 ">
      <div className="flex flex-col gap-5 items-center my-5 mx-5 md:mx-20 lg:mx-10">
        <div className="flex items-center gap-3 text-sm">
          <BsSquareFill className="text-[#800000] w-3 h-3" />
          <p className="text-md uppercase">Pricing Plans</p>
          <BsSquareFill className="text-[#800000] w-3 h-3" />
        </div>
        <h1 className="md:text-5xl text-3xl font-medium ">Latest News Posts</h1>
      </div>
      <div className="w-full md:max-w-screen-xl md:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4  mx-5 md:mx-20 lg:mx-10">
          
              <div className="flex flex-col gap-4 p-8 box-shadow rounded-2xl">
                <div className="rounded-2xl relative  items-center justify-center overflow-hidden  w-100 h-60">
                  <img
                    src="https://wptf.themepul.co/tronix/wp-content/uploads/2023/06/blog3.jpg"
                    alt=""
                    className="absolute w-full h-full hover:scale-110 transition-all duration-300 ease-in-out transform bg-center bg-cover;"
                  />
                </div>
                <div className="flex justify-between text-gray-500">
                  <p className="text-sm md:text-md">June 4, 2023</p>
                  <p className="text-sm md:text-md">It Service</p>
                </div>
                <h1 className="text-2xl md:text-3xl  font-semibold">
                  Your Business Safe Ensure High Availability.
                </h1>
                <p className="text-gray-500 text-sm md:text-md">
                  We’ve been a strategy thought leader for nearly five decades
                  and we bring But we ipsum dolor sit amet,…
                </p>
                <div>
                  <button>Read Details </button>
                </div>{" "}
              </div>

              <div className="flex flex-col gap-4 p-8 box-shadow rounded-2xl">
                <div className="rounded-2xl relative  items-center justify-center overflow-hidden  w-100 h-60">
                  <img
                    src="https://wptf.themepul.co/tronix/wp-content/uploads/2023/06/blog3.jpg"
                    alt=""
                    className="absolute w-full h-full hover:scale-110 transition-all duration-300 ease-in-out transform bg-center bg-cover;"
                  />
                </div>
                <div className="flex justify-between text-gray-500">
                  <p className="text-sm md:text-md">June 4, 2023</p>
                  <p className="text-sm md:text-md">It Service</p>
                </div>
                <h1 className="text-2xl md:text-3xl  font-semibold">
                  Your Business Safe Ensure High Availability.
                </h1>
                <p className="text-gray-500 text-sm md:text-md">
                  We’ve been a strategy thought leader for nearly five decades
                  and we bring But we ipsum dolor sit amet,…
                </p>
                <div>
                  <button>Read Details </button>
                </div>{" "}
              </div>

              <div className="flex flex-col gap-4 p-8 box-shadow rounded-2xl">
                <div className="rounded-2xl relative  items-center justify-center overflow-hidden  w-100 h-60">
                  <img
                    src="https://wptf.themepul.co/tronix/wp-content/uploads/2023/06/blog3.jpg"
                    alt=""
                    className="absolute w-full h-full hover:scale-110 transition-all duration-300 ease-in-out transform bg-center bg-cover;"
                  />
                </div>
                <div className="flex justify-between text-gray-500">
                  <p className="text-sm md:text-md">June 4, 2023</p>
                  <p className="text-sm md:text-md">It Service</p>
                </div>
                <h1 className="text-2xl md:text-3xl  font-semibold">
                  Your Business Safe Ensure High Availability.
                </h1>
                <p className="text-gray-500 text-sm md:text-md">
                  We’ve been a strategy thought leader for nearly five decades
                  and we bring But we ipsum dolor sit amet,…
                </p>
                <div>
                  <button>Read Details </button>
                </div>{" "}
              </div>
            
        </div>
      </div>
    </div>
  );
};

export default Blogs;
