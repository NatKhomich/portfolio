import React from 'react';
import {SectionTitle} from '../../../components/SectionTitle';
import {Button} from '../../../components/Button';
import {Container} from '../../../components/Container';
import {S} from './Contact_Styles'

export const Contact = () => {
    return (
        <S.Contact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder='Name'/>
                    <S.Field type='email' placeholder='Email'/>
                    <S.Field placeholder='Message' as='textarea'/>
                    <Button type='submit'> Send Message </Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};
