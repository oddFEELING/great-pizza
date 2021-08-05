import React, { useState } from 'react';
import NavBar from '../NavBar';
import SideBar from '../SideBar';
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroBtn,
  HeroP,
} from './HeroElements';

const Hero = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <HeroContainer>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 10 seconds</HeroP>
          <HeroBtn>Try me</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
