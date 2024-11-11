import React from 'react'
import './HeaderContent.css'
import logo from '../../assets/react.svg'
import Links from '../Links/Links'



function HeaderContent() {
  return (
      // <div id='navcontent'>
      //       <h3>Header content</h3>
      // </div>
      <div id='navcontent'>
         <img className='img' src ={logo}/>
        <Links/>
      </div>

  )
}

export default HeaderContent
