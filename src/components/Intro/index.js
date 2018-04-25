import React from 'react'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl';

import house from '../../images/villan.jpg'


class Intro extends React.PureComponent {
    render() {
        console.log(this.props);
        return (
            <section className="intro section">
                <div className="intro__header section__container u-center u-text-center">
                    <h2 className="intro__title heading heading--line heading--m">
                        <FormattedMessage id="introTitle" />
                    </h2>
                    <p className="intro__preamble section__preamble u-center">
                        <FormattedMessage id="introText" />
                    </p>
                </div>
                <div className="billboard u-center">
                    <img className="billboard__image" src={house} alt="Vår fina villa" />
                    <div className="billboard__image-2"></div>
                </div>
            </section>
        );
    }
}

export default Intro;


