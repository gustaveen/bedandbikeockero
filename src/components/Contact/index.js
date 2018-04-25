import React from 'react'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl';

const Contact = () => (
    <section className="contact section">
        <div className="contact__header section__container u-center u-text-center">
            <h2 className="contact__title heading heading--line heading--m heading--center">
                <FormattedMessage id="contactTitle" />
            </h2>
            <p className="contact__preamble u-text-center"><FormattedMessage id="contactText" /> <a href="mailto:bedandbikeockero@gmail.com">bedandbikeockero@gmail.com</a></p>
        </div>
    </section>

)

export default Contact
