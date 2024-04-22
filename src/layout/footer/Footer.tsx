import React from 'react';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Icon} from '../../components/Icon';
import {Container} from '../../components/Container';
import {footerLink} from '../../data/data';
import {S} from './Footer_Styles'
import {Fade} from 'react-awesome-reveal';

export const Footer = () => {
    return (
        <S.Footer>
            <Fade delay={300} triggerOnce>
                <Container>
                    <S.Title>You can find me here:</S.Title>
                    <FlexWrapper direction={'column'} align={'center'}>
                        <S.Contact>natalia.khomich.by@gmail.com</S.Contact>
                        <S.Contact>+7-951-331-08-18</S.Contact>
                        <S.SocialList>
                            {footerLink.map((link, index) => (
                                <li key={index}>
                                    <S.Link href={link.link} target="_blank" aria-label={link.ariaLabel}>
                                        <Icon icon={link.icon} size={'35px'} color={link.color}/>
                                    </S.Link>
                                </li>
                            ))}
                        </S.SocialList>
                        <S.Copyright> © 2024 Natalia Khomich, All Rights Reserved. </S.Copyright>
                    </FlexWrapper>
                </Container>
            </Fade>
        </S.Footer>
    );
};



