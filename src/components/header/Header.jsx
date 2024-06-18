import React, { useState } from "react"
import "./header.css"
import "../../Assets/css/style.css"
import { nav } from "./Data"
import { Link } from "react-router-dom"
import Logo from "../../Assets/img/logo.png"

const Header = () => {
  const [navList, setNavList] = useState(false)
  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src={Logo} alt='logo' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {/* Add a dropdown list here */}
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>

          <button
            className="btn btn-primary"
            onClick={() => (window.location.href = 'https://web.classplusapp.com/login?orgCode=ajsnls')}
          >
            <p className="btn-text">Login</p>
            <span className="square" />
          </button>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header