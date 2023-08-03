import React from 'react'
import muast from "../../assets/muast.png";
import nexttech from "../../assets/nexttech.png";
import chatbot from "../../assets/chatbot.png";
import souluck from "../../assets/souluck.png";
import wattse from "../../assets/wattse.png";
import linkify from "../../assets/linkify.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import 'swiper/css';

const Partners = () => {
    const images = [
        { src: muast, alt: "none" },
        { src: nexttech, alt: "none" },
        { src: chatbot, alt: "none" },
        { src: souluck, alt: "none" },
        { src: wattse, alt: "none" },
        { src: linkify, alt: "none" },
      ];
      const handleSlideChange = (swiper) => {
        console.log("Slide changed. Current slide index:", swiper.realIndex);
      };
  return (
    <>
    <div className="flex justify-center">
          <div className="border 2xl:w-[75%] w-[90%] h-[150px] flex items-center">
            <Swiper
              className="border flex justify-center w-[100%]"
              spaceBetween={10}
              breakpoints={{
                // When screen size is 640px or larger
                640: {
                  slidesPerView: 2,
                },
                // When screen size is 768px or larger
                768: {
                  slidesPerView: 3,
                },
                // When screen size is 1024px or larger
                1024: {
                  slidesPerView: 4,
                },
                // When screen size is 1280px or larger
                1280: {
                  slidesPerView: 5,
                },
              }}
              // loop={true}
              // freeMode={true}
              onSlideChangeTransitionEnd={handleSlideChange}
              touchEventsTarget="wrapper"
              touchRatio={0.5}
              rewind={true}
              navigation={true}
              modules={[Navigation]}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {images.map((image, index) => (
                <SwiperSlide className=" flex justify-center h-[30px]">
                  <img key={index} src={image.src} alt={image.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className=" flex justify-center ">
          <hr className="w-[100%] 2xl:w-[80%] "></hr>
        </div>
    </>
  )
}

export default Partners