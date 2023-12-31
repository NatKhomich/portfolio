import styled from 'styled-components';
import {theme} from '../styles/Theme';


export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  font-family: Playfair Display, sans-serif;
  font-weight: 700;
  margin-bottom: 75px;

  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 100px;
    height: 3px;
    background-color: ${theme.colors.accent};

    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);

    @media ${theme.media.mobile} {
      bottom: -24px;
    }
  }

  @media ${theme.media.mobile} {
    margin-bottom: 60px;
  }
`