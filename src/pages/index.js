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
      {/* <div className='headers-container'>
        <div className='title-header'>
          <h1>{title}</h1>
        <div className='subheader-home'>
          <p>{description}</p>
        </div>
        </div>
      </div> */}
      {/* <div className='subheader-home'>
      </div> */}
      {/* <Blog /> */}
      <div className='image-container'>
        <img  className='header-photo' alt='Sexy Man' src={data.image.publicURL} />
      </div>
      <div className='bio-container'>
        <p className='bio-container__child'>
          Hi! I'm Aaron, a Supply Chain and Logistics professional turned Software Engineer. 
          While I believe that I have an eye for great designs and enjoy working
          with the front end of applications, my training at App Academy exposed
          me to the entire application development process, back to front.
          I'm well versed in JavaScript, PostgreSQL, Express, Python, Firebase, Flask 
          and a host of other frameworks and languages. My interests are in building 
          products, developing tools to acquire data, and automation. To put it simply, I enjoy 
          merging the two worlds of business and technology together. The internet 
          has been an amazing place for many years, and I'm intrigued 
          with using code to take the benefits to a new level. I'm currently looking 
          for a role that pushes me for growth, both personally and professionally.
        </p>
      </div>
      <div className='blog-section'>
      <div className='blog-links link-one'>
        <a href='/twitter-bot-suspension/' target='_blank'>How I Got My First Twitter Bot Suspended</a>
      <div className='image-one__container'>
        <img alt='BlogPost' src={data.imageTwo.publicURL} target='_blank' className='image-one'/>
      </div>
      </div>
      <div className='blog-links link-two'>
        <a href='/my-first-post/' target='_blank'>Rejected</a>
        <div className='image-one__container'>
          <img alt='Post 2' src={data.imageTwo.publicURL} target='_blank' className='image-one'/>
        </div>
      </div>
      <div className='blog-links link-three'>
        <a href='/my-first-post/' target='_blank'>Blog Post 3</a>
        <div className='image-one__container'>
          <img alt='Post 3' src={data.imageTwo.publicURL} target='_blank' className='image-one' />
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
            <img alt='Clothing Website' src='https://u.cubeupload.com/aaronkyle/ScreenShot20210101at.png' className='project-one__image' />
          </p>
        </div>
        <div className='project-link'>
          <a href='https://app-academy-capstone-project.web.app/' target='_blank'>Aimé Leon Dore</a>
        </div>
        <p>An e-Commerce platform for all of your Men's mid to high-end fashion needs.</p>
        <div className='projects-links link-two'>
          <p>
            <img alt='Sneaker Website' src='https://u.cubeupload.com/aaronkyle/ScreenShot20210102at.png' className='project-two__image' />
          </p>
        </div>
        <div className='project-link'>
          <a href='https://hypesnob.herokuapp.com/' target='_blank'>HypeSnob</a>
        </div>
        <p>Celebrate sneaker culture and browse the latest styles of Jordan, Nike, and Adidas.</p>
        <div className='projects-links link-three'>
          <p>
            <img alt='Expense Splitting Application' src='https://u.cubeupload.com/aaronkyle/ScreenShot20200830at.png' className='project-three__image' />
          </p>
        </div>
        <div className='project-link'>
          <a href='http://splitorama.herokuapp.com/' target='_blank'>Split-O-Rama</a>
        </div>
        <p>Keep track of and split expenses with others.</p>
        <div className='projects-links link-four'>
          <p>
            <img alt='Twitter Bot' src={data.imageTwo.publicURL} className='project-one__image image-one' />
          </p>
        </div>
        <div className='project-link'>
          <a href='http://twitter.com/bentleysuperior' target='_blank'>Twitter Bot</a>
        </div>
        <p>Bentley Superior posts the most retweeted tweets daily</p>
        <div className='projects-links link-five'>
          <p>
            <img alt='Property Scraper' src='https://u.cubeupload.com/aaronkyle/f70ScreenShot20201112at.png' className='project-five__image' />
          </p>
        </div>
        <div className='project-link'>
          <a href='http://github.com/aaronkcarpenter' target='_blank'>Software Jobs Scraper</a>
        </div>
        <p>This scraper allows you to pull relevant Software Engineer job postings.</p>
      </div>
      <div className='socials-section'>
        <div className='socials-header'>
          <h2>Social</h2>
        </div>
        <div className='socials-links__container'>
          <div className='socials-links link-one'>
            <a href='https://www.github.com/aaronkcarpenter' target='_blank' className='socials-links__title'>Github</a>
          <div className='image-one__container'>
            <img alt='Github Website' src='https://u.cubeupload.com/aaronkyle/eb0ScreenShot20210102at.png' target='_blank' className='social-image__one' />
          </div>
          </div>

        </div>
        <div className='socials-links__container'>
          <div className='socials-links link-two'>
            <a href='https://www.linkedin.com/in/aaronkcarpenter' target='_blank'>LinkedIn</a>
            <div className='image-one__container'>
              <img alt='LinkedIn Profile' src='https://u.cubeupload.com/aaronkyle/dc9ScreenShot20210102at.png' target='_blank' className='social-image__two' />
            </div>
          </div>
        </div>
        <div className='socials-links__container'>
          <div className='socials-links link-three'>
            <a href='https://angel.co/u/aaron-carpenter-4' target='_blank'>AngelList</a>
            <div className='image-one__container'>
              <img alt='AngelList Profile' src='https://u.cubeupload.com/aaronkyle/304ScreenShot20210102at.png' target='_blank' className='social-image__three' />
            </div>
          </div>
        </div>
      </div>
      {/* <div className='main-container'>
        <div className='contact-section'>
          <div className='contact-header'>
            <h2>Contact</h2>
          </div>
          <div className='contact-links link-one'>
            <a href='https://docs.google.com/document/d/16iFr5Lm5A0wd0E9YwMRcWvwwZPIf99BM/export?format=pdf&attachment=false'>Resumé</a>
          </div>
          <div className='contact-links link-two'>
            <a href='mailto: aaronkcarpenter@gmail.com'>Email Me</a>
          </div>
        </div>
      </div> */}
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
    imageTwo: file(base: { eq: "twitter.png" }) {
      publicURL
    }
  }
`
