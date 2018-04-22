import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Hero = (heroImage) => (
    <div className="hero">
        <Img sizes={heroImage.sizes} 
            alt=""
        />
    </div>
)

export default Hero
