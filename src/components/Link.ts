import styled from 'styled-components';
import {theme} from '../styles/Theme';

export const Link = styled.a`
    &:hover svg {
        fill: ${theme.colors.accent};
        transform: ${theme.animations.transform};
    }
`