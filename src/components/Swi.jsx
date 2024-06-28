import React from 'react'
import '../style/swiper.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import rasm1 from '../image/Avatar group.png'
import rasm2 from '../image/Avatar group2.png'
import rasm3 from '../image/Avatar group3.png'
import rasm4 from '../image/Avatar group4.png'

// Import Swiper styles
import 'swiper/css';
import SwiperCard from './SwiperCard';
import SwiperDiv from './SwiperDiv';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// import required modules
function Swi1() {
  return (
    <section className='swi'>
      <div className="container">
        <div className="ota">
          <Swiper
          navigation={true} modules={[Navigation]}
            slidesPerView={3.2}
            spaceBetween={30}

            loop={true}

            className="mySwiper"
          >
            <SwiperSlide><SwiperCard span='Crowdfund' text='Funding rates page' desc='Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.' photo={rasm1} /></SwiperSlide>
            <SwiperSlide><SwiperDiv span='Edition' text='Tradingview integration' desc='The grant will be used to build a web application that integrates Tradingview strategies into a dYdX Trading account to execute trades directly through a strategy. Users will be able to tap into Tradingview resources and test out different ...' photo={rasm2} /></SwiperSlide>
            <SwiperSlide><SwiperCard span='Entry' text='Rewards optimization research and paper' desc='The Grant will be used to write a full research report and code samples that will determine optimal trading strategies for rewards maximization. The paper will be marketed across several platforms and shared among trading circles to help readership.' photo={rasm3} /></SwiperSlide>
            <SwiperSlide><SwiperCard span='Crowdfund' text='DAO Organizational Structure Research' desc='The grant will be used to fund a deep dive research report around historical and existing DAO structures with guidance around successful best practices. Topics will include organization structure, reporting & accountability, contributors, funding, and more.' photo={rasm4} /></SwiperSlide>

          </Swiper>
        </div>
        <div className="ona">
          <Swiper
           loop={true}
           navigation={true} modules={[Navigation]}
            slidesPerView={2}
            spaceBetween={30}

            className="mySwiper"
          >
            <SwiperSlide><SwiperCard span='Crowdfund' text='Funding rates page' desc='Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.' photo={rasm1} /></SwiperSlide>
            <SwiperSlide><SwiperDiv span='Edition' text='Tradingview integration' desc='The grant will be used to build a web application that integrates Tradingview strategies into a dYdX Trading account to execute trades directly through a strategy. Users will be able to tap into Tradingview resources and test out different ...' photo={rasm2} /></SwiperSlide>
            <SwiperSlide><SwiperCard span='Entry' text='Rewards optimization research and paper' desc='The Grant will be used to write a full research report and code samples that will determine optimal trading strategies for rewards maximization. The paper will be marketed across several platforms and shared among trading circles to help readership.' photo={rasm3} /></SwiperSlide>
            <SwiperSlide><SwiperCard span='Crowdfund' text='DAO Organizational Structure Research' desc='The grant will be used to fund a deep dive research report around historical and existing DAO structures with guidance around successful best practices. Topics will include organization structure, reporting & accountability, contributors, funding, and more.' photo={rasm4} /></SwiperSlide>

          </Swiper>
        </div>
        <div className="bola">
          <Swiper
           loop={true}
           navigation={true} modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={30}

            className="mySwiper"
          >
            <SwiperSlide><SwiperCard span='Crowdfund' text='Funding rates page' desc='Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.' photo={rasm1} /></SwiperSlide>
            <SwiperSlide><SwiperDiv span='Edition' text='Tradingview integration' desc='The grant will be used to build a web application that integrates Tradingview strategies into a dYdX Trading account to execute trades directly through a strategy. Users will be able to tap into Tradingview resources and test out different ...' photo={rasm2} /></SwiperSlide>
            <SwiperSlide><SwiperCard span='Entry' text='Rewards optimization research and paper' desc='The Grant will be used to write a full research report and code samples that will determine optimal trading strategies for rewards maximization. The paper will be marketed across several platforms and shared among trading circles to help readership.' photo={rasm3} /></SwiperSlide>
            <SwiperSlide><SwiperCard span='Crowdfund' text='DAO Organizational Structure Research' desc='The grant will be used to fund a deep dive research report around historical and existing DAO structures with guidance around successful best practices. Topics will include organization structure, reporting & accountability, contributors, funding, and more.' photo={rasm4} /></SwiperSlide>

          </Swiper>
        </div>


      </div>
    </section>
  )
}

export default Swi1
