import React from "react"
import Blog from '../pages/blog';
import { graphql, Link } from 'gatsby'

import '../styling/blog.css';


export default function Home({ data }) {
  const {title, description } = data.site.siteMetadata

  return (
    <div>
      <div className='title-header'>
        <h1>{title}</h1>
      </div>
      <div className='subheader-home'>
        <p>{description}</p>
      </div>
      <div className='image-container'>
        <img  className='header-photo' alt='Sexy Man' src={data.image.publicURL} />
      </div>
      {/* <Blog /> */}
      <div className='bio'>
        <p>
          I'm Aaron, a Supply Chain and Logistics professional turned Software engineer. 
          I'm well versed in JavaScript, PostgreSQL, Express, Python, Firebase, Flask 
          and a host of other frameworks and languages. My interests are in building 
          products from the visualization phase into tangible products. I simply enjoy 
          merging the two worlds of business and technology together. The internet 
          has been an amazing place for me since I was a child, and I'm quite intrigued 
          with how I can make the next young Aaron feel the same way that I do about it. 
          I'm looking for a role that pushes me for growth, both personally and professionally.
        </p>
      </div>
      <div className='blog-container'>
        <Link className='link' to='/blog'>Checkout My Recent Blog Posts</Link>
      </div>
      <div className='main-container'>
        <div className='projects-section'>
          <div className='projects-header'>
            <h2>Projects</h2>
          </div>
          <div className='projects-links link-one'>
            <small>
              <a href='https://app-academy-capstone-project.web.app/'>Aimé Leon Dore</a>
              <span>
                {/* <img alt='Clothing Website' src-'/#' className='project-one__image' /> */}
              </span>
            </small>
          </div>
          <div className='projects-links link-two'>
            <small>
              <a href='https://hypesnob.herokuapp.com/'>HypeSnob</a>
            </small>
          </div>
          <div className='projects-links link-three'>
            <small>
              <a href='http://splitorama.herokuapp.com/'>Split-O-Rama</a>
            </small>
          </div>
        </div>
        <div className='socials-section'>
          <div className='socials-header'>
            <h2>Social</h2>
          </div>
          <div className='socials-links link-one'>
            <a href='https://www.github.com/aaronkcarpenter'>Github</a>
          </div>
          <div className='socials-links link-two'>
            <a href='https://www.linkedin.com/in/aaronkcarpenter'>LinkedIn</a>
          </div>
          <div className='socials-links link-three'>
            <a href='https://angel.co/u/aaron-carpenter-4'>AngelList</a>
          </div>
        </div>
        <div className='contact-section'>
          <div className='contact-header'>
            <h2>Contact</h2>
          </div>
          <div className='contact-links link-one'>
            <a href='https://docs.google.com/document/d/16iFr5Lm5A0wd0E9YwMRcWvwwZPIf99BM/export?format=pdf&attachment=false'>Resumé</a>
          </div>
          <div className='contact-links link-two'>
            <a href='aaronkcarpenter@gmail.com'>Email Me</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    image: file(base: { eq: "blog-pic-one.png" }) {
      publicURL
    }
  }
`
