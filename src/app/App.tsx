import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { SideBar } from '../components/molecules';
import { MainPanel } from '../components/organisms';
import { All, Chatter, Home, ITNews, Project, Study } from '../pages';

const Wrapper = styled.div`
  position: relative;
  top: 0;
  height: 100vh;
  overflow: hidden;
`;
const Content = styled.div`
  float: right;
  position: relative;
  height: 100%;
  width: calc(100% - 260px);
  &::after {
    content: '';
    clear: both;
    display: block;
  }
`;
const App: React.FC = () => {
  return (
    <Wrapper>
      <SideBar />
      <Content>
        <MainPanel />
        <Route path="/" component={Home} exact></Route>
        <Route path="/All" component={All}></Route>
        <Route path="/IT_News" component={ITNews}></Route>
        <Route path="/Study" component={Study}></Route>
        <Route path="/Project" component={Project}></Route>
        <Route path="/Chatter" component={Chatter}></Route>
      </Content>
    </Wrapper>
  );
};

export default App;
