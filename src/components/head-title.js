import PropTypes from "prop-types"
import React from "react"

const HeaderTitle = ({ title }) => {

    return (
        <div class="row">
            <div class="block-header-one-column">
            <div class="wrap-img-bg">
                <div class="container">
                    <div class="wrap-title ">
                    <h1><a href="/">{title}</a></h1>
                    <h3 class="font-alternate"></h3>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

HeaderTitle.propTypes = {
  title: PropTypes.string,
}

export default HeaderTitle