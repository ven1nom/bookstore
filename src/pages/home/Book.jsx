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
<div className='m-4'>
  <h1 className='font-semibold text-lg'>{title}</h1>
  <p className='text-gray-500 text-wrap'>{description}</p>
  <div>
    <span className='text-xl'>${newPrice}</span>
    <span className='text-gray-400 line-through text-xl'>${oldPrice}</span>
  </div>
  <div className="flex bg-primary">
  <BsCart2 />
  <button >Add to basket</button>
</div>
</div> 

    </div>
  )
}

export default Book
