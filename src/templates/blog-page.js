import React from 'react';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <span css={css`display:inline-block;color:#bbb;`}>{post.frontmatter.author}</span>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <span css={css`display:inline-block;color:#bbb;`}>{post.frontmatter.date}</span>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        author
      }
    }
  }
`;