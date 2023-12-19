import React from 'react';
import {Icon} from '../../../../components/icon/Icon';
import styled from 'styled-components';
import {IconType} from 'react-icons';

type Props = {
    title: string
    icon: IconType | string
    color: string
}

export const Skill = ({title, icon, color}: Props) => {
    return (
        <StyledSkill>
            <Icon icon={icon} color={color} size={'80px'}/>
            <SkillTitle>{title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 120px;
  margin: 15px;
  text-align: center;
`

const SkillTitle = styled.h3`

`