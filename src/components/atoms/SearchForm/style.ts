import styled from 'styled-components';
import { ReactComponent as SVG } from './search.svg';

const Icon = styled(SVG)`
  width: 20px;
  height: 20px;
  fill: white;
  cursor: pointer;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 200px;
  height: 50%;
  margin: 23px 0;
`;
const Wrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5e5e5e;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  flex: 1;
`;
const SearchInput = styled.input`
  flex: 1;
  color: white;
  width: 150px;
  background: #5e5e5e;
  border: medium none;
  padding: 11px 19px;
  border-radius: 30px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  box-sizing: border-box;
  outline: none;
  &::placeholder {
    color: white;
  }
  &:focus {
    background: #818181;
    transition: 0.3s;
    & + div {
      background: #818181;
      transition: 0.3s;
    }
  }
`;

export { Icon, Wrapper, Wrapper2, SearchInput };
