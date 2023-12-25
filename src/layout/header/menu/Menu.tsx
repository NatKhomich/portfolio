import React from 'react';
import styled from 'styled-components';
import {theme} from '../../../styles/Theme';


export const Menu = (props: { items: string[] }) => {
    return (
        <StyledMenu>
            <MenuList>
                {props.items.map((item, index) => (
                    <ListItem key={index}>
                        <Link href="#">
                            {item}
                        </Link>
                    </ListItem>
                ))}
            </MenuList>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  @media ${theme.media.mobile} {
    display: none;
  }
`

const MenuList = styled.ul`
  display: flex;
  gap: 45px
`

const ListItem = styled.li`
  position: relative;
`

const Link = styled.a`
  color: ${theme.colors.font};
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  
  &:hover {
    color: ${theme.colors.accent};
  }
`