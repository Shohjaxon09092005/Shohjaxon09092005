import React from 'react'
import '../style/fundedGrid.css'
import SwiperCard from './SwiperCard'
import f1 from '../image/f1.png'
import f2 from '../image/f2.png'
import f3 from '../image/f3.png'
import f4 from '../image/f4.png'
import f5 from '../image/f5.png'
import f6 from '../image/f6.png'
import f7 from '../image/f7.png'
import f8 from '../image/f8.png'
import f9 from '../image/f9.png'
import SwiperDiv from './SwiperDiv'
function FundedGrid() {
  return (
    <section className='fundedGrid'>
      <div className="container">
        <div className="fundedGrid__grid">
            <SwiperCard span='Category' text='Hedgie banner' desc='They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.' photo={f1}  />
            <SwiperCard span='Category' text='Hedgie educational content' desc='They are mathematically consistent in the sense that no one rule would ever violate another.' photo={f2}  />
            <SwiperDiv span='Category' text='Hedgie educational content' desc='This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then ...'photo={f3}/>
            <SwiperDiv span='Category' text='Japanese content website' desc='Historically, the electron, for example, was thought to behave like a particle, and then it was found that in many respects it behaved like a ...'photo={f4}/>
            <SwiperCard span='Category' text='DGP referral program' desc='They finally obtained a consistent description of the behavior of matter on a small scale.' photo={f5}  />
            <SwiperDiv span='Category' text='Hedgie educational content' desc='This proved to be impossible using the traditional concepts of space and time. Einstein developed a ne...'photo={f6}/>
            <SwiperCard span='Category' text='Rust SDK' desc='At the end of the 19th century, physics appeared to be at an apex. Several people are reported to have said something like this' photo={f7}  />
            <SwiperCard span='Category' text='Hack for Inclusion Sponsorship' desc='Later, however (in the beginning of the twentieth century), it was found that light did indeed sometimes behave like a particle. ' photo={f8}  />
            <SwiperCard span='Category' text='Gitcoin Grants Round 13 sponsorship' desc='So we have to learn about them in a sort of abstract or imaginative fashion and not by connection with our direct experience. ' photo={f9}  />



        </div>
      </div>
    </section>
  )
}

export default FundedGrid
