import React from 'react';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { FcSearch } from "react-icons/fc";
import { Link } from 'react-router';
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import avatarImg from "../assets/avatar.png"
import { useState } from 'react';

//dropdown menu
const navigation=[
  {name:'Dashboard' , href:'/dashboard'},
  {name:'Orders' , href:'/order'},
  {name:'Cart Page',href:'/cart'},
  {name:'Dashboard',href:'/checkout'},
]

//conditional rendering of user
let currentUser=false;
const Navbar = () => {

//dropdown menu
const [isDropDown,setIsDropDown]=useState(false);

 return (
<header className=' py-8 px-10 border-2 border-black-500'>
    <nav className='flex justify-between border-2 border-sky-500'>
        {/*left side */}
        <div className='flex items-center '>
            <Link to=""><HiMiniBars3CenterLeft className='mr-10'/> </Link>
           <div className='flex bg-slate-200 p-2 rounded-md'>
           <FcSearch className='mt-1  mr-2'/>
           <input type="text" placeholder="What are you looking for" className='border-none focus:outline-none bg-slate-200 pr-20'/>
           </div>
        </div>
        {/*right side */}
        <div className='flex items-center relative'>
        <div>
            {currentUser ? <>
                <button onClick={()=>setIsDropDown(!isDropDown)}>
                    <img src={avatarImg} alt="avatar_image" className='relative mr-5'/>
                </button>         
                {/*Show Dropdowns    */}
            {isDropDown && (
              <div className='absolute mt-1 '>
                <ul className='pr-10 bg-slate-100 z-10 '>
                  {
                    navigation.map((item)=>(
                      <li key={item.name} className='hover:bg-slate-300  pl-2'>
                        <Link to={item.href}>
                        {item.name}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            )}</>: (
               <Link to="/login"><FaRegUser className='mr-5' /></Link> 
            )}
        </div>
           <button><FaRegHeart className='mr-5'/></button>
           <div className='flex items-center bg-yellow-300 py-2 px-2 rounded-xl'>
            <Link to="/cart"> <PiShoppingCartLight className='ml-3 mr-3' />
            </Link>
            <span className='ml-3 mr-8'>Basket</span>
           </div> 
        </div>
    </nav>
</header>
  )
}

export default Navbar
