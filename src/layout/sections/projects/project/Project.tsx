import React from 'react';
import styled from 'styled-components';

type Props = {
    image: string
    title: string
    description: string
    demo: string
    github: string
}

export const Project = ({image, title, description, demo, github}: Props) => {
    return (
        <StyledProject>
            <Image src={image}/>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Link href={demo}>demo</Link>
            <Link href={github}>github</Link>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  max-width: 980px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 480px;
  object-fit: cover;
`

const Title = styled.h4`

`

const Description = styled.p`

`
const Link = styled.a`

`


