import React from 'react';
import {Icon} from '../../../../components/Icon';
import {IconType} from 'react-icons';
import {S} from '../Skills_Styles'

type Props = {
    title: string
    icon: IconType | string
    color: string
}

export const Skill = ({title, icon, color}: Props) => {
    return (
        <S.Skill>
            <Icon icon={icon} color={color} size={'80px'}/>
            <S.SkillTitle>{title}</S.SkillTitle>
        </S.Skill>
    );
};

