import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import NavSitePages from './nav-site-pages';
import './layout.css';

const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query {
          site {
            siteMetadata {
              title
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
          <Header siteTitle={data.site.siteMetadata.title}/>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main>{children}</main>
            <footer>
              <small>
                <NavSitePages posts={posts}/>
                © {new Date().getFullYear()}
                {` `}
                <a href="/">Greenfield Innovation Group</a>
              </small>
            </footer>
          </div>
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
