import React from 'react'
import { Link } from 'react-router-dom' 

export default function DisplayProducts(props) {
  console.log(props.productArray);
  let products = props.productArray
  return (
    <div classNameName='container mt-3'>
      <div classNameName="row gy-3" >
        {
          products && products.map(product => {
            return (
              <div classNameName="col-3" key={product.id}>
                <div classNameName="card" style={{ width: 16 + 'rem' }}>
                  <img src={product.thumbnail} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{product.title.substring(0,15)}</h5>
                      <p className="card-text">{product.description.substring(0,75)}...</p>
                      <div classNameName='d-flex justify-content-between'>
                      <p className="card-text">{product.price}</p>
                      <p className="card-text fw-bold">{product.category}</p>
                      </div>
                      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                      <div classNameName='d-flex justify-content-between'>
                        <Link to='/' className="btn btn-primary">Add to cart</Link>
                        <Link to={`/Products/${product.id}`} className="btn btn-success">View more</Link>
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
