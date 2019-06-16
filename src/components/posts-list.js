import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { rhythm } from '../utils/typography';
import { formatPostDate } from '../utils/helpers';

//TODO: ${node.timeToRead}

import PropTypes from 'prop-types';

const PostsList = () => (
  <StaticQuery
    query={graphql`
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
`}

    render={data => {
      const posts = data.allMarkdownRemark.edges;

      return (

          posts.map(({node}) => {
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
          style={{ boxShadow: 'none' }}
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
          dangerouslySetInnerHTML={{ __html: node.excerpt }}
          />
          </article>
          );
        })
      );
    }
    }
  />
);

export default PostsList;

