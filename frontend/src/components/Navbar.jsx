import React from 'react'
import '../CSS/navbar.css'
const Navbar = () => {
  return (
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
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
