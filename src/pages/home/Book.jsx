import React from 'react'
import { BsCart2 } from "react-icons/bs";
import  {getImgUrl} from "../../utils/getimgUrl"


const Book = ({book}) => {

  //destructuring book
  const {title,description,oldPrice,newPrice,coverImage}=book;

  return (
    <div className='flex m-5 px-5'>

    <div className='mr-8'>
        {/** Left side */}
        <img src={`${getImgUrl(coverImage)}`} alt="bookImg" className="w-100" />
    </div>
<div className='m-4 max-w-[300px]'>
  <h1 className="font-bold text-xl">{title}</h1>
  <p className='text-gray-500 break-words overflow-hidden line-clamp-2'>
    {description}
  </p>
  <div>
    <span className='text-xl'>${newPrice}</span>
    <span className='text-gray-400 line-through text-xl'>${oldPrice}</span>
  </div >
  <div className="flex bg-primary px-2 py-2 w-fit rounded-md items-center gap-2 mt-2 cursor-pointer">
    <BsCart2 />
    <button>Add to basket</button>
  </div>
</div> 

    </div>
  )
}

export default Book
