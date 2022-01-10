import React from 'react';
import { constants } from '../../constants';
import '../../css/Header/Header.css';

function Header() {
  return <header>{constants.headerTitle}</header>;
}

export default Header;
