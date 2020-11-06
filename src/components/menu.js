import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import leaf from "../images/leaf.png"
import rice from "../images/rice.png"
import noddle from "../images/noddle.svg"
import noddleYellow from "../images/noddle-yellow.png"
import shrimp from "../images/shrimp.svg"
import chicken from "../images/chicken.svg"

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
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      ovalText: file(relativePath: { eq: "oval-text.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section className="menu">
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
        <h1>Check our favourites from our menu</h1>
        <p>
          Thai-me to get excited! With Just Thai you can enjoy a variety of
          all-time classics and modern Street Food specialties like soups, rise
          dishes and famous Thai noodles, including Pad Thai!
        </p>
      </div>
      <div className="main">

     
      <div className="article row">
        <div className="left">
          <div className="imgDiv articlePic">
            <Img className={"img"} fluid={data.rolls.childImageSharp.fluid} />
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
            Everyone knows them, everyone loves them: Vegetarian spring rolls
            Thai cuisine crispy classics. We prepare them according to the
            recipe of our favorite cook Nang from the street food market in
            Bangkok and deliver them to you, with a fruity-sweet chili sauce.
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
            Yum. A strong broth ensures an intense taste, kaffir lime leaves and
            lemongrass give the whole thing a fruity kick. Choose whether you
            want to go with chicken, tofu or shrimp. Yum Yummy!
          </p>
          <div className="iconWrap">
            <img src={shrimp} alt="shrimp" />
          </div>
        </div>
        <div className="left">
          <div className="imgDiv articlePic">
            <Img className={"img"} fluid={data.tomYum.childImageSharp.fluid} />
          </div>
          <div className="iconYellow">
            <img src={noddleYellow} alt="noddleYellow" />
          </div>
        </div>
      </div>
      <div className="article row">
        <div className="left">
          <div className="imgDiv articlePic">
            <Img className={"img"} fluid={data.padThai.childImageSharp.fluid} />
          </div>
          <div className="iconYellow">
            <img src={rice} alt="rice" />
          </div>
        </div>
        <div className="right">
          <h1>Just Pad Thai</h1>
          <p>
            Thanks to its unique taste, Pad Thai is without doubt # 1 on every
            street food market. Our original recipe with rice noodles, spring
            onions, tamarind, lime, peanuts and some chilli brings the aroma of
            Thailand straight to your home. You chose your level of spiciness
            adding our Sriracha sauce. Thai decision: Order it with chicken,
            tofu or shrimps.
          </p>
          <div className="iconWrap">
            <img src={noddle} alt="noddle" />
          </div>
        </div>
      </div>
      </div>
      <div className="bottom">
        <div className="pics row">
        <div className="imgDiv bottomPic">
          <Img
            className={"img"}
            fluid={data.menuImgBottom.childImageSharp.fluid}
          />
        </div>
        <div className="oavalText">
          <Img className={"img"} fluid={data.ovalText.childImageSharp.fluid} />
        </div>
        </div>
        <h1>Spicy, salty, sweet and fresh </h1>
      </div>
    </section>
  )
}

export default Menu
