import React from 'react';
import { useInput } from '../../../hooks';
import { Icon, SearchInput, Wrapper, Wrapper2 } from './style';

function SearchForm() {
  const { value, onChange } = useInput('');
  return (
    <Wrapper>
      <SearchInput
        placeholder="Search..."
        type="text"
        value={value}
        onChange={onChange}
      />
      <Wrapper2>
        <Icon />
      </Wrapper2>
    </Wrapper>
  );
}

export default SearchForm;
