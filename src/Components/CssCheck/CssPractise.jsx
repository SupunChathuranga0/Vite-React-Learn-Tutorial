import React from 'react'
import '../CssCheck/add.css'

function CssPractise() {
    const style_div = {color:'white', padding: '1em', backgroundColor:'blue',fontSize:'1.2rem',}
    const styles_dev1 = {color:'white', fontSize:'1.5rem', backgroundColor:'red', margin:'1em'}
  return (
    <div id='wrapper' >
        <p style={style_div}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat doloribus recusandae quia debitis officiis itaque corrupti minus numquam? Facere ea natus nobis, facilis modi saepe nulla et rem neque nesciunt!</p>

      <p className='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, modi similique. Alias, sint. Blanditiis corrupti quam doloremque, perferendis aliquam laudantium provident odit, in temporibus distinctio quasi, nostrum voluptates nesciunt unde!</p>

      <p style={{color:'white', fontSize:'1.5rem', backgroundColor:'red'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non libero ea necessitatibus quia beatae, molestias iste ut qui illum. Pariatur eveniet ex, id ipsa ad quasi modi iste consequuntur dolor?</p>

      <p style={styles_dev1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus hic quibusdam, accusamus consequuntur architecto placeat fugiat repellendus. Repudiandae earum quod repellat reiciendis consequuntur assumenda atque itaque volussaaptatum, consequatur quo sit.</p>
    </div>
  )
}

export default CssPractise
