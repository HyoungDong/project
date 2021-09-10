import React from 'react';
import { LoginButton, SearchForm } from '../../atoms';
import DropDownMenu from '../DropDownMenu';
import { Wrapper } from './style';

function HeaderBar() {
  return (
    <Wrapper>
      <SearchForm />
      <LoginButton />
      <DropDownMenu />
    </Wrapper>
  );
}

HeaderBar.defaultProps = {
  name: 'temp',
};

export default HeaderBar;
