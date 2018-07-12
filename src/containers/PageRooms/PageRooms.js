import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Accommodation from '../../components/Accommodation'
import Facilities from '../../components/Facilities'
import Contact from '../../components/Contact'

class PageRooms extends React.Component {
  render() {

    return (
      <main className="main">
          <Accommodation />
          <Facilities images={this.props.data.galleryImages.edges} />
          <Contact />
      </main>
    )
  }
}

export default PageRooms;
