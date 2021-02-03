import React from "react"


import { Link } from "gatsby"


import logo from "../images/logo.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"




const Footer = () => {
  
  return (
    <div className="followUS" id="follow">
      <div className="bottom">
        <div className="part left">
            <h3>follow us</h3>
            <div className="icons">
            <div className="imgWrapper">
            <img src={facebook} alt="facebook" />
            </div>
            <div className="imgWrapper">
            <img src={instagram} alt="logo" />
            </div>
            </div>
        </div>
        <div className="part">
            <div className="logoWrapper">
            <img src={logo} alt="logo" />
            </div>
        </div>
        <div className="part right">
        <ul>
          <li>
            <Link to="/imprint">Imprint</Link>
            </li>
            <li>
            <Link to="/privacy">Privacy Policy </Link>
            </li>
            <li>
            <Link to="/disclaimer">Disclaimer</Link>
            </li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
