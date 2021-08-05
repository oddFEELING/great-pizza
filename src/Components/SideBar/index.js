import React from 'react';
import {
  CloseIcon,
  Icon,
  SIdeBarContainer,
  SideBarLink,
  SideBarMenu,
  SideBarRoute,
  SideBtnWrap,
} from './SideBarElements';

const SideBar = (props) => {
  const { toggle, isOpen } = props;
  return (
    <SIdeBarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarMenu>
        <SideBarLink to="/">Pizzas</SideBarLink>
        <SideBarLink to="/">Dessert</SideBarLink>
        <SideBarLink to="/">Full Menu</SideBarLink>
      </SideBarMenu>
      <SideBtnWrap>
        <SideBarRoute to="/">Order now!</SideBarRoute>
      </SideBtnWrap>
    </SIdeBarContainer>
  );
};

export default SideBar;
