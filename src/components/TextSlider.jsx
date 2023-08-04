import React from 'react';
import '../App.css'; // Import the CSS file for styles

export default function TextSlider() {
  return (
    <div className="slider-container w-full flex justify-center bg-black">
      <div className="max-w-screen-xl  flex gap-20 py-10">
        {/* Your content goes here */}
        <div className="grid grid-cols-6">
          <h1 className="text-slider text-white text-xl">WEB SITE & MOBILE</h1>
          <h1 className="text-slider text-white text-xl">IT MANAGEMENT</h1>
          <h1 className="text-slider text-white text-xl">HAPPY CUSTOMER</h1>
          <h1 className="text-slider text-white text-xl">GET A QUOTE</h1>
          <h1 className="text-slider text-white text-xl">TECHNOLOG</h1>
          <h1 className="text-slider text-white text-xl">24/7 CUSTOMER SERVICE</h1>
        </div>
      </div>
    </div>
  );
}

