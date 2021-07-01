import React from 'react';

import { Link } from 'react-router-dom';
import * as StyleComponent from './componentStyles/styledComponent';
import * as Style from './componentStyles/nav.module.css';

const Nav = () => (
  <StyleComponent.RowNav className={Style.mainNav}>
    <h1>Maths Magic</h1>
    <StyleComponent.UnstyledRowList className={Style.navLinks}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quotes">Quotes</Link></li>
    </StyleComponent.UnstyledRowList>
  </StyleComponent.RowNav>
);

export default Nav;
