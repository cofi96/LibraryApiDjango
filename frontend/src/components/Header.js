import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
export class Header extends Component {


  render() {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                <Link to="/" className="navbar-brand " >Home</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/api" className="nav-link" >API</Link>
                </li>
                </ul>
            </div>
        </nav>
        
    )

  }
}

export default Header