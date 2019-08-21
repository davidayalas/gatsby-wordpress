import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

const PostHome = ({ title, slug, excerpt, date }) => {

    date = new Date(date)
    const strdate = date.getDay()+"/"+(date.getMonth()+1)+"/"+ date.getFullYear() + " " + date.getHours()+":"+date.getMinutes()

    return (
        <div class="m-bottom-6y">
            <div class="block-post-without-img">
                <Link to={slug}>
                    <h2 class="font-alternate"><span class="highlighted" dangerouslySetInnerHTML={{ __html: title }}></span></h2>
                </Link>
                <div class="color-grey-dark">
                    <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>
                </div>
                <div class="item-post-footer clearfix">
                    <div class="date pull-left color-grey-dark">
                        <span>{strdate}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

PostHome.propTypes = {
    title: PropTypes.string,
    excerpt: PropTypes.string,
    slug: PropTypes.string,
    date: PropTypes.instanceOf(Date)
}

export default PostHome
