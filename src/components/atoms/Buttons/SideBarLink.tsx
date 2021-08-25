import React from 'react';
import { LinkBtn, Wrapper } from './style';

type SideBarButtonProps = {
  name: string;
  link: string;
};

function SideBarLink({ name, link }: SideBarButtonProps) {
  return (
    <Wrapper>
      <LinkBtn activeClassName="active" to={`/${link}`}>
        <p>{name}</p>
      </LinkBtn>
    </Wrapper>
  );
}

SideBarLink.defaultProps = {};

export default SideBarLink;
