import React from 'react'
import '../style/swiperCard.css'
function SwiperCard({span,text,desc,photo}) {
  return (
    <div className='swiperCard'>
        <span>{span}</span>
        <h3>{text}</h3>
        <h6>Funding amount:
        $5,000 - $6,000</h6>
        <p>{desc}</p>
        <img src={photo} alt='photo1' />
      
    </div>
  )
}

export default SwiperCard
