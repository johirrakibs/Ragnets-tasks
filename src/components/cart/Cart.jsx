import { useState, useEffect } from 'react';
import './cart.css';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { useSelector, useDispatch } from 'react-redux';
import { resetInitialState, incrementQuantity, delteItem} from '../../features/addToCourtSlice';
import Navbar from '../../common/navbar/Navbar';

// import {
//   resetInitialState,
//   incrementQuantity,
//   incrementQuantity,
//   delteItem,
// } from '../../../features/addToCourtSlice';

const Cart = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const { totalProductPrice, cart } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {}, [isConfirmed]);

  const handleOrderConfirm = () => {
    // Perform any further actions, such as sending order data to the server
    const data = localStorage.getItem('purchaseHistory');
    console.log('previous: ', JSON.parse(data));

    const previousData = JSON.parse(data) ? JSON.parse(data) : [];
    const totalPreviousData = [...cart, ...previousData];
    console.log('totalPreviousData: ', totalPreviousData);
    localStorage.setItem('purchaseHistory', JSON.stringify(totalPreviousData));
    console.log('Product added to cart');
    dispatch(resetInitialState());
    setIsConfirmed(true);
    console.log('first finish');
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className='cart-header-title-div'>
        <FontAwesomeIcon className=' cart-cart-icon' icon={faCartShopping} />
        <h2 className='cart-header'>My Cart</h2>
      </div>
      <div className='cart-main-div'>
        <div className='cart-details'>
          <div>Image</div>
          <div>Product Name</div>
          <div>Unit</div>
          <div>Quantity</div>
          <div>Price</div>
          <div>Remove</div>
        </div>

        <div className='cart-items'>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul className='cart-items-ul'>
                {cart.map(item => (
                  <li key={item.id} className='cart-items-li'>
                    <img className='cart-image' src={item.image} />

                    <h1 className='cart-product-title'> {item.title} </h1>
                    <h3> {item.quantity} </h3>

                    <div className='cart-quantity'>
                      <button
                        className='cart-quantity-btn'
                        onClick={() => dispatch(decrementQuantity(item))}>
                        -
                      </button>
                      <h3> {item.quantity} </h3>

                      <button
                        className='cart-quantity-btn cart-quantity-btn-plus'
                        onClick={() => dispatch(incrementQuantity(item))}>
                        +
                      </button>
                    </div>

                    <h3> {item.price} TK</h3>
                    <div>
                      <button
                        className='cart-quantity-btn'
                        onClick={() => dispatch(delteItem(item))}>
                        <FontAwesomeIcon
                          className='remove-icon'
                          icon={faTrash}
                        />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className='cart-total-price'>
          <h2 className='cart-total-price-h'>
            Total Price:{' '}
            <span className='cart-total-taka'>
              {' '}
              {Number(totalProductPrice.toFixed(2))} TK
            </span>{' '}
          </h2>
          <div>
            {isConfirmed ? (
              <p>Order confirmed. Thank you for your purchase!</p>
            ) : (
              <button
                className='cart-confirm-btn'
                type='button'
                onClick={handleOrderConfirm}>
                Order Confirm
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;