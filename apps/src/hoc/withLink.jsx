import React from 'react';
import { Link } from '../../routes';
import './witnLink.scss';

/**
 * HOC for wrapping an element and create a link
 * @param {string} route - path
 * @param {React.Element} jsx - jsx element
 * @param {string} [key] - for array reference
*/
const withLink = (route, jsx, key) => {
  if (route) {
    if (/^https?:\/\//.test(route)) {
      return (
        <a className="Link--a" key={key} href={route}>
          {jsx}
        </a>
      );
    }

    return (
      <Link key={key} route={route}>
        {jsx}
      </Link>
    );
  }

  return jsx;
};

export default withLink;
