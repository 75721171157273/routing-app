import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DisplayProductById from './DisplayProductById';

export default function FetchProductById() {
    let urlParameter = useParams()
    console.log(urlParameter);
    let productId = urlParameter.productId // urlParameter = {productId: '4}

    let [product, setProduct] = useState(null)
    async function FetchProductById(productId){
        let response = await fetch(`https://dummyjson.com/products/${productId}`)
        let productObject = await response.json()
        setProduct(productObject)
    }
    useEffect(()=>{ FetchProductById(urlParameter.productId)})
  return (
    <div>
      {product && <DisplayProductById productObject={product}/>}
    </div>
  )
}
