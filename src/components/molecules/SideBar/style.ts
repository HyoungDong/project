import styled from 'styled-components';

const NavBar = styled.nav`
  position: fixed;
  height: 100%;
  width: 260px;
  top: 0;
  bottom: 0;
  left: 0;
  background: #2ba8ff;
  box-shadow: 0px 2px 22px 0 rgba(0, 0, 0, 0.2),
    0px 2px 30px 0 rgba(0, 0, 0, 0.35);
`;

const Nav = styled.ul`
  padding-left: 0;
`;

export { Nav, NavBar };
