import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

const Categories = ({ nodes }) => {

    return (
        <div class="sidebar">
            <div class="block-categories block-facets">
                <div class="ruler ruler--dynamic"></div>
                <h4 class="h2 m-bottom-4y">Categories</h4>
                <ul class="list--unstyled">
                { 
                
                nodes.map(({ node }) => {
                        if(node.count>0){
                            return (
                                <li>
                                    <Link to={node.slug}>{node.name}<div class="length">({node.count})</div></Link>
                                </li>
                            )
                        }
                    }
                )}
                </ul>
            </div>          
        </div>
    )
}

Categories.propTypes = {
    nodes: PropTypes.array
}

export default Categories
