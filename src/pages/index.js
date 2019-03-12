import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import PostsList from '../components/posts-list';
import SEO from '../components/seo';

class IndexPage extends React.Component {
  render() {
    const {data} = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <h1>Greenfield Innovation Group</h1>
        <p>gig guides technology companies from zero to product launch.</p>
        <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
          <PostsList posts={posts} />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
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

