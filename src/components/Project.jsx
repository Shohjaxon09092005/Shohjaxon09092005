import React from 'react'
import '../style/project.css'
import rasm from '../image/arrow-right.png'
function Project() {
    return (
        <section className='project'>
            <div className="container">
                <div className="project__list">
                    <h2>Projects built with grants</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</p>
                    <div className="project__wrapper">
                        <h4> View all funded projects </h4>
                        <img src={rasm} alt="" />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Project
