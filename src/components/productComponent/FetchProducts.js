import React, { useEffect, useState } from 'react'
import DisplayProducts from './DisplayProducts'

export default function FetchProducts() {
  let[products, setProducts] = useState(null)
  async function fetchAllProducts(){
    let response = await fetch("https://dummyjson.com/products",{ method:"get"})
    let productObject = await response.json()
    setProducts(productObject.products)
    }
    useEffect(()=>{fetchAllProducts()}) // used to handle the sideEffect of useState
  return (
    <div>
      <DisplayProducts productArray={products}/>
    </div>
  )
}




