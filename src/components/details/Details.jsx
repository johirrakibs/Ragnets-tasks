import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './details.css';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import { addItem } from '../../features/addToCourtSlice';
import Navbar from '../../common/navbar/Navbar';

const Details = () => {
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
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      console.log('Product already in cart');
    } else {

      cartItems.push(product);
      localStorage.setItem('cart', JSON.stringify(cartItems));
      console.log('Product added to cart');
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className='details-container'>

        <div className='details-contain'>
          <h2>Product Details</h2>
          {product ? (
            <div className='details-flex'>
              <img src={product.image} alt='Product Image' />
              <div className='details-btn'>
                <button type='button' onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
              <div className='details-card'>
                <h3 className='pro-title'>{product.title}</h3>
                <p className='pro-price'>{product.price}</p>
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

export default Details;