import styled from 'styled-components';
import {theme} from '../../../styles/Theme';

const Contact = styled.section``

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  gap: 16px;
  
  textarea {
    resize: none;
    height: 155px;
  }
`

const Field = styled.input`
  width: 100%;
  border: 1px solid #4A4A4A;
  background-color: ${theme.colors.secondaryBg};
  padding: 7px 15px;

  font-family: 'Nunito', sans-serif;
  color: ${theme.colors.font};
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.60px;

  &::placeholder {
    color: #495057;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    letter-spacing: 0.60px;
  }
  
  &:focus-visible {
    outline: 1px solid #4A4A4A;
  }
`

export const S = {
    Contact,
    Form,
    Field
}