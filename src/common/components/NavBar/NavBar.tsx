import React, { memo } from 'react';
import { HEADER_HEADING, HEADER_SUB_HEADING } from '../../constants/constants-view';
import { NavBarContainer } from './NavBar.style';

const NavBar: React.FunctionComponent = () => {
  return (
    <NavBarContainer>
      <h1>{HEADER_HEADING}</h1>
      <p>{HEADER_SUB_HEADING}</p>
    </NavBarContainer>
  );
};

export default memo(NavBar);
