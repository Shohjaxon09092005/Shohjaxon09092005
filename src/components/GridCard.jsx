import React from 'react'

function GridCard({text,desc,span,btn_text}) {
  return (
    <div className='gridCard'>
        <div className="gridCard__content">
           <h3>{text}</h3>
      <p>{desc}</p>
      <span>{span}</span> 
        </div>      
      <button>{btn_text}</button>
    </div>
  )
}

export default GridCard
