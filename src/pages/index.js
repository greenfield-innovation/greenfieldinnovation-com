import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import PostsList from '../components/posts-list';
import SEO from '../components/seo';

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <PostsList/>
      </Layout>
    );
  }
}

export default IndexPage;




