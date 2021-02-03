import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Plx from "react-plx"
import { Link } from "gatsby"


import logo from "../images/logo.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"

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


const Followus = () => {
  const data = useStaticQuery(graphql`
    {
      pic: file(relativePath: { eq: "followUsPic.png" }) {
        childImageSharp {
          fluid( maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      pic_tablet: file(relativePath: { eq: "followUsPic_tablet.png" }) {
        childImageSharp {
          fluid( maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data.pic.childImageSharp.fluid
  return (
    <div className="followUS" id="follow">
      <div className="top">
        <div className="text">
          <h1>Holiday in Thailand <br/> from home? <br/> Yes, please!</h1>
        </div>
        <BackgroundImage className="pic" fluid={imageData}></BackgroundImage>
        <div className="imgDiv pic_tablet">
            <Img
              className={"img"}
              fluid={data.pic_tablet.childImageSharp.fluid}
            />
            <Plx className="span" parallaxData={parallaxMoveUp}></Plx>
          </div>
      </div>
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

export default Followus
