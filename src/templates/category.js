import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import HeaderTitle from "../components/head-title"
import PostHome from "../components/post-home"

export default ({ data, pageContext }) => {
  const posts = data.allWordpressPost.edges

  return (
    <Layout>
      <HeaderTitle title={data.allSite.nodes[0].siteMetadata.title}></HeaderTitle>
      <h1 class="font-alternate">{pageContext.name}</h1>
      <div>
        {
            posts.map(({ node }) => {
                return (
                    <PostHome title={node.title} slug={node.slug} excerpt={node.excerpt} date={node.date}></PostHome>
                )
            })
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
    query($slug: String!) {
        allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: $slug}}}}) {
            edges {
                node {
                    title
                    content
                    slug
                    excerpt
                    date
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