import React from 'react'
import '../'
import rasm from '../image/1.png'
import '../style/hero.css'
import rasm1 from '../image/fi_arrow-right.png'
import rasm2 from '../image/hero strelka.png'
function Hero() {
  return (
    <section className='hero'>

      <div className="container">
        <div className="hero__content">
          <h1>Powering the future of dYdX through  community <span>grants <img className='span__img' src={rasm} alt="" /></span> </h1>
          <div className="hero__btn">
            <button>Discover RFPs</button>
            <button>Apply for grant <img src={rasm1} alt="" /></button>
          </div>
        </div>

        <div className="hero__wrapper">
          <div className="hero__card">
            <h4>100+ </h4>
            <p>projects funded</p>
          </div>
          <div className="hero__card">
            <h4>$3+ milion</h4>
            <p>awarded</p>
          </div>
          <div className="hero__card">
            <h4>400+ </h4>
            <p>projects funded</p>
          </div>

        </div>
        <div className="img">
          <img className='strelka' src={rasm2} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero
