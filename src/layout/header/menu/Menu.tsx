import React from 'react';
import styled from 'styled-components';
import {theme} from '../../../styles/Theme';


export const Menu = (props: { items: string[] }) => {
    return (
        <StyledMenu>
            <MenuList>
                {props.items.map((i, index) => (
                    <ListItem key={index}>
                        <Link href="#">{i}
                        <Mask>
                           <span>{i}</span>
                        </Mask>
                        <Mask>
                            <span>{i}</span>
                        </Mask>
                        </Link>
                    </ListItem>
                ))}
            </MenuList>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  
`

const MenuList = styled.ul`
  display: flex;
  gap: 30px
`

const Link = styled.a`
  color: transparent;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  color: ${theme.colors.accent};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const ListItem = styled.li`
  position: relative;
  
  &::before {
    content: '';
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};
    
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    
    transform: scale(0);
  }
  
  &:hover {
    &::before {
      transform: scale(1);
    }
    
    ${Mask} {
      transform: skewX(10deg) translateX(2px);
      color: ${theme.colors.font};
      
      & + ${Mask} {
        transform: skewX(10deg) translateX(-2px);
      }
    }
  }
`