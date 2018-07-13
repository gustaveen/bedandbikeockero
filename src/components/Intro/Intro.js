import React from 'react'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl';

import bike from '../../assets/svg/bike.svg'


class Intro extends React.PureComponent {
    render() {
        return (
            <section className="Intro">
                <div className="Intro__Container">
                    <img className="Intro__Icon" src={bike} />
                    <h2 className="Intro__Text">
                        {/* <FormattedMessage id="introText" /> */}
                        Välkommen till Bed & Bike Öckerö, en pärla för aktiviteter och rekreation. Hos oss kan du njuta av husets lugn, vackra rum och nyttig frukost. Du kan hyra cykel och kajak. Vi kan erbjuda förslag på turer såväl med <strong>cykel</strong>, <strong>kajak</strong> som <strong>vandring</strong>.
                    </h2>
                </div>
            </section>
        );
    }
}

export default Intro;


