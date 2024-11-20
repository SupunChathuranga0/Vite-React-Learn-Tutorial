import React, { useState } from 'react'
import './Usestate.css'

function Usestate() {
    // let num1 =2;

    const [num1,setnum1] = useState(2)
    const [count,setcount] = useState(0)

    function handleClick(){
        setnum1(3)
    }

    const decrementFunction = () => {

         setcount(count - 1)
    }
    const incrementFunction = () => {
        setcount(count + 1)
    }

    let mynumber = 10;

    if(mynumber == 5){
        alert("equal to 5")
    }else{
        alert("not equal to 5")
    }


  return (
    <>
    <div>
    <button onClick={handleClick}>Click</button>
    <p>{num1}</p>

    <p>counter</p>
    <button onClick={decrementFunction}>-</button>
    <button onClick={incrementFunction}>+</button>
    <p>{count}</p>
    </div>
    </>

  )
}

export default Usestate
