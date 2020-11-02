import React from "react"
import logo from "../images/logo.png"
import OrderNow from "./ordernow"
import { Link } from "gatsby"
import { Sticky } from "semantic-ui-react"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Header = props => {
  const data = useStaticQuery(graphql`
    {
      bgBig: file(relativePath: { eq: "bg-header-1.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      headerPic: file(relativePath: { eq: "header-pic.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  // let menuActive = props.menuState ? "is-inactive" : ""
  // let change = props.menuState ? "change" : ""
  const imageData = data.bgBig.childImageSharp.fluid

  return (
    <BackgroundImage className="headerWrap" Tag="header" fluid={imageData}>
      <Sticky>
        <div className="nav">
          <div className="leftDiv">
            <Link to="#" className="img_div">
              <img src={logo} alt="logo" />
            </Link>
            {/* <div className={`burgerMenu  ${change}`} onClick={props.toggleMenu} onKeyDown={props.toggleMenu} role = "button" tabIndex={-1}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div> */}
          </div>
          {/* <div className={`rightDiv row ${menuActive}`}> */}
          <div className="rightDiv">
            <ul>
              <li>
                <Link to="#story">Our Story</Link>
              </li>
              <li>
                <Link to="#menu">Menu</Link>
              </li>
              <li>
                <Link to="#follow">Follow Us</Link>
              </li>
              <li>
                <Link to="#contact">Contact</Link>
              </li>
            </ul>
            <OrderNow />
          </div>
        </div>
      </Sticky>
      <div className="bottom">
        <h1>Thai Street Food delivered </h1>
        <div className="imgDiv headerPic">
          <Img className={"img"} fluid={data.headerPic.childImageSharp.fluid} />
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Header