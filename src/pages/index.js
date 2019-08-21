import React from "react"
//import { Link, graphql } from "gatsby"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostHome from "../components/post-home"


export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <div class="row">
        <div class="block-header-one-column">
          <div class="wrap-img-bg">
              <div class="container">
                <div class="wrap-title ">
                  <h1><a href="/">Gatsby - WordPress Sourcing</a></h1>
                  <h3 class="font-alternate"></h3>
                </div>
              </div>
            </div>
        </div>
      </div>
      {data.allWordpressPost.edges.map(({ node }) => (
        <PostHome title={node.title} slug={node.slug} excerpt={node.excerpt} date={node.date}></PostHome>
      ))}
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
  }
`