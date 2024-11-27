import React from 'react'
import BannerImage from '../../assets/banner.png'

const Banner = () => {
  return (
    <> 
    <div className='flex pt-10 px-8'>
     <div>
      {/*Left section */}
      <h1 className='text-[#0D0842] text-3xl font-medium drop-shadow-lg mb-10'>New Releases This Week</h1>
      <p className='text-wrap'>It time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week new releases offer something for everyone</p>
      <button className='btn-primary mt-10'>Subscribe</button>
    </div>
    <div>
      {/*Right section */}
      <img src={BannerImage} alt="banner_image" className="border border-sky-500" />
    </div>
    
  </div>
  </>
  )
}

export default Banner
