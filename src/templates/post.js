import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import HeaderTitle from "../components/head-title"

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  return (
    <Layout>
      <HeaderTitle title={data.allSite.nodes[0].siteMetadata.title}></HeaderTitle>
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }}></h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
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