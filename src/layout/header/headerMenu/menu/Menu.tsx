import React from 'react';
import {S} from '../HeaderMenu_Styles'

export const Menu = (props: {items: string[]}) => {
    return (
            <ul>
                {props.items.map((item, index) => (
                    <S.ListItem key={index}>
                        <S.Link href="#">
                            {item}
                        </S.Link>
                    </S.ListItem>
                ))}
            </ul>
    );
};

