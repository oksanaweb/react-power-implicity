import React from 'react'
import './styles.scss'

export const SlideItem = () => {
  return (
    <ul className='slider__list'>
        <li className='slider__item'>
          <div className='slider__item-content'>
            <h2 className='slider__title'>The Power of Simplicity</h2>
            <p className='slider__subtitle'>Instead of spending time searching for the right app, our AI will bring the right app to you.</p>
            <div className='slider-button-wrap'></div><button className='slider-button'>Learn</button><div/>
          </div>
        </li>
      </ul>
  )
}
