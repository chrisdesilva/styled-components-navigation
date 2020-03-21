exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(`
    {
      allMerchJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (data.errors) {
    console.log("Error retrieving data", data.errors)
    return
  }

  const merchTemplate = require.resolve("./src/templates/MerchPage.js")

  data.data.allMerchJson.edges.forEach(edge => {
    createPage({
      path: `/merch/${edge.node.slug}/`,
      component: merchTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
