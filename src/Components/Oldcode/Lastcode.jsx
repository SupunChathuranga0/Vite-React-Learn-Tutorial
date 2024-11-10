import React from 'react'
import './oldcode.css'
import BodyContent from '../BodyContent/BodyContent';
import HeaderContent from '../../Components/HeaderContent/HeaderContent';
import logo from '../../../src/assets/react.svg'
function Lastcode() {
  return (

    <>
    <div className="wrapper">
      <HeaderContent/>
      <BodyContent>
        <button>Click me</button>
      </BodyContent>
      <BodyContent >
        <div id='div2'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam molestias sequi distinctio quae itaque accusamus, voluptatibus fugiat, ea quidem libero alias nulla vitae, nihil aspernatur esse voluptas sunt? Nostrum.</p>
        <br/>
        <a href="http://www.google.com" >Google</a>
        <br />
        <img id='svg' src="vite.svg" alt="" />
        <br />
        <img className='reactlogo' src={logo} alt="react logo" /> 
        </div>
      </BodyContent>
    </div>
    </>
  )
}

export default Lastcode;
