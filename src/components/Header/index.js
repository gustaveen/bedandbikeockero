import React from 'react'
import Link from 'gatsby-link'

import NavMain from '../NavMain';

const Header = (props) => (
    
    <header className="Header">
        <div className="Header__Container">
            <a href="/" className="Header__Logo">Bed & Bike Öckerö</a>
            <div className="Header__Menu">
                <NavMain currentLang={props.currentLang}/>
            </div>
            {/* <SelectLanguage langs={props.langs} /> */}
        </div>
    </header>
)

export default Header
