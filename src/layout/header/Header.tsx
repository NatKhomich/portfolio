import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Container} from '../../components/Container';
import {DesktopMenu} from './headerMenu/desktopMenu/DesktopMenu';
import {MobileMenu} from './headerMenu/mobileMenu/MobileMenu';

const items = [
    'Home', 'Skills', 'Projects', 'Contact'
]

export const Header = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 576;

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));
    }, []);

    return (
        <StyledHeader>
            <Container>
                {width < breakpoint
                    ? <MobileMenu items={items}/>
                    : <DesktopMenu items={items}/>}
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