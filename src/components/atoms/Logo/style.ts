import styled from 'styled-components';

const Wrapper = styled.div`
  color: white;
  user-select: none;
  text-align: center;
  padding-top: 15px;
  &::after {
    content: '';
    position: absolute;
    top: 40px;
    bottom: 0;
    right: 15px;
    height: 2px;
    width: calc(100% - 30px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export { Wrapper };
