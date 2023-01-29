import React from 'react'
import './slider.scss';

export const Slider = () => {
  return (
    <div className='slider'>
      <ul className='slider__list'>
        <li className='slider__item'>
          <div className='slider__item-content'>
            <h2 className='slider__title'>The Power of Simplicity</h2>
            <p className='slider__subtitle'>Instead of spending time searching for the right app, our AI will bring the right app to you.</p>
            <button className='slider-button'>Learn</button>
          </div>
        </li>
      </ul>
   <div className='slider__dots'>
   <input className='slider__dot' type="radio"/>
   <input className='slider__dot' type="radio"/>
   <input className='slider__dot slider__dot--active' type="radio"/>
   <input className='slider__dot' type="radio"/>
   <input className='slider__dot' type="radio"/>
   </div>
    </div>
  )
}
