import React from 'react';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostsList from "../components/posts-list";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <article>
        <h1>{post.frontmatter.title}</h1>
        <span css={css`display:inline-block;color:#bbb;`}>{post.frontmatter.author}</span>
        <div dangerouslySetInnerHTML={{ __html: post.html }}/>
        <span css={css`display:inline-block;color:#bbb;`}>{post.frontmatter.date}</span>
      </article>
      <aside>
        <PostsList/>
      </aside>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date
        author
      }
    }
  }
`;
