import React from 'react'
import '../style/blog.css'
import rasm from '../image/blogImg.png'
import rasm1 from '../image/arrow-right.png'
import rasm2 from '../image/block1.png'
import rasm3 from '../image/block2.png'
function Blog() {
    return (
        <section className='blog'>
            <div className="container">
                
                <div className="blog__list">
                    <h2> <span>What’s new? <img src={rasm} alt="" /></span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</p>
                    <div className="blog__wrapper">
                        <h4> Read more on our blog </h4>
                        <img src={rasm1} alt="" />
                    </div>
                </div>
                <div className="blog__grid">
                    <div className="blog__card">
                        <img src={rasm2} alt="" />
                        <div className="blog__content">
                          <span>Funding round</span>
                        <h5>Round 9 of approvals</h5>
                        <h6>January 1, 2022</h6>  
                        </div>
                        
                    </div>
                    <div className="blog__card">
                        <img src={rasm3} alt="" />
                        <div className="blog__content">
                          <span>Funding round</span>
                        <h5>Round 8 of approvals</h5>
                        <h6>January 1, 2022</h6>  
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
