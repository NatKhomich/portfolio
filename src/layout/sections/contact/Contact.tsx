import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {Button} from '../../../components/Button';

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder='Name'/>
                    <Field type='email' placeholder='Email'/>
                    <Field placeholder='Message' as='textarea'/>

                    <Button type='submit'> Send message </Button>
                </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  min-height: 50vh;
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


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  gap: 10px;
`

