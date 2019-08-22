import React from "react"
//import { Link, graphql } from "gatsby"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostHome from "../components/post-home"
import HeaderTitle from "../components/head-title"
import Categories from "../components/categories"


export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <HeaderTitle title={data.allSite.nodes[0].siteMetadata.title}></HeaderTitle>
      <div class="col-md-8">   
        {data.allWordpressPost.edges.map(({ node }) => (
          <PostHome title={node.title} slug={node.slug} excerpt={node.excerpt} date={node.date}></PostHome>
        ))}
      </div>
      <aside class="col-md-4 section__secondary">
          <Categories nodes={data.allWordpressCategory.edges} />
      </aside>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date], order: [DESC]}) {
      edges {
        node {
          title
          excerpt
          slug,
          date
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
`