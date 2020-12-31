import React from 'react'
import { graphql } from 'gatsby'

export default function Blogpost({ data }) {
  const post = data.markdownRemark

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <small>{post.frontmatter.data}</small>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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