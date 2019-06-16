import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Logo from '../images/gig.svg';

const Header = ({ title, description, bg }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0.3rem`,
      background: bg,

    }}
  >

      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <img src={Logo} alt={title} height="10%" width="10%"/>
        <h1 style={{ margin: 0 }}>{title}</h1>
      </Link>

    <p>{description}</p>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
