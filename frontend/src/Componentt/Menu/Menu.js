
import React from 'react'
import images from '../images/home-foodi-3.png'
import './menu.css'

export const Menu = () => {
  return (
    <div className='main-menu'>

      <div className='foodie2'>
        <img src={images} alt="Something went wrong!" className='foodi3' />
      </div>
      {/* <select name="cars" id="cars">
        <optgroup label="Swedish Cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
        </optgroup>
        <optgroup label="German Cars">
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </optgroup>
      </select> */}

    </div>
  )
}
