import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AllImages from './allImages';

const dataArray = [
    {
        title: "People talk about us",
        imageSource: AllImages.user5,
        quote: "Trans ESCROW",
        des: "TransICT inc. is sole Escrow Solution provider in Pakistan. It is also offering services across to the financial, governmental, public and private entities. We have experienced them to be the best & always reachable",
        author: "SYED MUJEEB",
        designation: "Bank (CEO)"
    },
    {
        title: "People talk about us",
        imageSource: AllImages.user3,
        quote: "Trans SECURITY",
        des: "Our bank has engaged TransICT for various security testing services, they have executed tasks like mobile app secure code review, Pentesting, Vulnerability Analysis.",
        author: "Theodore Isaac Rubin",
        designation: "Programmer"
    },
    {
        title: "People talk about us",
        imageSource: AllImages.user4,
        quote: "Trans TRACK",
        des: "We find TransICT a great contributor in the field of enovation R&D and implementation int the domain of Vehicle Tracking, Fleet Management, Asset Tracking, Personnel Tracking, Team Tracking including hardware and software area.",
        author: "Max de Pree",
        designation: "Manager"
    }
];

const ClientsTalk = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        rtl: true // This makes the slider slide from right to left
    };

    return (
        <div className="flex mx-4 container mt-28">
            <div className="w-1/3 pl-16 hidden md:block">
                <div className="imgcircle h-14 w-14 rounded-full bg-[#b6dcfd] mt-20"></div>
                <img src={AllImages.man} alt="Your Image" className="myImage" />
            </div>

            <div className="w-full md:w-1/3 pt-16 parent-div">
                <Slider {...settings}>
                    {dataArray.map((data, index) => (
                        <div key={index} className="slide-item">
                            <div className="slide-content" >
                                <div className='flex' style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <p className="ml-2">CLIENTS TALK</p>
                                </div>
                                <div className='flex' style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                                <h1 className="text-4xl font-bold pt-4">{data.title}</h1>
                                </div>
                                <div className='flex' style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                                <img src={data.imageSource} alt="Your Image" className="w-28 h-28 mt-10" />
                                </div>
                                 <div className='flex' style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                                <h1 className="text-4xl font-bold pt-10">“{data.quote}”</h1>
                                </div>
                                <div className='text-center mt-4 font-bold text-[#98999d] '>
                                    {data.des}
                                </div>
                                <div className='flex' style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                                <h1 className="text-4xl font-bold pt-4">{data.author}</h1>
                                </div>
                                <div className='flex' style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                                <p className='mt-6'>
                                    <span>{data.designation}</span>
                                </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="w-1/3 hidden md:block mt-10 ">
                <div className='w-full flex justify-evenly pl-32 '>
                    <div className="imgcircle h-14 w-14 rounded-full  mt-20">
                        <img src={AllImages.circlboy} alt="Your Image" className="w-full h-full" />
                    </div>
                </div>
                <div className='w-full pl-20 flex justify-start mt-20'>
                    <div className="imgcircle h-14 w-14 rounded-full ">
                        <img src={AllImages.circlegirl} alt="Your Image" className="w-full h-full" />
                    </div>
                </div>
                <div className='w-full pl-32 flex justify-evenly mt-28'>
                    <div className="imgcircle h-14 w-14 rounded-full bg-[#dfddff]"></div>
                </div>
            </div>
        </div>
    );
};

export default ClientsTalk;
