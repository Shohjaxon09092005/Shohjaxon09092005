import React from 'react'
import rasm from '../image/footerRight.png'
import '../style/footer.css'
import rasm1 from '../image/foooterGroup.png'
import rasm2 from '../image/footerLink.png'
import rasm3 from '../image/Twitter - Negative.png'
import rasm4 from '../image/Group.png'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <footer className='footer' >
      <div className="container">
        <div className="footer__content">
          <h6>Have a project in mind?</h6>
          <h2>Let’s create something awesome.</h2>
          <button>Apply for grant <img src={rasm} alt="" /></button>
        </div>
        <div className="footer__wrapper">
          <ul className='footer__list'>
            <NavLink to='/'><img src={rasm1} alt="" /></NavLink>
            <li>About</li>
            <li>FAQ</li>
            <li>Brand assets</li>
            <li>dYdX Foundation <img src={rasm2} alt="" /></li>
            <li>dYdX trading <img src={rasm2} alt="" /></li>
          </ul>
          <div className="footer__logo">
            <img src={rasm3} alt="" />
            <img src={rasm4} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
