import React from 'react'
import '../style/swiperDiv.css'
function SwiperDiv({ span, text, desc, photo }) {
  return (
    <div className='swiperDiv'>
      <div className="divCard">

      </div>
      <div className="swiper__content">
        <span>{span}</span>
        <h3>{text}</h3>
        <h6>Funding amount:
          $5,000 - $6,000</h6>
        <p>{desc}</p>
        <img src={photo} alt='photo1' />
      </div>

    </div>
  )
}

export default SwiperDiv
