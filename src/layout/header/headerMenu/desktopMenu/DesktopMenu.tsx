import React from 'react';
import {Menu} from '../menu/Menu';
import {S} from '../HeaderMenu_Styles'

export const DesktopMenu = (props: { items: string[] }) => {
    return (
        <S.DesktopMenu>
                <Menu items={props.items} />
        </S.DesktopMenu>
    );
};
