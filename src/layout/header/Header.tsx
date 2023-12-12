import React from 'react';
import styled from 'styled-components';
import {Menu} from '../../components/menu/Menu';

const items = [
'Home', 'Skills', 'Projects', 'Contact'
]


export const Header = () => {
    return (
        <StyledHeader>
            <Menu items={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #c0a8b4;
  display: flex;
  justify-content: flex-end;
`