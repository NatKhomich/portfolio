import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Icon} from '../../components/Icon';
import {theme} from '../../styles/Theme';
import {Container} from '../../components/Container';

import {FaInstagram, FaTelegram} from 'react-icons/fa';
import {SlSocialVkontakte} from 'react-icons/sl';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Title>You can find me here:</Title>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SocialList>
                        <SocialItem>
                            <Link href="https://t.me/Natalia_Khomich" target="_blank">
                                <Icon icon={FaTelegram} size={'35px'} color={theme.colors.font}/>
                            </Link>
                        </SocialItem>

                        <SocialItem>
                            <Link href="https://www.instagram.com/nat_khomich/" target="_blank">
                                <Icon icon={FaInstagram} size={'35px'} color={theme.colors.font}/>
                            </Link>
                        </SocialItem>

                        <SocialItem>
                            <Link href="https://vk.com/natalia_khomich" target="_blank">
                                <Icon icon={SlSocialVkontakte} size={'35px'} color={theme.colors.font}/>
                            </Link>
                        </SocialItem>
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
const SocialItem = styled.li`

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

