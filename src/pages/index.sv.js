import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Hero from '../components/Hero';
import Intro from '../components/Intro';
import BookingBar from '../components/BookingBar';
import Rooms from '../components/Rooms';
import Accommodation from '../components/Accommodation'
import Facilities from '../components/Facilities'
import Contact from '../components/Contact'

class IndexPage extends React.Component {
  render() {
    return (
        <main className="main">
            <Hero image={this.props.data.heroImage} /> 
            <BookingBar/>
            <Intro/>
            <Rooms/>
        </main>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
    query IndexSvQuery {
        heroImage: imageSharp(id: { regex: "/henrik_trygg-kayaking.jpg/" }) {
            sizes(maxWidth: 2480) {
                ...GatsbyImageSharpSizes
            }
        }
    }
`;
