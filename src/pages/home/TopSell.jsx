import React from 'react'
import Book from './Book'

const TopSell = () => {
  return (
    <div className='px-7'>
      <h2 className="text-xl text-2 text-[#0D0842] font-semibold ">Top Sellers</h2>
      <select id="select" className="mt-5 bg-slate-100 p-0.5 rounded-md">
      <option value="Choose a genre">Choose a genre</option>
        <option value="Buisness">Buisness</option>
        <option value="Fiction">Fiction</option>
        <option value="Horror">Horror</option>
        <option value="Adventure">Adventure</option>
      </select>
      <Book/>
    </div>
  )
}

export default TopSell
