import React from 'react';
import { Link } from 'gatsby';
// import { rhythm } from '../utils/typography';
import Flex from './flex';

import PropTypes from 'prop-types';

class NavSitePages extends React.Component {
  render() {
    const {posts} = this.props;

    const links = posts.map(({node}) => {
      const title = node.frontmatter.title || node.fields.slug;
      if (node.fields.slug.includes('/blog')) {
        return (null);  // ignore site pages
      }
      return (
        <Link key={node.fields.slug}
              style={{boxShadow: 'none'}}
              to={node.fields.slug}
              rel="bookmark"
        >
          {title}
        </Link>
      );
    });

    return (<Flex>{links}</Flex>);
  }
}

NavSitePages.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default NavSitePages;
