import React from 'react'
import '../style/accardion.css'
import rasm from '../image/arracdion.png'
import rasm1 from '../image/fi_plus.png'
import rasm2 from '../image/tracet.png'

function Accardion() {
    return (
        <section className='accardion'>
            <div className="accardion__content">
                <h2>Frequently asked  <span>questions <img src={rasm} alt="" /></span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</p>
            </div>
            <div className="accardion__wrapper">
                <div className="accardion__card">
                    <h4>How do I apply?</h4>
                    <img src={rasm1} alt="" />
                </div>
                <div className="accardion__card">
                    <h4>Can I apply as a U.S. based person/company?</h4>
                    <img src={rasm1} alt="" />
                </div>
                <div className="accardion__card">
                    <h4>How will I be compensated?</h4>
                    <img src={rasm1} alt="" />
                </div>
                <div className="accardion__card">
                    <h4>What type of project will qualify for a Grant?</h4>
                    <img src={rasm1} alt="" />
                </div>
                <div className="accardion__card">
                    <h4>What is the application timeline? When can I expect to hear back?</h4>
                    <img src={rasm1} alt="" />
                </div>
                <div className="accardion__card">
                    <h4>How can I increase my chances of getting funded?</h4>
                    <img src={rasm1} alt="" />
                </div>
                <div className="accardion__card">
                    <h4>How often do you approve new Rounds of funding?</h4>
                    <img src={rasm1} alt="" />
                </div>
                <div className="accardion__content1 ">
                <h2>Application <span className='accs' > process  <img className='acc' src={rasm2} alt="" /></span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</p>
            </div>
            </div>
        </section>
    )
}

export default Accardion
