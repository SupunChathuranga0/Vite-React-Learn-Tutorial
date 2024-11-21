import React, { useEffect, useState } from 'react'
import './Usestate.css'

function Usestate() {
    // let num1 =2;

    const [num1,setnum1] = useState(5);
    const [count,setcount] = useState(0);
    const [clicks,setclicks] = useState(0);
    const [posts,setposts] = useState([]);


    function handleClick(){
        setnum1(3)
    }

    const decrementFunction = () => {

         setcount(count - 1)
    }
    const incrementFunction = () => {
        setcount(count + 1)
    }

    // useEffect(() => {
    //     console.log("hi")
    // },[num1])

    // useEffect(() => {
    //     document.title = `You clicked ${clicks} times`;
    // },[count]);

    useEffect(()=>{
        document.title = `Your current ${count} count `;
    });

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users/1/posts")
        .then((resp) => resp.json())
        .then((blogPosts) => setposts(blogPosts));

        console.log('run');

    },[])


    // let mynumber = 10;
    // if(mynumber == 5){
    //     alert("equal to 5")
    // }else{
    //     alert("not equal to 5")
    // }






  return (
    <>
    <div>
    <button onClick={handleClick}>Click</button>
    <p>{num1}</p>

    <p>counter</p>
    <button onClick={decrementFunction}>-</button>
    <button onClick={incrementFunction}>+</button>
    <p>{count}</p>


    <p>You Clicked {clicks} Times</p>
    <button onClick={()=> setclicks(clicks +1 )}>
        click me
        </button>

    <ul className='prod_list'  style={{color:"black","paddingLeft" :"20px"}}>
       {posts && posts.map((post) => <li key={post.id} style={{listStyleType:"circle"}}>{post.title}</li>)} 
    </ul>


    </div>
    </>

  )
}

export default Usestate
