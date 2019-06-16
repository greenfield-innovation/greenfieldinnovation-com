import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import NavSitePages from './nav-site-pages';
import palette from '../palette.module.scss';
import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
          site {
            siteMetadata {
              title
              description
            }
          }
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
        <>
          <Header title={data.site.siteMetadata.title}
                  description={data.site.siteMetadata.description}
          />
          <main>{children}</main>
          <footer>
            <small>
              <NavSitePages posts={posts}/>
              © {new Date().getFullYear()}
              {` `}
              <a href="/">Greenfield Innovation Group</a>
            </small>
          </footer>
        </>
      );
    }
    }
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
