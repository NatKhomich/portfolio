import React from 'react';
import styled from 'styled-components';


export const Menu = (props: { items: string[] }) => {
    return (
        <StyledMenu>
            <ul>
                {props.items.map((i, index) => (
                    <li key={index}>
                        <a href="#">{i}</a>
                    </li>
                ))}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`