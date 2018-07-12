import React from 'react'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl';

import SlickSlider from '../SlickSlider'

const Facilities = (images) => (
    <section className="facilities section">
        <div className="facilities__container section__container u-center u-text-center">
            <div className="facilities__header section__container u-center u-text-center">
                <h2 className="facilities__title heading heading--line heading--m heading--center">
                    <FormattedMessage id="facilitiesTitle" />
                </h2>
                <p className="facilities__byline"><FormattedMessage id="facilitiesByline" /></p>
            </div>

            <div className="facilities__main">
                <ul className="facilities__list u-center u-clearfix">
                    <li className="facilities__item facilities__item--cup"><p><FormattedMessage id="breakfast" /></p></li>
                    <li className="facilities__item facilities__item--laundry"><p><FormattedMessage id="laundry" /></p></li>
                    <li className="facilities__item facilities__item--towel"><p><FormattedMessage id="linen" /></p></li>
                    <li className="facilities__item facilities__item--shower"><p><FormattedMessage id="wc" /></p></li>
                    <li className="facilities__item facilities__item--wifi"><p><FormattedMessage id="wifi" /></p></li>
                    <li className="facilities__item facilities__item--lock"><p><FormattedMessage id="storage" /></p></li>
                    <li className="facilities__item facilities__item--cleaning"><p><FormattedMessage id="cleaning" /></p></li>
                </ul>
                <div className="facilities__slideshow">
                    <SlickSlider {...images} />
                </div>
            </div>
        </div>
    </section>
)

export default Facilities
