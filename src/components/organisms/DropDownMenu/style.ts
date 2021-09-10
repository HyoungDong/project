import styled from 'styled-components';
import { isPropertySignature } from 'typescript';
import { Icon, SearchInput } from '../../atoms/SearchForm/style';
import { ReactComponent as SVG } from './Menu.svg';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50%;
  margin: 23px 0;
  display: none;
  @media (max-width: 1024px) {
    display: flex;
  }
`;
type DropDownProps = {
  isOpen: boolean;
};
const DropDown = styled.ul`
  position: absolute;
  padding: 0;
  top: 100%;
  right: 10px;
  width: 200px;
  height: 100px;
  background: #5e5e5e;
  border-radius: 30px;
  display: ${(props: DropDownProps) => (props.isOpen ? 'block' : 'none')};
`;

const DropIcon = styled(SVG)`
  fill: white;
  width: 100%;
  height: 50%;
  cursor: pointer;
`;

const DropSearchInput = styled(SearchInput)`
  border-radius: 0;
  border-top-left-radius: 30px;
  width: 150px;
`;
const Wrapper2 = styled.div`
  border-top-right-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
const Wrapper3 = styled.div`
  border-top-right-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
`;

export { Wrapper, DropDown, DropIcon, DropSearchInput, Wrapper2, Wrapper3 };
