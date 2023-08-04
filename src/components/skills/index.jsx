import React from 'react';
import AllImages from '../../data/allImages';

export default function Prograss() {
  return (
    <div className="flex flex-col md:flex-row mx-5 md:mx-20 lg:mx-10 mt-24">
    <div className="w-full md:w-1/2 p-2 md:mr-20 md:order-first" style={{  }}>
      {/* Content for the blue div */}
      <div className='flex'>
        <div className='bg-blue-900 w-2 h-2 mt-2 rounded-sm'></div>
        <p className="ml-2">WELCOME TO OUR COMPANY</p>
      </div>
      <h1 className="text-4xl font-semibold mt-4">We provide Excellent</h1>
      <h1 className="text-4xl font-bold">IT services for your</h1>
      <h1 className="text-4xl font-bold">success</h1>
      <div className="mt-20">
        <div className="flex justify-between items-center">
          <p>BUSINESS SECURITY</p>
          <p>62%</p>
        </div>
        <div className="bg-gray-300 h-4 rounded-lg relative">
          <div className="bg-blue-500 h-full rounded-lg" style={{ width:"62%"}}></div>
        </div>
  
        <div className="flex justify-between items-center">
          <p>CAREER DEVELOPMENT</p>
          <p>88%</p>
        </div>
        <div className="bg-gray-300 h-4 rounded-lg relative">
          <div className="bg-blue-500 h-full rounded-lg" style={{ width:"88%"}}></div>
        </div>
        <div className="flex justify-between items-center">
          <p>BUSINESS INNOVATION</p>
          <p>90%</p>
        </div>
        <div className="bg-gray-300 h-4 rounded-lg relative">
          <div className="bg-blue-500 h-full rounded-lg" style={{width:"90%" }}></div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 p-2" style={{ }}>
      {/* Content for the red div */}
      <img src={AllImages.prograssImage} alt="Cover" className="w-full h-96 object-cover" />
    </div>
  </div>
  
  );
}
