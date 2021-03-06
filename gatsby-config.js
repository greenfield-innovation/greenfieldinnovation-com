module.exports = {
  siteMetadata: {
    title: `Greenfield Innovation Group`,
    description: `Guiding technology companies from zero to product launch`,
    author: `@monte_hayward`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#dde5dd`,
        theme_color: `#dde5dd`,
        display: `minimal-ui`,
        icon: `src/images/gig-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',

    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require(`sass`), // dart sass
        data: `@import 'palette.module.scss';`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `/images/`,
        },
      },
    },
  ],
};
