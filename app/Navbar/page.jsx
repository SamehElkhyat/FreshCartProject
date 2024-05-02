'use client'
import React from 'react'
import './Navbar.css'
import logo from './freshcart-logo.png'
import Link from 'next/link'
import Image from 'next/image'
import {useSelector } from 'react-redux'
export default function Navbar() {
  
  let count = useSelector((state)=>state.counter.value)
  let tokken = useSelector((state)=>state.token.Token)

  
 return <>

<nav
className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container">
    <Link className=" navbar-brand" href=""><Image className='logo' src={logo} alt="" /></Link>
    <button
      className="navbar-toggler d-lg-none"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="collapsibleNavId">
<ul className="navbar-nav me-auto mt-2 mt-lg-0">
  
          {tokken!==0?<><li className="nav-item">
          <Link className="W-10 nav-link active" href="Home" aria-current="page">
            Home
            </Link>
        </li>
        <li  className="nav-item">
          <Link className="nav-link active position-relative" href="Cart" aria-current="page">Cart
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
            {count}

            <span class="visually-hidden">unread messages</span></span>
            </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href="/Home" aria-current="page">
            Product
            </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href="/Home" aria-current="page">
            Categories
            </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href="/Home" aria-current="page">
            Brand
            </Link>
            
        </li>
        </>:<></>}
          <li className="nav-item dropdown">
          <div
            className="dropdown-menu"
            aria-labelledby="dropdownId">
            <Link className="dropdown-item" href="#"
              >Action 1</Link>
            <Link className="dropdown-item" href="#"
              >Action 2</Link>
          </div>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" href="Home" aria-current="page">
          <i className="fab fa-google"></i>
            </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href="Home" aria-current="page">
          <i className="fab fa-facebook"></i>
            </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href="Home" aria-current="page"><i className="fab fa-instagram"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href="Home" aria-current="page">
          <i className="fab fa-twitter"></i>
            </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href="Home" aria-current="page">
          <i className="fab fa-tiktok"></i></Link>
        </li>

        {tokken!==0?<>
          <li className="nav-item">
          <Link className="nav-link active" href="Home" aria-current="page">
          Sign Out</Link>
        </li>
        </>:<>  <li className="nav-item">
          <Link className="nav-link active" href="Signin" aria-current="page">
          Sign In</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href="Signup" aria-current="page">
          Sign Up</Link>
        </li></>}
       
      
      </ul>
      
    </div>
  </div>
</nav>
  </>
}

