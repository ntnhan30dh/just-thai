import React, { useState, useEffect} from "react"
import logo from "../images/logo.png"
import OrderNow from "./ordernow"
import { Link } from "gatsby"
import Sticky from "react-sticky-el"





const HeaderLegalPage = props => {
 
 
  let menuActive = props.menuState ? "is-inactive" : ""
  let change = props.menuState ? "change" : ""

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <div className="headerWrap headerLegal">
      <Sticky>
        <div className={scroll ? "nav bgPink" : "nav bgPink"}>
          <div className="leftDiv">
            <Link to="/">
            <div className="imgWrap">
              <img src={logo} alt="logo" />
            </div>
            </Link>
            <div
              className={`burgerMenu  ${change}`}
              onClick={props.toggleMenu}
              onKeyDown={props.toggleMenu}
              role="button"
              tabIndex={-1}
            >
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div>
          </div>
          <div className={`rightDiv  ${menuActive}`}>
            {/* <div className="rightDiv" > */}
            <ul>
              <li>
                <Link to="/#story">Our Story</Link>
              </li>
              <li>
                <Link to="/#menu">Menu</Link>
              </li>
              <li>
                <Link to="/#follow">Follow Us</Link>
              </li>
              <li>
                <Link to="/#follow">Contact</Link>
              </li>
            </ul>
            <OrderNow />
          </div>
        </div>
      </Sticky>
      </div>
  )
}

export default HeaderLegalPage
