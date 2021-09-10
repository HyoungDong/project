import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  width: 100px;
  height: 50%;
  margin: 23px 0;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const LoginBtn = styled.button`
  font-size: 20px;
  color: white;
  cursor: pointer;
  outline: none;
  border: 0;
  background: transparent;
  &:hover {
    font-size: 24px;
    transition: 0.3s;
  }
`;

export { Wrapper, LoginBtn };
