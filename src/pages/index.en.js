import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Accommodation from '../components/Accommodation'
import Facilities from '../components/Facilities'
import Contact from '../components/Contact'

class IndexPage extends React.Component {
  render() {
    return (
        <main className="main">
            <Hero image={this.props.data.heroImage} /> 
            <Intro />
      </main>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
    query IndexEnQuery {
        galleryImages: allImageSharp(filter: {id: {regex: "/faciliteter/"}}) {
            edges {
                node {
                    id
                    original {
                        width
                        height
                        src
                    }
                    sizes(maxWidth: 800) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
        },
        heroImage: imageSharp(id: { regex: "/lejonet.jpg/" }) {
            sizes(maxWidth: 1400) {
                ...GatsbyImageSharpSizes
            }
        }
    }
`;
