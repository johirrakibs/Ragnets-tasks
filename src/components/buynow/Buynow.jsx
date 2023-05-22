import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import "./buynow.css"

import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../features/addToCourtSlice';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
// import { addItem, delteItem } from '../../../features/products/addToCourtSlice';

const Buynow = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addItem(product));
    const cartData = localStorage.getItem('cart');
    const cartItems = cartData ? JSON.parse(cartData) : [];

    // Check if the product is already in the cart
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      // Product already in cart
      console.log('Product already in cart');
    } else {
      // Add the product to the cart
      cartItems.push(product);
      localStorage.setItem('cart', JSON.stringify(cartItems));
      console.log('Product added to cart');
    }
  };

  return (
    <><Header />
    <div className='details-container'>
      
      <div className='details-contain'>
        <h2>Product Details</h2>
        {product ? (
          <div className='details-flex'>
            <img src={product.image} alt='Product Image' />
            <div className='details-btn'>
            <Link to="/cart" className='confirm-buy'><button type='button' onClick={handleAddToCart} >
            Confirm Buy Now
          </button></Link>
          </div>
            <div className='details-card'>
              <h3 className='pro-title'>{product.title}</h3>
              <p className='pro-price'>Price : {product.price}</p>
              <p className='pro-description'>{product.description}</p>
            </div>
           
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      
    </div>
<Footer />
    </>
  );
};

export default Buynow;