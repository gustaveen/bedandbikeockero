import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Accommodation from '../../components/Accommodation'
import Facilities from '../../components/Facilities'
import Contact from '../../components/Contact'

class PageHome extends React.Component {
  render() {
    console.log(this.props);
    return (
      <main className="main">
          <Img sizes={this.props.data.heroImage.sizes} />
          <Accommodation />
          <Contact />
      </main>
    )
  }
}

export default PageHome
