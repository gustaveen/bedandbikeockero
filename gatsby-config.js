const languages = require('./src/data/languages');

module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
        languages
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
              path: `${__dirname}/src/assets/images`
            }
        },
        {
            resolve: 'gatsby-plugin-i18n',
            options: {        
                langKeyForNull: 'any',
                langKeyDefault: languages.defaultLangKey,
                useLangKeyLayout: true
            }
        }
    ]
};