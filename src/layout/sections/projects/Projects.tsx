import React from 'react';
import {SectionTitle} from '../../../components/SectionTitle';
import {Project} from './project/Project';
import {projects} from '../../../data/data';
import {Container} from '../../../components/Container';
import {S} from './Projects_Styles'
import {Fade} from 'react-awesome-reveal';


export const Projects = () => {
    return (
        <S.Projects id='projects'>
            <Container>
                <SectionTitle>Projects</SectionTitle>

            <Fade direction={'up'} delay={300} triggerOnce>
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
            </Fade>
            </Container>
        </S.Projects>
    );
};

