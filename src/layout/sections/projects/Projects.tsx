import React from 'react';
import {SectionTitle} from '../../../components/SectionTitle';
import {Project} from './project/Project';
import {projects} from '../../../data/data';
import {Container} from '../../../components/Container';
import {S} from './Projects_Styles'


export const Projects = () => {
    return (
        <S.Projects>
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
        </S.Projects>
    );
};

