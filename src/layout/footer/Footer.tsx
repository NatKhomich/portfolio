import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../components/SectionTitle';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Icon} from '../../components/Icon';

export const Footer = () => {
    return (
        <StyledFooter>
            <SectionTitle>You can find me here:</SectionTitle>

            <FlexWrapper direction={'column'} align={'center'}>
                <SocialList>

                    <SocialItem>
                        <Link href="">
                            {/*<Icon iconId="instagram"/>*/}
                        </Link>
                    </SocialItem>

                    <SocialItem>
                        <Link href="">
                            {/*<Icon iconId="linkedin"/>*/}
                        </Link>
                    </SocialItem>

                    <SocialItem>
                        <Link href="">
                            {/*<Icon iconId="mail"/>*/}
                        </Link>
                    </SocialItem>

                </SocialList>

                <Copyright> © 2023 Natalia Khomich, All Rights Reserved. </Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #fcdbcd;
`

const SocialList = styled.ul`
  display: flex;
  gap: 30px
`
const SocialItem = styled.li`

`

const Link = styled.a`

`

const Copyright = styled.small`

`

