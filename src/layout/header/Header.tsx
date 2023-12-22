import React from 'react';
import styled from 'styled-components';
import {Menu} from './menu/Menu';
import {Container} from '../../components/Container';
import {FlexWrapper} from '../../components/FlexWrapper';
import {MobileMenu} from './mobileMenu/MobileMenu';

const items = [
'Home', 'Skills', 'Projects', 'Contact'
]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify='flex-end' align='center'>
                    <Menu items={items}/>
                    <MobileMenu items={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: rgba(31, 31, 32, 0.9);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`