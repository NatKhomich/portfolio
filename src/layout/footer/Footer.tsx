import React from 'react';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Icon} from '../../components/Icon';
import {Container} from '../../components/Container';
import {footerLink} from '../../data/data';
import {S} from './Footer_Styles'

export const Footer = () => {
    return (
        <S.Footer>
            <Container>
                <S.Title>You can find me here:</S.Title>
                <FlexWrapper direction={'column'} align={'center'}>
                    <S.SocialList>
                        {footerLink.map((link, index) => (
                                <li key={index}>
                                    <S.Link href={link.link} target="_blank" aria-label={link.ariaLabel}>
                                        <Icon icon={link.icon} size={'35px'} color={link.color}/>
                                    </S.Link>
                                </li>
                        ))}
                    </S.SocialList>
                    <S.Copyright> © 2023 Natalia Khomich, All Rights Reserved. </S.Copyright>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};



