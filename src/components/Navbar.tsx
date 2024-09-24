import React from 'react'
import logo from "../images/logo.svg"
import { AppLinks, SocialData } from '../data'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        <ul className="nav-links" id="nav-links">
            {AppLinks.map((item, idx)=>{
                
                return (
                <li key={idx}>
                    {item.link}
                </li>
                )
            })}
          
        </ul>

        <ul className="nav-icons">
            {SocialData.map((item,idx)=>{
                return (
                <a href={item.href} target='_blank' className='nav-icon' key={idx}>
                    {item.icon}
                </a>
                )
            })}
          
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
