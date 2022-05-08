import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
                <a href='/' className='navbar-brand'>React Meetups</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className='collapse navbar-collapse' id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto">
                       <li className="nav-item">
                            <Link to='/new-meetup' className="nav-link">New Meetup</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/favorites' className="nav-link">Favorites</Link>
                        </li>
                   </ul>
                </div>

            </div>
        </nav>
  )
}

export default Navbar
