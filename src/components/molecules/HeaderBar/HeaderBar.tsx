import React from 'react';
import { SearchForm } from '../../atoms';
import { Wrapper } from './style';

function HeaderBar() {
  return (
    <Wrapper>
      <SearchForm />
    </Wrapper>
  );
}

HeaderBar.defaultProps = {
  name: 'temp',
};

export default HeaderBar;
