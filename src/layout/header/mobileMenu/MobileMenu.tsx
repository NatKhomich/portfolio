import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {theme} from '../../../styles/Theme';


export const MobileMenu = (props: { items: string[] }) => {

    const [isOpen, setIsOpen] = useState(false)

    const isOpenHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <StyledMenu>
            <BurgerButton onClick={isOpenHandler} isOpen={isOpen}>
                <span></span>
            </BurgerButton >
            <MenuPopup onClick={isOpenHandler} isOpen={isOpen}>
                <ul>
                    {props.items.map((i, index) => (
                        <ListItem key={index}>
                            <Link href="#">
                                {i}
                            </Link>
                        </ListItem>
                    ))}
                </ul>
            </MenuPopup>
        </StyledMenu>
    );
};

const StyledMenu = styled.div`
  display: none;
  
  @media ${theme.media.mobile} {
    display: block;
  }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 99999999;
  
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{isOpen: boolean}>`
      background-color: rgba(255, 255, 255, 0);
    `}
    
    &::before{
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(-45deg) translateY(0px);
    `}
    }
    
    &::after{
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        width: 36px;
        transform: rotate(45deg) translateY(0px);
    `}
    }
  }
`

const MenuPopup = styled.nav<{isOpen: boolean}>`
  position: fixed;
  background-color: rgba(31, 31, 32, 0.9);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: none;
  
  ${props => props.isOpen && css<{isOpen: boolean}>`
  display: flex;
    justify-content: center;
    align-items: center;
  `}

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 45px
  }
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

const ListItem = styled.li`
  position: relative;
`