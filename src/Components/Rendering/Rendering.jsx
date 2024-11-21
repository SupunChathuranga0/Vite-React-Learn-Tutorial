import React from 'react'
import Loggedin from './LogComponent/LoggedIn'
import Loggeout from './LogComponent/Loggedout'
import './Rendering.css'

function Rendering() {

    const loggedin = true;
    const names = ["john", "smith"];
    const namecount = names.length;
  return (
    <>
    <div>
        {loggedin && <Loggedin/>}
        {!loggedin && <Loggeout/>}


        {/* condtion Rendering */}
        {/* {namecount > 0 && names.map((name) =>{
            return <h2>{name}</h2>
        })}
        {namecount == 0 && <p>None Provided</p>} */}

        {/* ternary operaton */}
        {namecount > 0 ? (names.map((name) =>{
            return <h2>{name}</h2>
        })) : (<p>None Provided</p>)}

    </div>
    
    </>

  )
}

export default Rendering
