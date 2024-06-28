import React from 'react'
import '../style/banner.css'
import BannerCard from './BannerCard'
import rasm from '../image/bannerright.png'
import rasm1 from '../image/bannerright2.png'
function Banner() {
  return (
    <section className='banner'>
      <div className="container">
        <div className="banner__grid">
            <BannerCard number="1" text='Apply' desc='Submit a complete application to the dYdX Grants Team including as many details as possible about the proposed idea and their background. '/>
            <div className="img">
                <img className='bannerImg1' src={rasm} alt="" />
            </div>
            <BannerCard number="2" text='Interview' desc="If your application is selected, the dYdX Grants will conduct 1-2 interviews to collect more information on the Applicant's background and the proposal. "/>
            <div className="img">
                <img className='bannerImg2' src={rasm1} alt="" />
            </div>
            <BannerCard number="3" text='Grant offer' desc='The dYdX Grants team will determine if the proposal fits into the grant program. A vesting schedule and timeline for product development reports will also be determined in the offer; '/>
        </div>
      </div>
    </section>
  )
}

export default Banner
