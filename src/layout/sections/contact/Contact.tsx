import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from '../../../components/SectionTitle';
import {Button} from '../../../components/Button';
import {Container} from '../../../components/Container';
import {S} from './Contact_Styles'
import {Fade} from 'react-awesome-reveal';
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const form = useRef<ElementRef<'form'>>(null)

    const sendEmail = (e: any) => {
        e.preventDefault()

        if(!form.current) {
            return
        }

        emailjs.sendForm('service_9iavbg5', 'template_p9plfde', form.current, 'EoVymZPV20bKv1LfV')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
        e.target.reset()
    }

    return (
        <S.Contact id="contact">
            <Fade delay={300} triggerOnce>
                <Container>
                    <SectionTitle>Contact</SectionTitle>
                    <S.Form ref={form} onSubmit={sendEmail}>
                        <S.Field placeholder="Name" name='user_name'/>
                        <S.Field type="email" placeholder="Email" name='email'/>
                        <S.Field placeholder="Message" as="textarea" name='message'/>
                        <Button type="submit"> Send Message </Button>
                    </S.Form>
                </Container>
            </Fade>
        </S.Contact>
    );
};
