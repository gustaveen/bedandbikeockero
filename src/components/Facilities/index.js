import React from 'react'
import Link from 'gatsby-link'

import SlickSlider from '../SlickSlider'

const Facilities = (images) => (
    <section className="facilities section">
        <div className="facilities__container section__container u-center u-text-center">
            <div className="facilities__header section__container u-center u-text-center">
                <h2 className="facilities__title heading heading--line heading--m heading--center">Faciliteter</h2>
                <p className="facilities__byline">Allt detta ingår i priset</p>
            </div>

            <div className="facilities__main">
                <ul className="facilities__list u-center u-clearfix">
                    <li className="facilities__item facilities__item--cup"><p>Frukost</p></li>
                    <li className="facilities__item facilities__item--laundry"><p>Tvättmaskin</p></li>
                    <li className="facilities__item facilities__item--towel"><p>Lakan & handduk</p></li>
                    <li className="facilities__item facilities__item--shower"><p>Dusch/WC</p></li>
                    <li className="facilities__item facilities__item--wifi"><p>Trådlöst internet</p></li>
                    <li className="facilities__item facilities__item--lock"><p>Cykelrum med lås</p></li>
                    <li className="facilities__item facilities__item--cleaning"><p>Städning</p></li>
                </ul>
                <div className="facilities__slideshow">
                    <SlickSlider {...images} />
                </div>
            </div>
        </div>
    </section>
)

export default Facilities
