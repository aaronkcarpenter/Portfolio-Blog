import React from "react"
import Blog from '../pages/blog';
import { graphql, Link } from 'gatsby'

import '../styling/blog.css';


export default function Home({ data }) {
  const {title, description } = data.site.siteMetadata

  return (
    <div>
      <h1>{title}</h1>
      <Link to='/blog'>Checkout My Recent Blog Posts</Link>
      <p>{description}</p>

      <img  className='header-photo' alt='Sexy Man' src={data.image.publicURL} />
      {/* <Blog /> */}
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
