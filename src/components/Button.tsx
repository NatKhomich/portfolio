import styled from 'styled-components';
import {theme} from '../styles/Theme';

export const Button = styled.button`
  width: 150px;
  height: 50px;
  margin: 0 auto;
  border: 2px solid ${theme.colors.accent};
  color: ${theme.colors.accent};
  font-size: 15px;
  font-family: Roboto, sans-serif;
`