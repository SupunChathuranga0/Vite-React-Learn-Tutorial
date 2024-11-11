import React from 'react'

function ArrowFunction() {
    const num1 = 5;
    const num2 = 10;
    const total = num1+num2;

    function hello1(e){
        console.log('Hello1 '+total,e.target);
    }
    const ArrowFunction = () => {
            console.log('ArrowFunction');
    }
    function hello3(name){
        console.log('Hello3 '+name);
    }
    const ArrowFunction2 = (name,e) => {
        console.log('ArrowFunction2 '+name,e);
}
       
  return (
    <>
    <div>
        <button onClick={hello1}>Click me</button>
        <button onClick={ArrowFunction}>Click me2</button>
        <button onClick={()=>{hello3('Supun')}}>Click me 3</button>
        <button onClick={(e)=>{ArrowFunction2('Supun',e)}}>Click me 4</button>


    </div>
    </>
  )
}

export default ArrowFunction
