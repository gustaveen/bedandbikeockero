import React from 'react';
import PageActivities from '../../containers/PageActivities';
import graphql from 'graphql';

const i18n = {
    description: (
      <p>
        Hi! I am Ângelo, a Freelance Full-Stack Developer since 2007.
        My professional journey started when I was 14 years-old. 
        Since then, I have been passionate about programming.  <br /><br />
        
        Most recently, I have my mindset on TDD, Functional Programming, Offline First, Mobile First
        and Frog Cloud. <br /><br />
  
        I’m an Arch Linux user and Nodejs Developer.
      </p>
    ),
    descriptionForGoogle: `
      My professional journey started when I was 14 years-old. Since then, I have been passionate about programming. Most recently, I have my mindset on TDD, Functional Programming, Offline First, Mobile First 
      and Frog Cloud.
      
      I’m an Arch Linux user.
    `
};

export default (props) => <PageActivities i18n={i18n} {...props} />;

export const pageQuery = graphql`
    query ActivitiesSvQuery {
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
        heroImage: imageSharp(id: { regex: "/apeloga.jpg/" }) {
            sizes(maxWidth: 2000) {
                ...GatsbyImageSharpSizes
            }
        }
    }
`;
