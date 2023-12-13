import React from 'react';
import styled from 'styled-components';
import {ProjectType} from '../../../../data/data';

// type Props = {
//     image: string
//     title: string
//     description: string
//     demo: string
//     github: string
//     technologies: string[]
// }

export const Project = ({image, title, description, demoUrl, githubUrl, technologies}: ProjectType) => {
    return (
        <StyledProject>
            <Image src={image}/>
            <Title>{title}</Title>
            <Technologies>{technologies}</Technologies>
            <Description>{description}</Description>
            <Link href={demoUrl}>demo</Link>
            <Link href={githubUrl}>github</Link>
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

const Technologies = styled.p`

`


