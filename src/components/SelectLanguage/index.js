import React from 'react';
import classNames from 'classnames'

import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

class SelectLanguage extends React.Component {
    handleChange = (e) => {
        console.log(e);
        window.location = e.target.value;
    }

    render() {
        const { langs } = this.props;
        let activeLang = langs.filter((item) => item.selected === true);
        activeLang = activeLang[0];
        console.log(langs);
        return (
            <div className="SelectLanguage">
                <div className="SelectLanguage__Wrap">
                    <div className="SelectLanguage__TitleContainer">
                        <span className="SelectLanguage__Title">Change language</span>
                    </div>
                    {/* <label htmlFor={selectId} className="SelectLanguage__Label">Change language</label> */}
                    <select className="SelectLanguage__Select" value={activeLang.link} onChange={this.handleChange}>
                        {langs.map((lang, key) => <option key={key} value={lang.link}><FormattedMessage id={lang.langKey} /></option>)}
                    </select>
                </div>
            </div>
        );
    }
}

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
