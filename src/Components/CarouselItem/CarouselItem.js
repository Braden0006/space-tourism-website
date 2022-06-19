import React from 'react'

import './CarouselItem.css'

export default function CarouselItem({ children }) {
  return (
    <div className='carousel-item'>
        {children}
    </div>
  )
}
