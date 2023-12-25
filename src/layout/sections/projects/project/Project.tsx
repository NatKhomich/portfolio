import React from 'react';
import {ProjectProps} from '../../../../data/data';
import {theme} from '../../../../styles/Theme';
import {MdOutlineOpenInNew} from 'react-icons/md';
import {Icon} from '../../../../components/Icon';
import {FaGithub} from 'react-icons/fa';
import {S} from '../Projects_Styles'


export const Project = ({image, title, description, demoUrl, githubUrl, technologies}: ProjectProps) => {
    return (
        <S.Project>
                <S.Image src={image} alt='project-photo'/>
                <S.ProjectWrapper>
                    <S.ProjectName>{title}</S.ProjectName>
                    <S.Technologies>
                        {technologies.map((technology, index) => {
                            return (<S.TechnologiesItem key={index}>{technology}</S.TechnologiesItem>)
                        })}
                    </S.Technologies>
                    <S.Description>{description}</S.Description>
                    <S.Link href={demoUrl} target="_blank" aria-label='demo-project'>
                        <Icon icon={MdOutlineOpenInNew} size={'25px'} color={theme.colors.font}/>
                    </S.Link>
                    <S.Link href={githubUrl} target="_blank" aria-label='github-project'>
                        <Icon icon={FaGithub} size={'25px'} color={theme.colors.font}/>
                    </S.Link>
                </S.ProjectWrapper>
        </S.Project>
    );
};




