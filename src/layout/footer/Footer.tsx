import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../components/SectionTitle';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Icon} from '../../components/icon/Icon';

export const Footer = () => {
    return (
        <StyledFooter>
            <SectionTitle>You can find me here:</SectionTitle>

            <FlexWrapper justify='center'>
                <Link href="">
                    <Icon iconId="instagram"/>
                </Link>

                <Link href="">
                    <Icon iconId="linkedin"/>
                </Link>

                <Link href="">
                    <Icon iconId="mail"/>
                </Link>
            </FlexWrapper>
            <Info> © 2023 Natalia Khomich, All Rights Reserved. </Info>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

  background-color: #fcdbcd;
`

const Link = styled.a`
  display: flex;
  justify-content: center;
  
`

const Info = styled.p`
text-align: center;
`

