import React from 'react';
import {S} from '../HeaderMenu_Styles'
import {headerLink} from '../../../../data/data';
import {Icon} from '../../../../components/Icon';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import {Link} from '../../../../components/Link';

const items = [
    'home', 'skills', 'projects', 'contact'
]

export const Menu = () => {
    return (
        <>
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
            <ul>
                {headerLink.map((link, index) => (
                    <S.ListItem key={index}>
                        <Link href={link.link} target="_blank" aria-label={link.ariaLabel}>
                            <Icon icon={link.icon} size={'28px'} color={link.color}/>
                        </Link>
                    </S.ListItem>
                ))}
            </ul>

        </>
    );
};

