import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
 import Header from "../components/header"
 import Story from "../components/story"
 import Menu from "../components/menu"
 import Followus from "../components/followus"
 //import SEO from "../components/seo"
 import 'semantic-ui-css/semantic.min.css'
 
 import "../styles/index.scss"

const IndexPage = () => (
  <div className="pageWrap">
    {/* <SEO title="Home" /> */}
    <Header/>
    <Story/>
    <Menu/>
    <Followus/>
    
  </div>
)

export default IndexPage
