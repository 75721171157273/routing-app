import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    let urlParameter = useParams(); //useParams = It returns an object of key-value pairs where the keys are the parameter names defined in the route, and the values are the actual values from the URL.
    console.log(urlParameter); //urlParameter = {productId: '4'}

    let [product, setProduct] = useState(null)
    async function fetchProductById(productId) {
        let response = await fetch(`https://dummyjson.com/products/${productId}`)
        let productObject = await response.json()
        setProduct(productObject)
    }
    useEffect(() => { fetchProductById(urlParameter.productId) }, [])
    return (
        <div>
            { product && <h1>{product.description}</h1> }
        </div>
    )
}
