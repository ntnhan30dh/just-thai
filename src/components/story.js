import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import chicken from "../images/chicken.svg"
import noddle from "../images/noddle.svg"
import shrimp from "../images/shrimp.svg"
import Plx from "react-plx"


const parallaxMoveUp = [
  {
    start:'self',
    duration: 300,
    properties: [
      {
      startValue: -10,
      endValue: 0,
      property: "translateX"
      },
    ],
  },
];


const Story = () => {
  const data = useStaticQuery(graphql`
    {
      pic1: file(relativePath: { eq: "storyPic1.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      pic2: file(relativePath: { eq: "storyPic2.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      pic4: file(relativePath: { eq: "storyPic4.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      pic5: file(relativePath: { eq: "storyPic5.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section className="story" id="story">
      <div className="headLine">
        <div className="marquee">
          Our story • Our story • Our story • Our story • Our story • Our story
          • Our story • Our story • Our story • Our story • Our story • Our
          story • Our story • Our story • Our story • Our story • Our story Our
          story • Our story • Our story • Our story • Our story • Our story •
          Our story • Our story • Our story • Our story • Our story • Our story
          • Our story • Our story • Our story • Our story • Our story
        </div>
      </div>
      <div className="div1 row ">
        <div className="imgDiv pic1">
          <Img className={"img"} fluid={data.pic1.childImageSharp.fluid} />
          <Plx  className="span" parallaxData={parallaxMoveUp}>
          </Plx>
        </div>
        <div className="text">
          Ordering from Just Thai is like having a Thai grandma cook authentic
          meals on a food stall in Bangkok – and delivering them to you, no
          matter where you are.
        </div>
      </div>
      <div className="div2 row">
        <div className="chickenWrap">
          <img src={chicken} alt="chicken" />
        </div>
        <div className="imgDiv pic2">
          <Img className={"img"} fluid={data.pic2.childImageSharp.fluid} />
          <Plx  className="span" parallaxData={parallaxMoveUp}>
          </Plx>
        </div>
        <div className="noddleWrap">
          <img src={noddle} alt="noddle" />
        </div>
      </div>
      <div className="div3 ">Crunchy, spicy, fresh, flavourful</div>
      <div className="div4 row">
        <div className="text">
          While we draw inspiration from the bustling Thai street food culture
          to offer an outstanding variety of flavours, we also pride ourselves
          in carefully selecting healthy ingredients and the best recipes to
          serve you, like a true local would do.
        </div>
        <div className="imgDiv pic4">
          <Img className={"img"} fluid={data.pic4.childImageSharp.fluid} />
          <Plx  className="span" parallaxData={parallaxMoveUp}>
          </Plx>
        </div>
      </div>
      <div className="div5 row">
        <div className="text">TRUE LOCAL</div>
        <div className="imgDiv pic5">
          <Img className={"img"} fluid={data.pic5.childImageSharp.fluid} />
          <Plx  className="span" parallaxData={parallaxMoveUp}>
          </Plx>
        </div>
        <div className="shrimpWrap">
          <img src={shrimp} alt="shrimp" />
        </div>
      </div>
    </section>
  )
}

export default Story
