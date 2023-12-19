import React from 'react';
import {Icon} from '../../../../components/icon/Icon';
import styled from 'styled-components';

type Props = {
    iconId: string
    title: string
}

export const Skill = ({iconId, title}: Props) => {
    return (
        <StyledSkill>
            <Icon iconId={iconId}/>
            <SkillTitle>{title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 120px;
  margin: 15px;
  border: 1px solid rgba(115, 0, 255, 0.77);
  text-align: center;
`

const SkillTitle = styled.h3`

`