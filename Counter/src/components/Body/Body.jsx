import React, { useState, useEffect } from 'react'
import { Button } from '../Button/Button'
import { images } from '../Data/Images'
import './Body.css'

export function Body () {
  const [counter, setCounter] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  console.log(setVisible)

  const handleClickCounter = (value) => {
    if (value === 'add') {
      setCounter(counter + 1)
    } else if (value === 'subtract' && counter > 0) {
      setCounter(counter - 1)
      setCurrentImageIndex(0)
    } else if (value === 'reset') {
      setCounter(0)
      setCurrentImageIndex(0)
    }
  }

  useEffect(() => {
    if (counter >= 15 && currentImageIndex === 0) {
      setCurrentImageIndex(1)
    } else if (counter >= 30 && currentImageIndex === 1) {
      setCurrentImageIndex(2)
    } else if (counter >= 50 && currentImageIndex === 2) {
      setCurrentImageIndex(3)
    } else if (counter >= 70 && currentImageIndex === 3) {
      setCurrentImageIndex(4)
    } else if (counter >= 85 && currentImageIndex === 4) {
      setCurrentImageIndex(5)
    }
  }, [counter, currentImageIndex])

  return (
    <>

      <h2>Lets grow a Captus</h2>

      <div className='container'>
        <Button onClick={() => handleClickCounter('subtract')}>-</Button>
        {visible && <img src={images[currentImageIndex]} alt='Counter Image' className='image-transition' />}

        <Button onClick={() => handleClickCounter('add')}>+</Button>

      </div>
      <h2>{counter}</h2>
      <Button onClick={() => handleClickCounter('reset')}>Reset</Button>

    </>
  )
}
