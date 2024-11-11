import React from 'react'
import MenuLink from '../MenuLink/MenuLink'

function Links() {
  return (
    <div className='menu'>
        <MenuLink linkname = "Home" url="#home"/>
        <MenuLink linkname = "Abount" url="#abount"/>
        <MenuLink linkname = "Contact" url="#contact"/>
        <MenuLink linkname = "Login" url="#login"/>
    </div>
  )
}

export default Links
