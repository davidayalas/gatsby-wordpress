const path = require(`path`)
const createPaginatedPages = require('gatsby-paginate')

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
            date
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
            count
          }
        }
      }
      allSite {
        nodes {
          siteMetadata {
            title
          }
        }
      }       
    }
  `).then(result => {

    createPaginatedPages({
      edges: result.data.allWordpressPost.edges,
      createPage: createPage,
      pageTemplate: 'src/templates/index.js',
      pageLength: 2, // This is optional and defaults to 10 if not used
      pathPrefix: '', // This is optional and defaults to an empty string if not used
      context: {
        title : result.data.allSite.nodes[0].siteMetadata.title,
        categories : result.data.allWordpressCategory.edges
      }, // This is optional and defaults to an empty object if not used
    })    

    result.data.allWordpressPost.edges.forEach(({ node }) => {
      createPage({
        path: "post/"+node.slug,
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