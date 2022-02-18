import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
      </ul>

      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckChecked"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
</div>

     {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search or type a URL" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
  */}
    </div>
  </div>
</nav>
  )
}

Navbar.prototypes = {   //setting props type in an object
    title: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}  

/*Navbar.defaultProps = {  //(a component based function) setting a default prop. it will be used if we dont pass prop 
    title : "Set Title Here" ,
    home : "Home" ,
    about : "About Us"        
}*/