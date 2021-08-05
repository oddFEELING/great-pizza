import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
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
            <SocialLogo to="/">Alawode Emmanuel</SocialLogo>
            <SocialIcaons>
              <SocialiconLink
                href="https://alawodeemmanuel2@gmail.com"
                target="alawodeemmanuel2@gmail.com"
                aria-label="Gmail"
              >
                <FaGoogle />
              </SocialiconLink>
              <SocialiconLink
                href="https://www.instagram.com/himmar_kay/"
                target="https://www.instagram.com/himmar_kay/"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialiconLink>
              <SocialiconLink
                href="https://www.linkedin.com/in/alawodeemmanuel"
                target="www.linkedin.com/in/alawodeemmanuel"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialiconLink>
              <SocialiconLink
                href="https://github.com/oddFEELING"
                target="https://github.com/oddFEELING"
                aria-label="Github"
              >
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
