import React, { useEffect, useState } from 'react'
import Book from './Book'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import {Pagination } from 'swiper/modules';

const TopSell = () => {

 const [books,setBooks]= useState([]);

 useEffect(()=>{
  const fetchBooks=async ()=>{
  try {
    const response = await fetch('books.json'); // Fetching the JSON file
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json(); // Parsing JSON
    setBooks(data); // Setting state with fetched data
} catch (error) {
   console.log(error.message); // Updating error state on failure
}
  }
fetchBooks(); // Invoking the fetch function
}, []);

//console.log(books)

  return (
    <>
    <div className='px-7'>
      <h2 className="text-xl text-2 text-[#0D0842] font-semibold ">Top Sellers</h2>
      <select id="select" className="mt-5 bg-slate-100 p-0.5 rounded-md">
      <option value="Choose a genre">Choose a genre</option>
        <option value="Buisness">Buisness</option>
        <option value="Fiction">Fiction</option>
        <option value="Horror">Horror</option>
        <option value="Adventure">Adventure</option>
      </select>
    </div>
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {books.map((book) => (
        <SwiperSlide key={book.id}>
          <Book book={book} />
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  )
}

export default TopSell
