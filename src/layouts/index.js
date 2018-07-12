import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';

import Header from '../components/Header'
import "../styles/main.scss"

const TemplateWrapper = ({ children, data, location, i18nMessages }) => {
    const url = location.pathname;
    const { langs, defaultLangKey } = data.site.siteMetadata.languages;
    console.log(data.site);
    const langKey = getCurrentLangKey(langs, defaultLangKey, url);
    const homeLink = `/${langKey}/`;
    const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

    return (
        <IntlProvider
          locale={langKey}
          messages={i18nMessages}
        >
            <div>
                <Helmet
                    title="Bed and Bike Öckerö"
                    meta={[
                        { name: 'description', content: i18nMessages.metaDescription },
                    ]}
                >
                    <link rel="stylesheet" href="https://use.typekit.net/ayz7upu.css" />
                </Helmet>
                <Header 
                    langs={langsMenu} 
                    currentLang={langKey}
                />
                {children()}
            </div>
        </IntlProvider>
    );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const pageQuery = graphql`
  query Layout {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }      
      }
    }
  }
`;
