import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    
      <nav class="navbar navbar-expand-lg bg-body-tertiary w-100">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
  <li className="nav-item ms-3">
    <a className="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item ms-3">
    <a className="nav-link" href="#">Features</a>
  </li>
  <li className="nav-item ms-3">
    <a className="nav-link" href="#">Pricing</a>
  </li>
  <li className="nav-item ms-3">
    <a className="nav-link" href="#">Templates</a>
  </li>
  <li className="nav-item ms-3">
    <a className="nav-link" href="#">Start Building</a>
  </li>
</ul>

    </div>
  </div>
</nav>
  
  )
}

export default Navbar
