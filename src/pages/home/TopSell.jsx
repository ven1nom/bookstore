// import React, { useEffect, useState } from 'react'
// import Book from './Book'
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/grid';
// import 'swiper/css/pagination';
// import {Pagination } from 'swiper/modules';
// import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

// const TopSell = () => {

// //below code was just about fetching data from static file book.json
// //  const [books,setBooks]= useState([]);

// //  useEffect(()=>{
// //   const fetchBooks=async ()=>{
// //   try {
// //     const response = await fetch('books.json'); // Fetching the JSON file
// //     if (!response.ok) {
// //         throw new Error('Network response was not ok');
// //     }
// //     const data = await response.json(); // Parsing JSON
// //     setBooks(data); // Setting state with fetched data
// // } catch (error) {
// //    console.log(error.message); // Updating error state on failure
// // }
// //   }
// // fetchBooks(); // Invoking the fetch function
// // }, []);

// //console.log(books)

// //Real world use case - fetch using RTK query
// const {data:books=[]}=useFetchAllBooksQuery()

//   return (
//     <>
//     <div className='px-7'>
//       <h2 className="text-xl text-2 text-[#0D0842] font-semibold ">Top Sellers</h2>
//       <select id="select" className="mt-5 bg-slate-100 p-0.5 rounded-md">
//       <option value="Choose a genre">Choose a genre</option>
//         <option value="Buisness">Buisness</option>
//         <option value="Fiction">Fiction</option>
//         <option value="Horror">Horror</option>
//         <option value="Adventure">Adventure</option>
//       </select>
//     </div>
//     <Swiper
//       slidesPerView={3}
//       spaceBetween={10}
//       pagination={{
//         clickable: true,
//       }}
//       breakpoints={{
//         640: {
//           slidesPerView: 2,
//         },
//         768: {
//           slidesPerView: 3,
//         },
//         1024: {
//           slidesPerView: 3,
//         },
//       }}
//       modules={[Pagination]}
//       className="mySwiper"
//     >
//       {books.map((book) => (
//         <SwiperSlide key={book.id}>
//           <Book book={book} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//     </>
//   )
// }

// export default TopSell

import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]

const TopSellers = () => {
    
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

   const {data: books = []} = useFetchAllBooksQuery();
  
    const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase())

    return (
        <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
            {/* category filtering */}
            <div className='mb-8 flex items-center'>
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                    {
                        categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))
                    }
                </select>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                   filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard  book={book} />
                        </SwiperSlide>
                    ))
                }



            </Swiper>


        </div>
    )
}

export default TopSellers