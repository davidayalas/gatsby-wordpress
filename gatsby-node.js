const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPost(sort: { fields: [date] }) {
        edges {
          node {
            title
            excerpt
            content
            slug
          }
        }
      }
      allWordpressPage(sort: { fields: [date] }) {
        edges {
          node {
            title
            content
            slug
          }
        }
      }
      allWordpressCategory(sort: {order: ASC, fields: name}) {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allWordpressPost.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          // This is the $slug variable
          // passed to post.js
          slug: node.slug,
        },
      })
    })

    result.data.allWordpressCategory.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/category.js`),
        context: {
          // This is the $slug variable
          // passed to page.js
          slug: node.slug,
          name: node.name
        },
      })
    })

    result.data.allWordpressPage.edges.forEach(({ node }) => {
      if(["blog feed","home"].indexOf(node.title.toLowerCase())>-1){
        return;
      }
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          // This is the $slug variable
          // passed to page.js
          slug: node.slug,
        },
      })
    })

  })
}