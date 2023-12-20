import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Project} from './project/Project';
import {projects} from '../../../data/data';
import {Container} from '../../../components/Container';


export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper direction={'column'} justify={'center'} align={'center'}>
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
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: #f8def8;
`