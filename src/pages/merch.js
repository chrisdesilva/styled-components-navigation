import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"

export const query = graphql`
  query {
    allMerchJson {
      nodes {
        price
        slug
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Merch = ({ data }) => {
  const merch = data.allMerchJson

  return (
    <Layout>
      <h1>Products</h1>
      {merch.nodes.map(product => (
        <div>
          <Link to={`/merch/${product.slug}`}>{product.title}</Link>
          <p>{product.price}</p>
          <Image
            fluid={product.image.childImageSharp.fluid}
            alt={product.title}
          />
        </div>
      ))}
    </Layout>
  )
}

export default Merch
