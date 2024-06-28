import React from 'react'
import '../style/funded.css'
import rasm from '../image/switch off.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
function Funded() {
  return (
    <section className='funded'>
      <div className="container">
        <h2>Funded grants</h2>  
        <div className="olma">
          <Swiper
     navigation={true} modules={[Navigation]}
        slidesPerView={2}   
        loop={true}
       
        className="mySwiper"
      >
        <SwiperSlide  className='slide'> <span className='slide1'>All</span></SwiperSlide>
        <SwiperSlide className='slide'> Technical / Tool Development</SwiperSlide>
        <SwiperSlide className='slide'> Governance</SwiperSlide>
        <SwiperSlide className='slide'> Growth / Marketing</SwiperSlide>
        <SwiperSlide className='slide'>Analytics</SwiperSlide>
        <SwiperSlide className='slide'> Third Party Provider</SwiperSlide>
        
      </Swiper>
        </div>
        
        <ul>
            <li>All</li>
            <li>Technical / Tool Development</li>
            <li>Governance</li>
            <li>Growth / Marketing</li>
            <li>Analytics</li>
            <li>Third Party Provider</li>
        </ul>
        <div className="funded__logo">
            <img src={rasm} alt="" />
            <h4>Show only completed</h4>
        </div>
      </div>
    </section>
  )
}

export default Funded
