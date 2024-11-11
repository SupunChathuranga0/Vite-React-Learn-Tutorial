import React from 'react'
import './Root.css'
import HeaderContent from '../HeaderContent/HeaderContent'
import BodyContent from '../BodyContent/BodyContent'

function ReactRoot() {
  return (
    <>
    <div>

    <HeaderContent/>
    <BodyContent>
        <h3>Home page</h3>
    </BodyContent>

    </div>
    </>

  )
}

export default ReactRoot
