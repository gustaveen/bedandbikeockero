import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Accommodation from '../components/Accommodation'
import Facilities from '../components/Facilities'
import Contact from '../components/Contact'

class IndexPage extends React.Component {
  render() {
    console.log(this.props.data.galleryImages.edges);
    return (
      <main className="main">
          <Hero />
          <Intro />
          <Accommodation />
          <Facilities images={this.props.data.galleryImages.edges} />
          <Contact />
      </main>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
    query IndexQuery {
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
        }
    }
`

