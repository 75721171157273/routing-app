import React, { useEffect, useState } from 'react'

export default function FetchProductById() {
    let urlParameter = useParams()
    console.log(urlParameter); // urlParameter = {productId: '4}

    let [product, setProduct] = useState(null)
    async function FetchProductById(productId){
        let response = await fetch(`https://dummyjson.com/products/${productId}`)
        let productObject = await response.json()
        setProduct(productObject)
    }
    useEffect(()=>{ FetchProductById(urlParameter.productId)}, [])
  return (
    <div>
      
    </div>
  )
}
