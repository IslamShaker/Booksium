/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa6';
import { Avatar } from 'flowbite-react';
import profile from "../../../assets/profile.jpg";
import './Reviews.css';
import { Pagination } from 'swiper/modules';

const Reviews = () => {
  return (
    <div className='my-12 px-4 lg:px-24 '>
      <h2 className='text-5xl font-bold text-center mb-10 leading-sung'>Our Customers</h2>
      <div className='rev'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index} className='shadow-2xl bg-white py-8 px-2 md:m-5 rounded-lg border '>
              <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className='mt-7'>
                  <p className='mb-5 text-black font-extralight' style={{ textAlign: 'left' }}>
                  I really finds it more easer to interact with your store .Thanks for your good services and hope you are all well.
                  </p>
                  <Avatar
                    alt="avatar of jese"
                    img={profile}
                    rounded
                    className="w-10 mb-4"
                  />
                  <div style={{ textAlign: 'left' }}>
                    <h5 className='text-lg font-medium text-black'>Mark Ping</h5>
                    <p className='text-base text-black font-extralight'>CEO,ABC Company</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
