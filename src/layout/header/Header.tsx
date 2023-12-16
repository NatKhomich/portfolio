import React from 'react';
import styled from 'styled-components';
import {Menu} from '../../components/menu/Menu';
import {Container} from '../../components/Container';
import {FlexWrapper} from '../../components/FlexWrapper';

const items = [
'Home', 'Skills', 'Projects', 'Contact'
]


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify='flex-end' align='center'>
                    <Menu items={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #c0a8b4;
`