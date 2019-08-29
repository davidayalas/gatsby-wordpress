require("dotenv").config({ path: 'wordpress.env' })

module.exports = {
  siteMetadata: {
    title: `Gatsby & Wordpress as a HeadlessCMS`,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby & Wordpress as a HeadlessCMS`,
        short_name: `Gatsby & WP`,
        start_url: `/`,
        background_color: `#73EDFF`,
        theme_color: `#73EDFF`,
        display: `minimal-ui`,
        icon: `static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: process.env.baseUrl,
        protocol: process.env.protocol,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: process.env.hostingWPCOM,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: process.env.useACF,
        excludedRoutes: ["**/settings", "**/themes", "**/users/me"],
        auth: {
          // If hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          // Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
          // If two-factor authentication is enabled then you need to create an Application-Specific Password,
          // see https://en.support.wordpress.com/security/two-step-authentication/#application-specific-passwords
          wpcom_app_clientSecret: process.env.wpcom_app_clientSecret,
          wpcom_app_clientId: process.env.wpcom_app_clientId,
          wpcom_user: process.env.wpcom_user,
          wpcom_pass: process.env.wpcom_pass,
        },        
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
