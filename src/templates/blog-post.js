import React from 'react'
import { graphql } from 'gatsby'

import Footer from '../pages/footer';
import '../styling/blog-post.css';
import Navbar from '../pages/navbar';

export default function Blogpost({ data }) {
  const post = data.markdownRemark

  return (
    <div>
      <Navbar />
      <div className='blog-post__container'>
        <h1 className='post-title__'>{post.frontmatter.title}</h1>
        <small >{post.frontmatter.data}</small>
        <div className='actual-post' dangerouslySetInnerHTML={{ __html: post.html }} />

        <div>
          <a className='bottom-link' href='/' target='_noblank noreferrer'>
            Home
          </a>
          <a className='bottom-link' href='/blog' target='_noblank noreferrer'>
            Back to Blog
          </a>
        </div>
      </div>
      <Footer />
    </div>
  ) 
}

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`