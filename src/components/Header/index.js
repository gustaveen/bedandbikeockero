import React from 'react'
import Link from 'gatsby-link'

import SelectLanguage from '../SelectLanguage';

const Header = (props) => (
    <header className="header">
        <div className="header__container">
            <p>Bed & Bike Öckerö</p>
            <SelectLanguage langs={props.langs} />
        </div>
    </header>
)

export default Header
