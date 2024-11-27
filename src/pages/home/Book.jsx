import React from 'react'
import { FaDollarSign } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import BannerImage from "../../assets/banner.png"

const Book = () => {
  return (
    <div className='flex'>

    <div>
        {/** Left side */}
        <img src={BannerImage} alt="" className="size-40" />
    </div>
  <div>
  <h1>The Time Has Come</h1>
  <p>Lindbergh's Pharmacy is an Athens, Georgia, institution...</p>
  <div>
    <span>${27.89}</span>
    <span>${30.99}</span>
    <br />
    < button><span><BsCart2 /> Add to basket</span></button>
  </div>
</div> 

    </div>
  )
}

export default Book
