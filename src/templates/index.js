import React, { Component } from "react";
import Link from "gatsby-link";
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostHome from "../components/post-home"
import HeaderTitle from "../components/head-title"
import Categories from "../components/categories"

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>;
    } else {
        return <span>{props.text}</span>;
    }
};

const IndexPage = ({ data, pageContext }) => {
    const { group, index, first, last, pageCount, additionalContext } = pageContext;
    const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    return (
        <Layout>
        <SEO title="home" />
        <HeaderTitle title={additionalContext.title}></HeaderTitle>
        <div class="col-md-8">   
            {group.map(({ node }) => (
              <PostHome title={node.title} slug={node.slug} excerpt={node.excerpt} date={node.date}></PostHome>
            ))}
            <div className="previousLink pull-left">
                <NavLink test={first} url={"/" + previousUrl} text="Go to Previous Page" />
            </div>
            <div className="nextLink pull-right">
                <NavLink test={last} url={"/" + nextUrl} text="Go to Next Page" />
            </div>

        </div>
        <aside class="col-md-4 section__secondary">
            <Categories nodes={additionalContext.categories} />
        </aside>
      </Layout>        
    );
};
export default IndexPage;