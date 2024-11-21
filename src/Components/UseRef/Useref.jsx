import React, { useEffect, useRef, useState } from 'react'

function Useref() {

    const [input,setinput] = useState("<Input Text goes here>");

    const [count,setcount] = useState(0);

    const countref = useRef(0);
    const inputref = useRef();
    const inputref1 = useRef();
    const inputref2 = useRef();


    



    useEffect(() => {
        // setcount((count) => count + 1)
        countref.current = countref.current +1;
        inputref.current.style.backgroundColor = "red";
        inputref1.current.style.backgroundColor = "yellow";

        
    })

    const handlechange = (e) =>{
        if(e.target.value.length == 0){
            setinput("<Input Text goes here>")
        }else{
            setinput(e.target.value);
        }
    }

    const handleclick = () =>{
        if(inputref2.current.value == ""){
            inputref2.current.focus()
        }
        else if(inputref2.current.value > 50){
            alert('success')
        }else{
            alert('error')
        }
    }

  return (
    <>
    <div>
        <input type="text" onChange={handlechange} ref={inputref1} />
        <p>You have input {input}</p>
        {/* <p>Rendered {count}</p> */}
        <p>Rendered {countref.current}</p>
        <input type="text" ref={inputref}/>
        <br /><br /><br /><br />

        <input type="text" ref={inputref2}/>
        <button onClick={handleclick}>Validate</button>
    </div>
    </>

  )
}

export default Useref
