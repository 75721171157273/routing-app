import React from 'react'
import { Link } from 'react-router-dom' 

export default function DisplayProducts(props) {
  console.log(props.productArray);
  let products = props.productArray
  return (
    <div className='container mt-3'>
      <div className="row gy-3" >
        {
          products && products.map(product => {
            return (
              <div className="col-3" key={product.id}>
                <div class="card" style={{ width: 16 + 'rem' }}>
                  <img src={product.thumbnail} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">{product.title.substring(0,15)}</h5>
                      <p class="card-text">{product.description.substring(0,75)}...</p>
                      <div className='d-flex justify-content-between'>
                      <p class="card-text">{product.price}</p>
                      <p class="card-text fw-bold">{product.category}</p>
                      </div>
                      {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                      <div className='d-flex justify-content-between'>
                        <a href="#" class="btn btn-primary">Add to cart</a>
                        <Link to={`/Products/${product.id}`} class="btn btn-success">View more</Link>
                      </div>
                    </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
