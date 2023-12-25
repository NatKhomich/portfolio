import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {Project} from './project/Project';
import {projects} from '../../../data/data';
import {Container} from '../../../components/Container';


export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                    {projects.map((p, i) => (
                        <Project key={i}
                                 title={p.title}
                                 image={p.image}
                                 description={p.description}
                                 demoUrl={p.demoUrl}
                                 githubUrl={p.githubUrl}
                                 technologies={p.technologies}
                        />
                    ))}
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    
`