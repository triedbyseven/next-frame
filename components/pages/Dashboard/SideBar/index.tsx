import React from 'react';
import Navbar from '../../../ui/Navbar';
import { SideBarProps } from './interfaces';
import Styled from './styled';

const SideBar: React.FC<SideBarProps> = (): React.ReactElement => {
  return(
    <Styled.Container>
      <div>Random Content</div>
      <Navbar.Vertical />
    </Styled.Container>
  );
};

export default SideBar;