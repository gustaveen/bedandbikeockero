import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

const SelectLanguage = (props) => {
  console.log(props.langs);
  const langs = props.langs;

  return (
    <div className="header__lang">
        {langs.map((lang, index)  =>
          <Link to={lang.link} key={lang.langKey} style={{
            color: 'white'
          }}>
            {!lang.selected &&
              <div selected={lang.selected}>
                <FormattedMessage id={lang.langKey} />
              </div>
            }
          </Link>
        )}
    </div>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
