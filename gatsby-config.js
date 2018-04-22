module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-json`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `src`,
              path: `${__dirname}/src/`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/images`
            }
        },
        {
            resolve: 'gatsby-plugin-i18n',
            options: {        
                langKeyDefault: 'sv',
                useLangKeyLayout: false
            }
        }
    ]
};