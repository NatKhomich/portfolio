import React, {useState} from 'react';
import {Menu} from '../menu/Menu';
import {S} from '../HeaderMenu_Styles'


export const MobileMenu = (props: { items: string[] }) => {

    const [isOpen, setIsOpen] = useState(false)

    const isOpenHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton onClick={isOpenHandler} isOpen={isOpen}>
                <span></span>
            </S.BurgerButton >
            <S.MenuPopup onClick={isOpenHandler} isOpen={isOpen}>
                <Menu items={props.items}/>
            </S.MenuPopup>
        </S.MobileMenu>
    );
};

