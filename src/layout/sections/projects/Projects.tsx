import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Project} from './project/Project';
import taskManager from '../../../assets/images/proj-1.webp'
import social from '../../../assets/images/proj-2.webp'


export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>

            <FlexWrapper direction={'column'} justify={'center'} align={'center'}>
                <Project title={'Task Manager'}
                         image={taskManager}
                         description={'It is a list of tasks. You can combine tasks into groups, delete/add new ones, as well as change their names. There is a filter for sorting tasks by the degree of their completion. The project is in a development project.'}
                         demo={''}
                         github={''}
                />

                <Project title={'Social Network'}
                         image={social}
                         description={'It is a list of Social Network.'}
                         demo={''}
                         github={''}
                />
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: #f8def8;
`