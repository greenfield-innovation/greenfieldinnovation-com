import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import PostsList from '../components/posts-list';
import SEO from '../components/seo';
import Flex from "../components/flex";

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <Flex>
          <PostsList/>
        </Flex>
      </Layout>
    );
  }
}

export default IndexPage;




