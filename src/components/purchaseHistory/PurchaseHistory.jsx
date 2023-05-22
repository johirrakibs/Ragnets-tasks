import { useState, useEffect } from 'react';
import './purchaseHistory.css';
import Header from './../../common/header/Header';
import Navbar from './../../common/navbar/Navbar';
import Footer from '../../common/footer/Footer';


const PurchaseHistory = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem('purchaseHistory');
    const purchaseHistory = JSON.parse(cartData) ? JSON.parse(cartData) : [];
    setCartItems(purchaseHistory);
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <div className='cart-header-title-div'>
        <h2 className='cart-header'>Purchase History</h2>
      </div>
      <div className='cart-main-div'>
        <div className='cart-details'>
          <div>Image</div>
          <div>Product Name</div>
          <div>Unit</div>
          <div>Price</div>
        </div>

        <div className='cart-items'>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul className='cart-items-ul'>
                {cartItems.map(item => (
                  <li key={item.id} className='cart-items-li'>
                    <img className='cart-image' src={item.image} />
                    <h1 className='cart-product-title'> {item.title} </h1>
                    <h3> {item.quantity} </h3>
                    <h3> {item.price} TK</h3>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PurchaseHistory;