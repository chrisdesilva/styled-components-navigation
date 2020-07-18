import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ height: "150vh" }}>
      <p>Hello</p>
    </div>
    <div>
      <Card />
    </div>
  </Layout>
)

export default IndexPage
