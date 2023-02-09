import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light">
  <div className="container-fluid text-light">
    <a className="navbar-brand text-light" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active text-light" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link active text-light" >About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link active text-light" aria-current="page" >Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link active text-light" aria-current="page" >Login</Link>
        </li>
        <li className="nav-item">
          <Link to="signup" className="nav-link active text-light" aria-current="page" >SignUp</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
