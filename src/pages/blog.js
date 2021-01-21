import React from 'react'
import { graphql, Link } from 'gatsby'

import Navbar from "./navbar";
import Footer from "./footer";
import '../styling/posts.css'

export default function Blog({ data }) {
  const { posts } = data.blog

  return(
    <div>
      <Navbar />
      <div className='image-one__container--posts'>
        {/* <img alt='BlogPost' src={data.image.publicURL} target='_blank' className='image-one__posts'/> */}
        <img alt='BlogPost' src='/#' target='_blank' className='image-one__posts'/>
        <div>
          <h1 className='header-within__container'>Posts</h1>
        </div>
      </div>
      {/* <h1 className='header'>Posts</h1> */}

      {posts.map(post => (
        <article className='post-content' key={post.id}>
          <Link to={post.fields.slug}>
            <h2 className='post-title'>{post.frontmatter.title}</h2>
          </Link>
          <small className='post-author'>
            {post.frontmatter.author}, 
            {post.frontmatter.date}
          </small>
          <p className='post-excerpt'>{post.excerpt}</p>
        </article>
      ))}

      <div className='back-home'>
        <a href='/'>Home</a>
      </div>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
    image: file(base: { eq: "posts-page-picture.png" }) {
    publicURL
    }
  }
`
