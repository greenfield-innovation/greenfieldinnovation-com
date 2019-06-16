import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import PostsList from '../components/posts-list';
import SEO from '../components/seo';

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <PostsList posts={posts}/>
      </Layout>
    );
  }
}

export default IndexPage;


export const pageQuery = graphql`
  query {
      allMarkdownRemark(
        sort: {fields: [frontmatter___date], order: DESC}
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              author
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
`;

