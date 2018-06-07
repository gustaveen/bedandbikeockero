import React from 'react'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl';

import SelectLanguage from '../SelectLanguage';

const NavMain = (props) => (
    <ul className="NavMain">
        <li
            className={
            location.pathname === `/${props.currentLang}/rooms/`
                ? 'NavMain__Item NavMain__Item--Active'
                : 'NavMain__Item'
            }
        >
            <Link to={`/${props.currentLang}/rooms/`} className="NavMain__ItemLink">
                <FormattedMessage id="navRooms" />
            </Link>
        </li>
        <li
            className={
            location.pathname === `/${props.currentLang}/activities/`
                ? 'NavMain__Item NavMain__Item--Active'
                : 'NavMain__Item'
            }
        >
            <Link to={`/${props.currentLang}/activities/`} className="NavMain__ItemLink">
                <FormattedMessage id="navActivities" />
            </Link>
        </li>
        <li
            className={
            location.pathname === '/rooms/'
                ? 'NavMain__Item--Active'
                : 'NavMain__Item'
            }
        >
            <Link to={`/${props.currentLang}/rooms/`} className="NavMain__ItemLink">
                <FormattedMessage id="navPackages" />
            </Link>
        </li>
        <li
            className={
            location.pathname === '/rooms/'
                ? 'NavMain__Item--Active'
                : 'NavMain__Item'
            }
        >
            <Link to={`/${props.currentLang}/rooms/`} className="NavMain__ItemLink">
                <FormattedMessage id="navFindUs" />
            </Link>
        </li>
    </ul>
)

export default NavMain