import React from 'react'
import './BodyContent.css'

function BodyContent(props) {
  return (
    // <div id='bodycontent'>
    //     <p>main content</p>
    // </div>
<>
    <div className='content'>
      {props.children}
    </div>
    </>
  )
}

export default BodyContent;
