import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle }) => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressPage {
                edges {
                    node {
                        id
                        title
                        slug
                    }
                }
            }
        }
    `)

    return (
        <header>
            <div class="header-2 brand-header brand-secondary">
                <div class="container clearfix">
                    <div class="col-clear nav-menu-top">
                        <div class="hidden-xs hidden-sm desktop-menu">
                            <div class="col-md-1 top-logo top-logo-desktop hidden-xs hidden-sm col-clear">
                                <a href="https://uoc.edu" title="Universitat Oberta de Catalunya"><img src="/images/uoc-logo.png" class="img-responsive w100" title="Universitat Oberta de Catalunya" alt="Universitat Oberta de Catalunya" /></a>
                            </div>
                            <div class="col-md-10 col-lg-10 top-slogan col-clear-right">
                                <span class="ruler ruler--white w100-inline-block"></span>
                                <h2 class="nav-menu-title font-default">Universitat Oberta de Catalunya</h2>
                                <span class="ruler ruler--white w100-inline-block"></span>
                            </div>
                        </div>
                        <div class="hidden-lg hidden-xl hidden-md">
                            <div class="mobile-menu">
                                <div class="menu-mobile-container">
                                    <div class="top-logo">
                                        <a href="https://uoc.edu" title="Universitat Oberta de Catalunya">
                                            <img src="/images/uoc-logo.png" class="img-responsive w100" title="Universitat Oberta de Catalunya" alt="Universitat Oberta de Catalunya" />
                                        </a>
                                    </div>
                                    <div class="top-slogan">
                                        <h2 class="ruler ruler--double ruler--white w100-inline-block nav-menu-title font-default">Universitat Oberta de Catalunya</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hidden-md hidden-lg hidden-xl">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div id="mobile-menu-dropdown" data-dropdown-secondary="" role="navigation" class="dropdown-secondary dropdown-secondary--animated">
                                <button data-dropdown-secondary-trigger="" aria-label="Menu" title="Menu" accesskey="m" aria-expanded="false" aria-controls="dropdown-secondary__content1" class="pull-right mobile-button" data-toggle="#main-nav-menu, .mobile-menu" data-toggle-hide-class="hidden-xs hidden-sm" data-add-class-target="#main-header">
                                    <span aria-hidden="true" class="icon icon--zhamburguer focusable bg-grey is-active-hidden"></span>
                                    <span aria-hidden="true" class="icon icon--close focusable bg-grey is-active-visible"></span>
                                </button>
                                <div role="navigation" class="dropdown-secondary-content">
                                    <ul role="presentation" id="menu-footer-menu" class="menu-footer-mobile list--unstyled font-alternate">
                                        {data.allWordpressPage.edges.map(({ node }) => {
                                            if(["blog feed","home"].indexOf(node.title.toLowerCase())>-1){
                                                return
                                            }
                                            return (
                                                <li id="menu-item-931" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-929 current_page_item menu-item-931 dropdown-secondary__option ruler active">
                                                    <Link to={node.slug} dangerouslySetInnerHTML={{ __html: node.title }} class="dropdown-secondary__option__item dropdown-secondary__option--no-border"></Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
        
                            </div>
                            <div class="search">
                                <form action="/cercador/index.html" method="GET" class="search-form">
                                    <input type="text" placeholder="Cerca al blog" class="query" name="query" /><button type="submit" class="btn"><i class="icon icon--search" aria-hidden="true"></i></button>
                                </form>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>

            <div class="sub-header hidden-xs hidden-sm p-bottom-2y">
                <div class="container">
                    <div class="row">
                        <nav class="p-top-y">
                            <ul id="menu-ddi_apartats-1" class="list--inline pull-left">
                            {data.allWordpressPage.edges.map(({ node }) => {
                                    if(["blog feed","home"].indexOf(node.title.toLowerCase())>-1){
                                        return
                                    }
                                    return (
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-931">
                                            <Link to={node.slug} dangerouslySetInnerHTML={{ __html: node.title }}></Link>
                                        </li>
                                    )
                                }
                            )}
                            </ul>
                            <div class="search">
                                <form action="/cercador/index.html" method="GET" class="search-form">
                                    <input type="text" placeholder="Cerca al blog" class="query" name="query" /><button type="submit" class="btn"><i class="icon icon--search" aria-hidden="true"></i></button>
                                </form>
                            </div>
                        </nav>            
                    </div>
                </div>
            </div>    
        </header>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
