import styled, {css} from 'styled-components';
import {theme} from '../../../styles/Theme';

//Menu
const ListItem = styled.li`
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

//Desktop
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    justify-content: flex-end;
    gap: 45px
  }
`

//Mobile
const MobileMenu = styled.div`
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

export const S = {
    ListItem,
    Link,
    DesktopMenu,
    MobileMenu,
    BurgerButton,
    MenuPopup
}