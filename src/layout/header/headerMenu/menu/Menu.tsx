import React from 'react';
import {S} from '../HeaderMenu_Styles'

const items = [
    'home', 'skills', 'projects', 'contact'
]

export const Menu = () => {
    return (
            <ul>
                {items.map((item, index) => (
                    <S.ListItem key={index}>
                        <S.NavLink to={item}
                                   smooth
                                   activeClass="active"
                                   spy
                        >
                            {item}
                        </S.NavLink>
                    </S.ListItem>
                ))}
            </ul>
    );
};

