import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Skill} from './skill/Skill';

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill iconId={'react'} title={'React'}/>
                <Skill iconId={'js'} title={'JavaScript'}/>
                <Skill iconId={'css'} title={'Css'}/>
                <Skill iconId={'html'} title={'Html'}/>
                <Skill iconId={'github'} title={'Github'}/>
                <Skill iconId={'git'} title={'Git'}/>
                <Skill iconId={'styledComponents'} title={'StyledComponents'}/>
                <Skill iconId={'ts'} title={'TypeScript'}/>
                <Skill iconId={'redux'} title={'Redux Toolkit'}/>
            </FlexWrapper>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
  min-height: 100vh;
  background-color: #dcdce3;
`