import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./landpage.css";
import { Link, useParams } from 'react-router-dom';

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className='pro-container'>
      <div className='por-contain'>
        <h2>Products</h2>
        <div className="product-grid ">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: {product.price}</p>

              <div className='pro-btn'>
                <div className='pro-buy-btn'><button ><Link className='details-btn' to={`/details/${product.id}`}>Details</Link></button></div>
                <div className='pro-buy-btn'><button ><Link className='details-btn' to={`/buynow/${product.id}`}>Buy Now</Link></button></div>
              </div>


            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default LandingPage;