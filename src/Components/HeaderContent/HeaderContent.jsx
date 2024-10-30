import React from 'react'
import './HeaderContent.css'
import logo from '../../assets/react.svg'
import MenuLink from '../MenuLink/MenuLink'


function HeaderContent() {
  return (
      // <div id='navcontent'>
      //       <h3>Header content</h3>
      // </div>

      <div id='navcontent'>
        <a href="http://www.react.dev"><img src={logo} alt="React" />
        </a>
        <div>
          <MenuLink linkname = "Home" url="#home"/>
          <MenuLink linkname = "Abount" url="#abount"/>
          <MenuLink linkname = "Contact" url="#contact"/>
          <MenuLink linkname = "Login" url="#login"/>
          
        </div>
      </div>

  )
}

export default HeaderContent
