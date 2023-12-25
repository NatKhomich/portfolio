import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Icon} from '../../components/Icon';
import {theme} from '../../styles/Theme';
import {Container} from '../../components/Container';
import {footerLink} from '../../data/data';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Title>You can find me here:</Title>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SocialList>
                        {footerLink.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.link} target="_blank" aria-label={link.ariaLabel}>
                                        <Icon icon={link.icon} size={'35px'} color={link.color}/>
                                    </Link>
                                </li>
                        ))}
                    </SocialList>
                    <Copyright> © 2023 Natalia Khomich, All Rights Reserved. </Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
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

