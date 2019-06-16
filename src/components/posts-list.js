import React from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';
import { formatPostDate } from '../utils/helpers';

//TODO: ${node.timeToRead}

import PropTypes from 'prop-types';

class PostsList extends React.Component {
  render() {
    const {posts} = this.props;

    return (posts.map(({node}) => {
      const title = node.frontmatter.title || node.fields.slug;
      if (!node.fields.slug.includes('/blog')) {
        return (null);  // ignore site pages
      }
      return (
        <article key={node.fields.slug}>
          <header>
            <h3
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: rhythm(1),
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link
                style={{boxShadow: 'none'}}
                to={node.fields.slug}
                rel="bookmark"
              >
                {title}
              </Link>
            </h3>
            <small>
              {formatPostDate(node.frontmatter.date, 'en')}
            </small>
          </header>
          <p
            dangerouslySetInnerHTML={{__html: node.excerpt}}
          />
        </article>
      );
    }));
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
