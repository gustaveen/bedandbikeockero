import React from 'react'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl';

import room1 from '../../assets/images/rum-1.jpg'
import room2 from '../../assets/images/rum-2.jpg'
import room3 from '../../assets/images/rum-3.jpg'
import room4 from '../../assets/images/rum-4.jpg'

class Accommodation extends React.PureComponent {
    
    render() {
        return (
            <section className="Accommodation section u-text-center">
                <div className="Accommodation__header u-center">
                    <h2 className="Accommodation__section-title heading heading--line heading--m heading--center">
                        <FormattedMessage id="accomodationTitle" />
                    </h2>
                    <p className="section__preamble u-center">
                        <FormattedMessage id="accomodationPreamlbe" />
                    </p>
                </div>
                <div className="Accommodation__container u-center">
                    <div className="Accommodation__item">
                        <div className="Accommodation__image-container">
                            <img src={room1} alt="" className="Accommodation__image" />
                            <span className="Accommodation__price">950kr</span>
                        </div>
                        <div className="Accommodation__text">
                            <div className="Accommodation__title-container">
                                <h2 className="Accommodation__title heading heading--m"><FormattedMessage id="room" /> 1</h2>
                                <span className="Accommodation__pers Accommodation__pers--two">2-3 <FormattedMessage id="guests" /></span>
                            </div>
                            <p className="Accommodation__preamble">
                                <FormattedMessage id="room1" />
                            </p>
                        </div>
                    </div>

                    <div className="Accommodation__item">
                        <div className="Accommodation__image-container">
                            <img src={room2} alt="" className="Accommodation__image" />
                            <span className="Accommodation__price">950kr</span>
                        </div>
                        <div className="Accommodation__text">
                            <div className="Accommodation__title-container">
                                <h2 className="Accommodation__title heading heading--m"><FormattedMessage id="room" /> 2</h2>
                                <span className="Accommodation__pers Accommodation__pers--two">2 <FormattedMessage id="guests" /></span>
                            </div>
                            <p className="Accommodation__preamble">
                                <FormattedMessage id="room2" />
                            </p>
                        </div>
                    </div>

                    <div className="accommodation__item">
                        <div className="accommodation__image-container">
                            <img src={room3} alt="" className="accommodation__image" />
                            <span className="accommodation__price">950kr</span>
                        </div>
                        <div className="accommodation__text">
                            <div className="accommodation__title-container">
                                <h2 className="accommodation__title heading heading--m"><FormattedMessage id="room" /> 3</h2>
                                <span className="accommodation__pers accommodation__pers--two">2 <FormattedMessage id="guests" /></span>
                            </div>
                            <p className="accommodation__preamble">
                                <FormattedMessage id="room3" />
                            </p>
                        </div>
                    </div>

                    <div className="accommodation__item">
                        <div className="accommodation__image-container">
                            <img src={room4} alt="" className="accommodation__image" />
                            <span className="accommodation__price">500kr</span>
                        </div>
                        <div className="accommodation__text">
                            <div className="accommodation__title-container">
                                <h2 className="accommodation__title heading heading--m"><FormattedMessage id="room" /> 4</h2>
                                <span className="accommodation__pers accommodation__pers--one">1 <FormattedMessage id="guests" /></span>
                            </div>
                            <p className="accommodation__preamble">
                                <FormattedMessage id="room4" />
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Accommodation


