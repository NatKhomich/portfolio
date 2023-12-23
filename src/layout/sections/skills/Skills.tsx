import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Skill} from './skill/Skill';
import {skills} from '../../../data/data';
import {Container} from '../../../components/Container';

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap='wrap' justify='space-evenly'>
                    {skills.map((s, i) => (
                        <Skill key={i}
                               title={s.title}
                               icon={s.icon}
                               color={s.color}
                        />
                    ))}
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
    
`