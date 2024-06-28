import React from 'react'

function BannerCard({number,text,desc}) {
  return (
    <div className='bannerCard'>
      <h2>{number}</h2>
      <h4>{text}</h4>
      <p>{desc}</p>
    </div>
  )
}

export default BannerCard
