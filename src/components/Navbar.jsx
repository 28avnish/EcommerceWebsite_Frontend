import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MDBCol } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const state = useSelector(state => state.handleCart);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
    };

    return (
        <>
         <style>
                {`
                    @media (max-width: 750px) {
                        .nav-item img {
                            display: none;
                        }
                    }
                `}
            </style>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" style={{ marginRight: "30px" }} alt="Logo" />
                    </NavLink>
                    <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <MDBCol md="6" style={{marginRight:'5px'}}>
                        <div style={{ position: 'relative' }}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%)', color: '#888' }} />
                        <input className="form-control" type="text" placeholder="Search for Products, Brands and More"
                         aria-label="Search" style={{ border: "none", backgroundColor: "#F0F5FF", paddingLeft: '40px', marginLeft: '5px' }} />
                     </div>
                    </MDBCol>
                    
                  
               
                    <div className="buttons text-center">
                        <NavLink className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length})</NavLink>
                        <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> LogOut</NavLink>
                        {/* <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Register</NavLink> */}
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-1 sticky-top">
                <div className="container ">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{backgroundColor:"#F1F2F4",borderRadius:"5px"}}>
                        <ul className="navbar-nav m-auto my-2 text-center">
                            <li className="nav-item">
                                <img src='https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100' style={{width:"45%"}}/>
                                <NavLink className="nav-link " style={{fontWeight:600}}  to="/">Grocery</NavLink>
                            </li>
                            <li className="nav-item">
                                <img src='https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100' style={{width:"45%"}}/>
                                <NavLink className="nav-link " style={{fontWeight:600}}  to="/">Mobile</NavLink>
                            </li>
                            <li className="nav-item dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <img src='https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100'style={{width:"45%"}}/>
                              
                                <NavLink className="nav-link dropdown-toggle" style={{fontWeight:600}}  id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded={isDropdownOpen ? 'true' : 'false'}>
                                    Fashion
                                </NavLink>
                                <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} style={{fontSize:'0.8rem'}} aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" >Men's Topwear</NavLink>
                                <NavLink className="dropdown-item" to="/home">Men's Bottomwear</NavLink>
                                <NavLink className="dropdown-item" to="/home">Women Ethnic</NavLink>
                                <NavLink className="dropdown-item" to="/home">Women Western</NavLink>
                                <NavLink className="dropdown-item" to="/home">Watches and Accessories</NavLink>
                                <NavLink className="dropdown-item" to="/home">Essentials</NavLink>
                                <div className="dropdown-divider"></div>
                                <NavLink className="dropdown-item" to="/home">Kids Clothes</NavLink>
                                <NavLink className="dropdown-item" to="/home">Kids Toys</NavLink>
                                </div>
                            </li>
                            
                             <li className="nav-item">
                               <img src='https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' style={{width:"45%"}}/>

                                <NavLink className="nav-link" style={{fontWeight:600}}  to="/">Electronics</NavLink>
                            </li>
                               
                                <li className="nav-item">
                                <img src='https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0139228b2f7eb413.jpg?q=100' style={{width:"45%"}}/>

                                    <NavLink className="nav-link" style={{fontWeight:600}} to="/">Appliances</NavLink>
                                </li>
                                <li className="nav-item">
                                <img src='https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100' style={{width:"45%"}}/>

                                    <NavLink className="nav-link" style={{fontWeight:600}}  to="/">Travel</NavLink>
                                </li>
                            <li className="nav-item dropdown" onMouseEnter={toggleDropdown2} onMouseLeave={toggleDropdown2}>
                                <img src='https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100' style={{width:"45%"}}/>
                                <NavLink className="nav-link dropdown-toggle " style={{fontWeight:600}}  to="/home" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded={isDropdownOpen ? 'true' : 'false'}>
                                  Toys & More
                                </NavLink>
                                <div className={`dropdown-menu ${isDropdownOpen2 ? 'show' : ''}`} style={{fontSize:'0.8rem'}} aria-labelledby="navbarDropdown">
                                    <NavLink className="dropdown-item" to="/home">Toys & School Supplies</NavLink>
                                    <NavLink className="dropdown-item" to="/home">Sports & Fitness</NavLink>
                                    <NavLink className="dropdown-item" to="/home">Books</NavLink>
                                    <NavLink className="dropdown-item" to="/home">Music</NavLink>
                                    <NavLink className="dropdown-item" to="/home">Stationary</NavLink>
                                    <NavLink className="dropdown-item" to="/home">Office Supplies</NavLink>
                                    <div className="dropdown-divider"></div>
                                    <NavLink className="dropdown-item" to="/home">Foods & Drinks</NavLink>
                                    <NavLink className="dropdown-item" to="/home">Auto Accessories</NavLink>
                                </div>
                            </li>
                            
                            <li className="nav-item">
                                <img src='https://rukminim2.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100' style={{width:"45%"}}/>
                                <NavLink className="nav-link" style={{fontWeight:600}} to="/">Two Wheelers</NavLink>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
