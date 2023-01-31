import React from 'react'
import { SlideItem } from '../SlideItem/SlideItem';
import './styles.scss';


export const Slider = () => {
  return (
    <div className='slider'>
    <SlideItem />
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
