
import React from 'react'

export default function Navbar(props) {
 
  
  return (
    <>
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode}  bg-${props.mode} `} id='NavBar'>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <img src="/public/apple-touch-icon.png" alt="Icon" />
    </a>


    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.about}</a>
        </li>
      </ul>
      <button className="btn btn-primary mx-3" onClick={props.toggleMode}>{props.btnText}</button>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


    </>
  )
}
