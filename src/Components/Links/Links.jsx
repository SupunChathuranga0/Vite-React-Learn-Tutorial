import React from 'react'
import MenuLink from '../MenuLink/MenuLink'

function Links() {
  return (
    <div className='menu'>
        <MenuLink linkname = "Home" url="/"/>
        <MenuLink linkname = "Blog" url="/blog"/>
        <MenuLink linkname = "Contact" url="/contact"/>
        <MenuLink linkname = "Login" url="/login"/>

    </div>
  )
}

export default Links
