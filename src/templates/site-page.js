import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostsList from "../components/posts-list";

// TODO:
// const posts = data.allMarkdownRemark.edges;
//       <aside>
//         <PostsList posts={posts}/>
//       </aside>


export default ({ data }) => {
  const article = data.markdownRemark;

  return (
    <Layout>
      <article>
        <header>
          <h1>{article.frontmatter.title}</h1>
        </header>
        <div dangerouslySetInnerHTML={{ __html: article.html }}/>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
