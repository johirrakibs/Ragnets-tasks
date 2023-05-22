import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faUser,
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';
import './header.css';
import { useSelector } from 'react-redux';
// import { addItem, delteItem } from '../../features/products/addToCourtSlice';

const Header = () => {
  const [cartItems, setCartItems] = useState(0);
  const totalItem = useSelector(state => state.cart.totalItem);
  // const dispatch = useDispatch();

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    const items = cartData ? JSON.parse(cartData) : [];
    // console.log(cartData.length);
    setCartItems(items);
    // console.log(cartItems);
  }, []);

  return (
    <div className='header'>
      <div className='header-container'>
        <div className='logo'>
          <h2>
            <Link to='/home' className='logo-link'>
              Regnet
            </Link>
          </h2>
        </div>
        <div className='search-bar'>
          <input
            type='text'
            placeholder='Search Product Here'
            className='search-input'
          />
          <button className='btn-search'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className='header-icons'>
          <Link to='/wishlist-product' className='header-icon'>
            <FontAwesomeIcon icon={faHeart} />
            <span>Favourite Wishlist</span>
          </Link>
          <Link to='/profile' className='header-icon'>
            <FontAwesomeIcon icon={faUser} />
            <span>My Account</span>
          </Link>
          <Link to='/purchaseHistory' className='header-icon'>
            <FontAwesomeIcon icon={faShoppingBag} />
            <span>Purchase history</span>
          </Link>
          <Link to='/cart' className='header-icon'>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{totalItem}</span>
          </Link>
          <Link to='/login' className='header-icon'>
            <FontAwesomeIcon icon={faUserPlus} />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
