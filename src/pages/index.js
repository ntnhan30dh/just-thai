import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
 import Header from "../components/header"
 import Story from "../components/story"
 import Menu from "../components/menu"
import 'semantic-ui-css/semantic.min.css'
import SEO from "../components/seo"
import "../styles/index.scss"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Header/>
    <Story/>
    <Menu/>
    
    
  </div>
)

export default IndexPage
