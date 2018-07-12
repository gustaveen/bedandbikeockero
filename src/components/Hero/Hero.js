import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { FormattedMessage } from 'react-intl';

class Hero extends React.Component {

    render() {
        const { image } = this.props;
        return(
            <div className="Hero">
                <Img sizes={image.sizes} 
                    alt=""
                />
                <h1 className="Hero__Title"><FormattedMessage id="introTitle"/></h1>
            </div>
        );
    }
}

export default Hero;
