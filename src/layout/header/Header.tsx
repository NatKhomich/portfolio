import React, {useEffect} from 'react';
import {Container} from '../../components/Container';
import {DesktopMenu} from './headerMenu/desktopMenu/DesktopMenu';
import {MobileMenu} from './headerMenu/mobileMenu/MobileMenu';
import {S} from './Header_Styles'

export const Header = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 576;

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));
    }, []);

    return (
        <S.Header>
            <Container>
                {width < breakpoint
                    ? <MobileMenu/>
                    : <DesktopMenu/>}
            </Container>
        </S.Header>
    );
};