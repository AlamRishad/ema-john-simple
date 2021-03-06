import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';


import './Shop.css';
import Product from '../Product/Product';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10)
    return (
        <div className="shop-container">
            <div className="product-cotainer">
        
            {
                products.map(product => <Product product={product}></Product>)
            }
            
            </div>
            <div className="cart">
                <h1>  This is cart</h1>
             </div> 
        </div>
    );
};

export default Shop;