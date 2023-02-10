import React from 'react'
import './Home.css'
import Product from '../Product'
import productsData from '../../assets/productsData.json'

function Home() {
  return (
    <div>
    <div className="home">
        <div className="home__container">
            <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="e-commerce" className="home__image" />
            {/* <div className="home__row">
                <Product />
                <Product />
            </div>
            <div className="home__row">
                <Product />
                <Product />
                <Product />
            </div>
            <div className="home__row">
                <Product />
            </div> */}
            {productsData.map((product) => (
                <Product item={product} key={product.id} />
            ))}
        </div>
    </div>
    </div>
  )
}

export default Home