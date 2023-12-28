import React from 'react';
import {SectionTitle} from '../../../components/SectionTitle';
import {Button} from '../../../components/Button';
import {Container} from '../../../components/Container';
import {S} from './Contact_Styles'
import {Fade} from 'react-awesome-reveal';
import {useContact} from './hooks/useContact';

export const Contact = () => {

const {form, formik} = useContact()

    return (
        <S.Contact id="contact">
            <Fade delay={300} triggerOnce>
                <Container>
                    <SectionTitle>Contact</SectionTitle>

                    <S.Form ref={form} onSubmit={formik.handleSubmit}>
                        <S.Field  {...formik.getFieldProps('name')}
                                  placeholder="Name" name="name"/>
                        {formik.touched.name && formik.errors.name ?
                            <S.Error>{formik.errors.name}</S.Error> : null}

                        <S.Field {...formik.getFieldProps('email')}
                                 type="email" placeholder="Email" name="email"/>
                        {formik.touched.email && formik.errors.email ?
                            <S.Error>{formik.errors.email}</S.Error> : null}

                        <S.Field {...formik.getFieldProps('message')}
                                 placeholder="Message" as="textarea" name="message"/>
                        {formik.touched.message && formik.errors.message ?
                            <S.Error>{formik.errors.message}</S.Error> : null}

                        <Button type="submit"> Send Message </Button>
                    </S.Form>
                </Container>
            </Fade>
        </S.Contact>
    );
};
