import React from 'react'
import Link from 'gatsby-link'

import NavMain from '../NavMain';
import SelectLanguage from '../SelectLanguage';

import logo from '../../assets/svg/logo.svg'

const Header = (props) => (
    
    <header className="Header">
        <div className="Header__Container">
            <a href={`/${props.currentLang}/`} className="Header__Logo">
                <span className="sr-only">Bed and Bike Öckerö</span>
                <img src={logo}/>
            </a>
            <div className="Header__Menu">
                <NavMain currentLang={props.currentLang}/>
            </div>
            <SelectLanguage langs={props.langs} />
        </div>
    </header>
)

export default Header;