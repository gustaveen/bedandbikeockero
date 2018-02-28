import React from 'react'
import Link from 'gatsby-link'

import room1 from '../../images/rum-1.jpg'
import room2 from '../../images/rum-2.jpg'
import room3 from '../../images/rum-3.jpg'
import room4 from '../../images/rum-4.jpg'

class Accommodation extends React.PureComponent {
    
    render() {
        return (
            <section className="accommodation section u-text-center">
                <div className="accommodation__header u-center">
                    <h2 className="accommodation__section-title heading heading--line heading--m heading--center">Våra rum</h2>
                    <p className="section__preamble u-center">Vi har 3 dubbelrum och 1 enkelrum,  gemensamt allrum, pentry och WC/dusch på andra våning i ett över hundra år gammalt skärgårdshus.</p>
                </div>
                <div className="accommodation__container u-center">
                    <div className="accommodation__item">
                        <div className="accommodation__image-container">
                            <img src={room1} alt="" className="accommodation__image" />
                            <span className="accommodation__price">950kr</span>
                        </div>
                        <div className="accommodation__text">
                            <div className="accommodation__title-container">
                                <h2 className="accommodation__title heading heading--m">Rum 1</h2>
                                <span className="accommodation__pers accommodation__pers--two">2-3 Gäster</span>
                            </div>
                            <p className="accommodation__preamble">Ett större rum med egen balkong och plats för en extrasäng vid behov.</p>
                        </div>
                    </div>

                    <div className="accommodation__item">
                        <div className="accommodation__image-container">
                            <img src={room2} alt="" className="accommodation__image" />
                            <span className="accommodation__price">950kr</span>
                        </div>
                        <div className="accommodation__text">
                            <div className="accommodation__title-container">
                                <h2 className="accommodation__title heading heading--m">Rum 2</h2>
                                <span className="accommodation__pers accommodation__pers--two">2 Gäster</span>
                            </div>
                            <p className="accommodation__preamble">Ett mysigt rum i blått med egen garderob.</p>
                        </div>
                    </div>

                    <div className="accommodation__item">
                        <div className="accommodation__image-container">
                            <img src={room3} alt="" className="accommodation__image" />
                            <span className="accommodation__price">950kr</span>
                        </div>
                        <div className="accommodation__text">
                            <div className="accommodation__title-container">
                                <h2 className="accommodation__title heading heading--m">Rum 3</h2>
                                <span className="accommodation__pers accommodation__pers--two">2 Gäster</span>
                            </div>
                            <p className="accommodation__preamble">Ett romantiskt rum med bord och stolar.</p>
                        </div>
                    </div>

                    <div className="accommodation__item">
                        <div className="accommodation__image-container">
                            <img src={room4} alt="" className="accommodation__image" />
                            <span className="accommodation__price">500kr</span>
                        </div>
                        <div className="accommodation__text">
                            <div className="accommodation__title-container">
                                <h2 className="accommodation__title heading heading--m">Rum 4</h2>
                                <span className="accommodation__pers accommodation__pers--one">1 Gäst</span>
                            </div>
                            <p className="accommodation__preamble">Singelrummet intimt med pärlspont och snedtak.</p>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Accommodation

// export const query = graphql`
//   query AboutQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `


// export const pageQuery = graphql`
  // query TestQuery {
  //   imageOne: imageSharp(id: { regex: "../rum-1.jpg/" }) {
  //     sizes(maxWidth: 630) {
  //       ...GatsbyImageSharpSizes
  //     }
  //   }
  // }
// `;


