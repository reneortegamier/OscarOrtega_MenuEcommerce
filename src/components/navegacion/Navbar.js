import React from 'react'
import {Link, link} from 'react-router-dom'


const navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/">
                <img src='./src/IMG/Zamanature RP Blanco.png' width='50'/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Zamnature">Zamnature</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Items">Items</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default navbar