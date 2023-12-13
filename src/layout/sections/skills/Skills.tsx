import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Skill} from './skill/Skill';
import {skills} from '../../../data/data';

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>

                {skills.map((s, i) => (
                    <Skill key={i} iconId={s.iconId} title={s.title}/>
                ))}

            </FlexWrapper>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
  min-height: 100vh;
  background-color: #dcdce3;
`