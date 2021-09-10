import React from 'react';
import { useState } from 'react';
import { useInput } from '../../../hooks';
import { LoginBtn } from '../../atoms/LoginButton/style';
import { Icon } from '../../atoms/SearchForm/style';
import {
  DropDown,
  DropIcon,
  Wrapper,
  Wrapper2,
  DropSearchInput,
  Wrapper3,
} from './style';

type DropDownMenuProps = {
  name: string;
};

function DropDownMenu({ name }: DropDownMenuProps) {
  const [open, setOpen] = useState(false);
  const { value, onChange } = useInput('');
  return (
    <Wrapper>
      <DropIcon onClick={() => setOpen(!open)} />
      <DropDown isOpen={open}>
        <li style={{ display: 'flex', listStyleType: 'none', height: '50%' }}>
          <DropSearchInput
            placeholder="Search..."
            type="text"
            value={value}
            onChange={onChange}
          />
          <Wrapper3>
            <Icon />
          </Wrapper3>
        </li>
        <li style={{ listStyleType: 'none', height: '50%' }}>
          <Wrapper2 style={{ width: '100%', height: '100%' }}>
            <LoginBtn>Log In</LoginBtn>
          </Wrapper2>
        </li>
      </DropDown>
    </Wrapper>
  );
}

DropDownMenu.defaultProps = {
  name: 'temp',
};

export default DropDownMenu;
