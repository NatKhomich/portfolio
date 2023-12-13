import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact</SectionTitle>
            <FlexWrapper direction='column'>
                <Form>
                    <Field placeholder='Name'/>
                    <Field type='email' placeholder='Email'/>
                    <Field placeholder='Message'/>
                </Form>

                <Button> Send message </Button>
            </FlexWrapper>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  min-height: 100vh;
  background-color: #d7e5d2;
`

type FieldType = {
    type: string
}

const Field = styled.input.attrs<FieldType>(({type, placeholder}) => ({
    type: type || 'text',
    placeholder: placeholder || ''
}))`
    
`


const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`

const Button = styled.button`
  width: 150px;
  height: 50px;
  margin: 0 auto;
`