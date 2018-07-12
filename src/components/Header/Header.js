import React from 'react'
import Link from 'gatsby-link'

import NavMain from '../NavMain';
import SelectLanguage from '../SelectLanguage';

const Header = (props) => (
    
    <header className="Header">
        <div className="Header__Container">
            <a href={`/${props.currentLang}/`} className="Header__Logo">Bed & Bike Öckerö</a>
            <div className="Header__Menu">
                <NavMain currentLang={props.currentLang}/>
                {/* <SelectLanguage langs={props.langs} /> */}
            </div>
        </div>
    </header>
)

export default Header;