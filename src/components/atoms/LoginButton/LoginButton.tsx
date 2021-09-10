import React from 'react';
import { LoginBtn, Wrapper } from './style';

function LoginButton() {
  return (
    <Wrapper>
      <LoginBtn>Log In</LoginBtn>
    </Wrapper>
  );
}

LoginButton.defaultProps = {
  name: 'temp',
};

export default LoginButton;
