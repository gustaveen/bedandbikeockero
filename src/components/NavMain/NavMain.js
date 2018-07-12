/* global location */
import React from 'react'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl';

import SelectLanguage from '../SelectLanguage';

const NavMain = (props) => (
    <ul className="NavMain">
        <li className="NavMain__Item">
            <Link 
                to={`/${props.currentLang}/rooms/`} 
                className="NavMain__ItemLink"
                activeClassName="NavMain__ItemLink--Active" 
            >
                <FormattedMessage id="navRooms" />
            </Link>
        </li>
        <li className="NavMain__Item">
            <Link 
                to={`/${props.currentLang}/activities/`} 
                className="NavMain__ItemLink"
                activeClassName="NavMain__ItemLink--Active"
            >
                <FormattedMessage id="navActivities"/>
            </Link>
        </li>
        <li className="NavMain__Item">
            <Link 
                to={`/${props.currentLang}/packages/`} 
                className="NavMain__ItemLink"
                activeClassName="NavMain__ItemLink--Active"
            >
                <FormattedMessage id="navPackages"/>
            </Link>
        </li>
        <li className="NavMain__Item">
            <Link 
                to={`/${props.currentLang}/find-us/`} 
                className="NavMain__ItemLink"
                activeClassName="NavMain__ItemLink--Active"
            >
                <FormattedMessage id="navFindUs"/>
            </Link>
        </li>
    </ul>
)

export default NavMain;