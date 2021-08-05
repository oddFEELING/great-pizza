import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialIcaons,
  SocialiconLink,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Pizza</SocialLogo>
            <SocialIcaons>
              <SocialiconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialiconLink>
              <SocialiconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialiconLink>
              <SocialiconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialiconLink>
              <SocialiconLink href="/" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialiconLink>
            </SocialIcaons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
