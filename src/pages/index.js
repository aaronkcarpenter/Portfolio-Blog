import React from "react"
import Blog from '../pages/blog';
import Footer from "./footer";
import { graphql, Link } from 'gatsby'

import '../styling/blog.css';
import Navbar from "./navbar";


export default function Home({ data }) {
  const {title, description } = data.site.siteMetadata

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='headers-container'>
        <div className='title-header'>
          <h1>{title}</h1>
        <div className='subheader-home'>
          <p>{description}</p>
        </div>
        </div>
      </div>
      {/* <div className='subheader-home'>
      </div> */}
      <div className='image-container'>
        <img  className='header-photo' alt='Sexy Man' src={data.image.publicURL} />
      </div>
      {/* <Blog /> */}
      <div className='bio-container'>
        <p className='bio-container__child'>
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
      <div className='blog-section'>
      <div className='blog-links link-one'>
        <a href='http://localhost:8000/my-first-post/' target='_blank'>Blog Activated</a>
      <div className='image-one__container'>
        <img alt='BlogPost' src='/#' target='_blank' />
      </div>
      </div>
      <div className='blog-links link-two'>
        <a href='http://localhost:8000/my-first-post/' target='_blank'>Blog Post 2</a>
        <div className='image-one__container'>
          <img alt='LinkedIn Profile' src='/#' target='_blank' />
        </div>
      </div>
      <div className='blog-links link-three'>
        <a href='http://localhost:8000/my-first-post/' target='_blank'>Blog Post 3</a>
        <div className='image-one__container'>
          <img alt='AngelList Profile' src='/#' target='_blank' />
        </div>
      </div>
      <div className='blog-header'>
        <Link className='link blog-header' to='/blog'>Blog</Link>
      </div>
      </div>
      <div className='projects-section'>
        <div className='projects-header'>
          <h2>What I'm Currently Working On</h2>
        </div>
        <div className='projects-links link-one'>
          <p>
            <img alt='Clothing Website' src='/#' className='project-one__image' />
          </p>
          <div className='project-link'>
            <a href='https://app-academy-capstone-project.web.app/' target='_blank'>Aimé Leon Dore</a>
          </div>
        </div>
        <p>An e-Commerce platform for all of your Men's mid to high-end fashion needs.</p>
        <div className='projects-links link-two'>
          <p>
            <img alt='Sneaker Website' src='/#' className='project-one__image' />
          </p>
          <div className='project-link'>
            <a href='https://hypesnob.herokuapp.com/' target='_blank'>HypeSnob</a>
          </div>
        </div>
        <p>Celebrate sneaker culture and browse the latest styles of Jordan, Nike, and Adidas.</p>
        <div className='projects-links link-three'>
          <p>
            <img alt='Expense Splitting Application' src='/#' className='project-one__image' />
          </p>
          <div className='project-link'>
            <a href='http://splitorama.herokuapp.com/' target='_blank'>Split-O-Rama</a>
          </div>
        </div>
        <p>Keep track of and split expenses with others.</p>
        <div className='projects-links link-four'>
          <p>
            <img alt='Twitter Bot' src='/#' className='project-one__image' />
          </p>
          <div className='project-link'>
            <a href='http://twitter.com/bentleysuperior' target='_blank'>Twitter Bot</a>
          </div>
        </div>
      </div>
      <div className='socials-section'>
        <div className='socials-header'>
          <h2>Social</h2>
        </div>
        <div className='socials-links__container'>
          <div className='socials-links link-one'>
            <a href='https://www.github.com/aaronkcarpenter' target='_blank'>Github</a>
          <div className='image-one__container'>
            <img alt='Github Website' src='/#' target='_blank' />
          </div>
          </div>

        </div>
        <div className='socials-links__container'>
          <div className='socials-links link-two'>
            <a href='https://www.linkedin.com/in/aaronkcarpenter' target='_blank'>LinkedIn</a>
            <div className='image-one__container'>
              <img alt='LinkedIn Profile' src='/#' target='_blank' />
            </div>
          </div>
        </div>
        <div className='socials-links__container'>
          <div className='socials-links link-three'>
            <a href='https://angel.co/u/aaron-carpenter-4' target='_blank'>AngelList</a>
            <div className='image-one__container'>
              <img alt='AngelList Profile' src='/#' target='_blank' />
            </div>
          </div>
        </div>
      </div>
      <div className='main-container'>
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
      <Footer />
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
