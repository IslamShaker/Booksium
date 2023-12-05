/* eslint-disable no-unused-vars */

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import './BookCard.css'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaShoppingCart } from 'react-icons/fa';



// import required modules
import { Pagination } from 'swiper/modules';
const BookCard = ({headLine,books}) => {
  return (
    <div className='my-16 px-4 lg:px-24 '>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headLine}</h2>
      {/**card */}
      <div className='banner1'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        
        {
          books.map(book => <SwiperSlide key={book._id}>
            <Link to="/">
              <div className='relative'>
                <img src={book.imageURL} alt=""/>
                <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                {  <FaShoppingCart className='w-4 h-4 text-white'/> }
                </div>
              </div>
              <div>
                <h3>{book.bookTitle}</h3>
              </div>
            </Link>

          </SwiperSlide>)
        }
      </Swiper>
      </div>
    </div>
  )
}

export default BookCard
