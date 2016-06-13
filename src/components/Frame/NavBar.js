'use strict';
import React from 'react';
import {Link} from 'react-router';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navigation">

        <ul>
          <li>AFM</li>
          <li><Link to="/team">i1</Link></li>
          <li>i2</li>
          <li>i3</li>
        </ul>
      </div>
    );
  }
}

NavBar.defaultProps = {
};

export default NavBar;
