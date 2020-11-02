import React from 'react';
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

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

      pic2: file(relativePath: { eq: "pic2.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
    return (
        <section className="story">
            <div className="headLine">
                <div className="marquee">
            Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story • Our story 
                </div>
            </div>   
              

            <div className="imgDiv pic1">
          <Img className={"img"} fluid={data.pic1.childImageSharp.fluid} />
        </div>
            
        </section>
    );
};


export default Story;
