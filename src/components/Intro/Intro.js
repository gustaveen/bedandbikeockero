import React from 'react'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl';

import house from '../../images/villan.jpg'


class Intro extends React.PureComponent {
    render() {
        return (
            <section className="Intro">
                <div className="Intro__Header">
                    <h2 className="Intro__Title">
                        <FormattedMessage id="introTitle" />
                    </h2>
                    <p className="Intro__Preamble">
                        <FormattedMessage id="introText" />
                    </p>
                </div>
                <div className="Intro__Billboard">
                    <img className="Intro__Image" src={house} alt="Vår fina villa" />
                    <div className="Intro__Image-2"></div>
                </div>
            </section>
        );
    }
}

export default Intro;


