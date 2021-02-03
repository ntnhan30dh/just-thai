import React, { useState } from "react"
import CookieConsent from "react-cookie-consent"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
import HeaderLegalPage from "../components/header_legalpage"
import Footer from "../components/footer"
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
      <HeaderLegalPage toggleMenu={toggleMenu} menuState={menuActive} />
      <div className="legalInfo-div">
        <h1>Disclaimer</h1>
        <h2>Legal notice</h2>
        <p>
          Delivery Hero SE constantly checks and updates the information on its
          web pages. Despite the utmost care taken, we cannot rule out that some
          of the data may since have become outdated. Therefore, we cannot
          accept liability for the currency, accuracy and completeness of the
          information displayed. The same applies to all other web pages that
          can be reached via hyperlink. Delivery Hero SE is not responsible for
          the content of websites which can be reached via such links.
          Furthermore, Delivery Hero SE reserves the right to make changes or
          additions to the information displayed. Content and structure of the
          Delivery Hero SE website is protected by copyright. The reproduction
          of information or data, in particular the use of texts, text excerpts
          or illustrative material, requires our prior approval. We wish you an
          informative stay on our pages and would welcome any suggestions,
          requests or criticism you may have.
        </p>
      </div>

      <Footer />
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
