import React from 'react'
import Link from 'gatsby-link'

import house from '../../images/villan.jpg'

const Intro = () => (
    <section className="intro section">
        <div className="intro__header section__container u-center u-text-center">
            <h2 className="intro__title heading heading--line heading--m">Välkommen till Öckerö</h2>
            <p className="intro__preamble section__preamble u-center">Välkommen till Bed & Bike Öckerö, en pärla för aktiviteter och rekreation. Hos oss kan du njuta av husets lugn, vackra rum och nyttig frukost. Du kan hyra cykel och kajak. Vi kan erbjuda förslag på turer såväl med cykel, kajak som vandring.</p>
        </div>
        <div className="billboard u-center">
            <img className="billboard__image" src={house} alt="Vår fina villa" />
            <div className="billboard__image-2"></div>
        </div>
    </section>
)

export default Intro


