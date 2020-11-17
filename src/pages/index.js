import React, { useState } from "react"
import CookieConsent from "react-cookie-consent"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
import Header from "../components/header"
import Story from "../components/story"
import Menu from "../components/menu"
import Followus from "../components/followus"
//import SEO from "../components/seo"
import "semantic-ui-css/semantic.min.css"
import "../styles/index.scss"

const IndexPage = () => {
  let [menuActive, setmenuActive] = useState(false)
  const toggleMenu = () => {
    setmenuActive(!menuActive)
  }
  return (
    <div className="pageWrap">
      {/* <SEO title="Home" /> */}
      <Header toggleMenu={toggleMenu} menuState={menuActive} />
      <Story toggleMenu={toggleMenu} menuState={menuActive} />
      <Menu />
      <Followus />
      <CookieConsent
        location="bottom"
        buttonText="I AGREE"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
       // debug={true}
      >
        <span className="cookie_consent"> We use cookies needed to run the website and for analytical purposes.{" "}
          <a href="/">  
          More information
          </a>
          </span>
      </CookieConsent>
    </div>
  )
}

export default IndexPage
