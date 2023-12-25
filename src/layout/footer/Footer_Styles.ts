import {theme} from '../../styles/Theme';
import styled from 'styled-components';

const Footer = styled.footer`
  padding: 80px 0 20px;
  background-color: ${theme.colors.primaryBg};

  @media ${theme.media.mobile} {
    padding: 50px 0 20px;
  }
`

const Title = styled.h2`
  text-align: center;
  font-size: 26px;
  font-family: Playfair Display, sans-serif;
  font-weight: 700;
  margin-bottom: 50px;

  @media ${theme.media.mobile} {
    margin-bottom: 35px;
  }
`

const SocialList = styled.ul`
  display: flex;
  gap: 40px
`

const Link = styled.a`
  &:hover svg {
    fill: ${theme.colors.accent};
    transform: scale(1.05);
  }
`

const Copyright = styled.small`
  font-size: 15px;
  margin-top: 25px;
  opacity: 0.5;
`

export const S = {
    Footer,
    Title,
    SocialList,
    Link,
    Copyright
}