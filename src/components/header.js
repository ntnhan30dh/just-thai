import React, { useState, useEffect} from "react"
import logo from "../images/logo.png"
import OrderNow from "./ordernow"
import { Link } from "gatsby"
import Sticky from "react-sticky-el"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Plx from "react-plx"
import {useMediaQuery} from '@react-hook/media-query'

const parallaxMoveUp = [
  {
    start: "self",
    duration: 300,
    properties: [
      {
        startValue: -20,
        endValue: 0,
        property: "translateX",
      },
    ],
  },
]

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

      bgBig2: file(relativePath: { eq: "bg-header-2.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
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
 
  let menuActive = props.menuState ? "is-inactive" : ""
  let change = props.menuState ? "change" : ""
 
  const matches = useMediaQuery('only screen and (min-width: 1000px)')

  const imageData = matches?data.bgBig.childImageSharp.fluid:data.bgBig2.childImageSharp.fluid
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <BackgroundImage
      className="headerWrap"
      Tag="header"
      fluid={imageData}
    >
      <Sticky>
        <div className={scroll ? "nav bgPink" : "nav"}>
          <div className="leftDiv">
            <Link to="#">
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
                <Link to="#story">Our Story</Link>
              </li>
              <li>
                <Link to="#menu">Menu</Link>
              </li>
              <li>
                <Link to="#follow">Follow Us</Link>
              </li>
              <li>
                <Link to="#follow">Contact</Link>
              </li>
            </ul>
            <OrderNow />
          </div>
        </div>
      </Sticky>
      <div className="bottom">
        <h1>Thai Street Food, delivered </h1>
        <div className="imgDiv headerPic">
          <Img className={"img"} fluid={data.headerPic.childImageSharp.fluid} />
          <Plx className="span" parallaxData={parallaxMoveUp}></Plx>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Header
