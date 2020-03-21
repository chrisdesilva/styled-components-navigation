import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    merchJson(slug: { eq: $slug }) {
      title
      price
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const MerchPage = ({ data }) => {
  const merch = data.merchJson

  return (
    <Layout>
      <h1>{merch.title}</h1>
      <h2>{merch.price}</h2>
      <Image fluid={merch.image.childImageSharp.fluid} alt={merch.title} />
    </Layout>
  )
}

export default MerchPage
