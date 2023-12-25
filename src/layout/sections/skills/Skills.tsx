import React from 'react';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Skill} from './skill/Skill';
import {skills} from '../../../data/data';
import {Container} from '../../../components/Container';
import {S} from './Skills_Styles'

export const Skills = () => {
    return (
        <S.Skills>
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
        </S.Skills>
    );
};


