import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.li`
  list-style: none;
`;

const LinkBtn = styled(NavLink)`
  margin: 10px 15px 0;
  color: white;
  display: block;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  font-size: 0.8em;
  padding: 10px 8px;
  line-height: 1.625rem;
  &:hover {
    background: #41b1ff;
    border-radius: 30px;
  }
  &.${props => props.activeClassName} {
    border-radius: 30px;
    background: white;
    color: #2ba8ff;
    transition: 0.3s;
  }
`;

export { Wrapper, LinkBtn };
