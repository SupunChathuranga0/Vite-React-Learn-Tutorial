import React from 'react'
import './Product.css'

function Product(props) {
  return (
    <>
    <ul>
        <li><b>Product Title :</b> {props.title}</li>
        <li><b>Product description :</b> {props.description}</li>
        <li><b>Product category :</b> {props.category}</li>
        <li><b>Product rate :</b> {props.rating.rate}</li>
        <li><b>Product count :</b>{props.rating.count}</li>
        <li><b>Product Price :</b>{props.price}</li>
    </ul>
    
    </>

  )
}

export default Product
