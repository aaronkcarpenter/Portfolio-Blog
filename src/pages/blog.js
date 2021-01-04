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
      <h1 className='header'>Posts</h1>

      {posts.map(post => (
        <article key={post.id}>
          <Link to={post.fields.slug}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
          <small>
            {post.frontmatter.author}, 
            {post.frontmatter.date}
          </small>
          <p>{post.excerpt}</p>
        </article>
      ))}

      <div className='back-home'>
        <a href='/'>Take Me Home</a>
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
  }
`
