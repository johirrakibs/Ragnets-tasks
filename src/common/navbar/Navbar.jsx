import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-contain">
            <div className="col-12">
              <div className="nav-menu ">
                <div>
                  <div className="dropdown">
                    <button
                      className="nav-btn"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FontAwesomeIcon icon={faList} />
                      <span className="">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown"
                      aria-labelledby="dropdown"
                    >
                      <li>
                        <Link className="dropdown" to="">
                          men's clothing
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown" to="">
                          women's clothing
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown" to="">
                          jewelery
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown" to="">
                          electronics
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="nav-bar" >
                  <div className="nav-bars">
                    <NavLink className="teee" to="/">Home</NavLink>
                    <NavLink className="teee" to="/product">Our Store</NavLink>
                    <NavLink className="teee" to="/blogs">Blogs</NavLink>
                    <NavLink className="teee" to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;