import React from "react"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import leaf from "../images/leaf.png"
import rice from "../images/rice.png"
import noddle from "../images/noddle.svg"
import noddleYellow from "../images/noddle-yellow.png"
import shrimp from "../images/shrimp.svg"
import chicken from "../images/chicken.svg"
import Plx from "react-plx"

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

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      rolls: file(relativePath: { eq: "rolls.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      tomYum: file(relativePath: { eq: "tomYum.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      padThai: file(relativePath: { eq: "padThai.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      menuImgBottom: file(relativePath: { eq: "menu-img-bottom.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      menuImgBottom_tablet: file(
        relativePath: { eq: "menu-img-bottom_tablet.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      ovalText: file(relativePath: { eq: "oval-text.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data.menuImgBottom_tablet.childImageSharp.fluid
  return (
    <section className="menu" id="menu">
      <div className="headLine">
        <div className="marquee">
          Menu • Menu • Menu • Menu • Menu • Menu • Menu • Menu • Menu • Menu •
          Menu • Menu • Menu • Menu • Menu • Menu • Menu • Menu • Menu • Menu •
          Menu • Menu • Menu • Menu • Menu • Menu • Menu • Menu • Menu • Menu •
          Menu • Menu • Menu • Menu • Menu • Menu • Menu • Menu • Menu • Menu •
          Menu • Menu • Menu • Menu • Menu • Menu • Menu • Menu • Menu • Menu •
          Menu • Menu • Menu • Menu • Menu • Menu • Menu • Menu •
        </div>
      </div>
      <div className="topText">
        <h1>Check favourites from our menu</h1>
        <p>
          With Just Thai you can enjoy an array of all-time classics and modern
          Street Food specialties such as soups, rice dishes and famous noodles,
          including Pad Thai!
        </p>
      </div>
      <div className="main">
        <div className="article row">
          <h2>Just Spring rolls</h2>
          <div className="left">
            <div className="imgDiv articlePic">
              <Img className={"img"} fluid={data.rolls.childImageSharp.fluid} />
              <Plx className="span" parallaxData={parallaxMoveUp}></Plx>
            </div>

            <div className="iconYellow">
              <img src={leaf} alt="leaf" />
            </div>
          </div>
          <div className="right">
            <h1>
              Just Spring
              <div>
                <h1>rolls</h1>
              </div>
            </h1>
            <p>
              Everyone knows them, everybody loves them: Vegetarian spring rolls
              are Thai cuisine’s crispy classics. With a tasty and soft filling
              inside a golden crunchy wrapper, they pair perfectly with a fruity
              sweet-chili sauce.
            </p>
            <div className="iconWrap">
              <img src={chicken} alt="chicken" />
            </div>
          </div>
        </div>
        <div className="tomYum row">
          <div className="right">
            <h1>
              Tom Yum
              <div>
                <h1>Yum Soup</h1>
              </div>
            </h1>
            <p>
              No soup combines pleasant spicy and sour flavours as good as Tom
              Yum. A strong broth ensures an intense taste, while kaffir lime
              leaves and lemongrass give the whole thing a fruity kick. Choose
              whether you want to go with chicken, tofu or shrimp. Yum Yum!
            </p>
            <div className="iconWrap">
              <img src={shrimp} alt="shrimp" />
            </div>
          </div>
          <div className="left">
            <div className="imgDiv articlePic">
              <Img
                className={"img"}
                fluid={data.tomYum.childImageSharp.fluid}
              />
              <Plx className="span" parallaxData={parallaxMoveUp}></Plx>
            </div>
            <div className="iconYellow">
              <img src={noddleYellow} alt="noddleYellow" />
            </div>
          </div>
          <h2>
            Tom Yum
            <div>
              <h2>Yum Soup</h2>
            </div>
          </h2>
        </div>
        <div className="article row">
          <h2>Just Pad Thai</h2>
          <div className="left">
            <div className="imgDiv articlePic">
              <Img
                className={"img"}
                fluid={data.padThai.childImageSharp.fluid}
              />
              <Plx className="span" parallaxData={parallaxMoveUp}></Plx>
            </div>
            <div className="iconYellow">
              <img src={rice} alt="rice" />
            </div>
          </div>
          <div className="right">
            <h1>Just Pad Thai</h1>
            <p>
              Thanks to its unique taste, Pad Thai is without a doubt the #1 in
              every street food market. Our recipe with rice noodles, spring
              onions, tamarind, lime, peanuts and a bit of chilli brings the
              aroma of Thailand straight into your home. You can adjust your
              level of spiciness adding our Sriracha sauce. Order it with
              chicken, tofu or shrimps.
            </p>
            <div className="iconWrap">
              <img src={noddle} alt="noddle" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="pics row">
          <BackgroundImage
            className="bottomPic_tablet"
            fluid={imageData}
          ></BackgroundImage>
          <div className="imgDiv bottomPic">
            <Img
              className={"img"}
              fluid={data.menuImgBottom.childImageSharp.fluid}
            />
            <Plx className="span" parallaxData={parallaxMoveUp}></Plx>
          </div>
          <div className="oavalText">
            <Img
              className={"img"}
              fluid={data.ovalText.childImageSharp.fluid}
            />
          </div>
        </div>
        <h1>Spicy, salty, sweet and fresh </h1>
      </div>
    </section>
  )
}

export default Menu
