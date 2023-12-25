import React from 'react';
import styled from 'styled-components';
import {ProjectProps} from '../../../../data/data';
import {theme} from '../../../../styles/Theme';
import {MdOutlineOpenInNew} from 'react-icons/md';
import {Icon} from '../../../../components/Icon';
import {FaGithub} from 'react-icons/fa';


export const Project = ({image, title, description, demoUrl, githubUrl, technologies}: ProjectProps) => {
    return (
        <StyledProject>
                <Image src={image} alt='project-photo'/>
                <ProjectWrapper>
                    <ProjectName>{title}</ProjectName>
                    <Technologies>
                        {technologies.map((technology, index) => {
                            return (<TechnologiesItem key={index}>{technology}</TechnologiesItem>)
                        })}
                    </Technologies>
                    <Description>{description}</Description>
                    <Link href={demoUrl} target="_blank" aria-label='demo-project'>
                        <Icon icon={MdOutlineOpenInNew} size={'25px'} color={theme.colors.font}/>
                    </Link>
                    <Link href={githubUrl} target="_blank" aria-label='github-project'>
                        <Icon icon={FaGithub} size={'25px'} color={theme.colors.font}/>
                    </Link>
                </ProjectWrapper>

        </StyledProject>
    );
};

const StyledProject = styled.div`
  display: flex;
  padding: 15px;
  background-color: ${theme.colors.add};
  width: 100%;
  margin-bottom: 15px;
  
    @media ${theme.media.tablet} {
      flex-wrap: wrap;
    }
`

const Image = styled.img`
  width: 40%;
  min-height: 300px;
  object-fit: cover;
  border-radius: 7px;
  
  @media ${theme.media.tablet} {
    width: 100%;
    max-height: 300px;
  }
`

const ProjectWrapper = styled.div`
  margin: 10px 0 0 20px;

  @media ${theme.media.tablet} {
   margin: 10px 0;
  }
`

const ProjectName = styled.h3`
  font-size: 20px;
  font-weight: 700;
`

const Description = styled.p`
  color: #828282;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  margin-bottom: 15px;

  @media ${theme.media.mobile} {
    font-size: 16px;
  }
`
const Link = styled.a`
  & + a {
    margin-left: 10px;
  }

  &:hover svg {
    fill: ${theme.colors.accent};
    transform: scale(1.05);
  }
`

const Technologies = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 20px 0 20px;
`

const TechnologiesItem = styled.span`
  margin-right: 10px;
  color: ${theme.colors.accent};
  white-space: nowrap;
  font-size: 18px;

  @media ${theme.media.mobile} {
    font-size: 16px;
  }
`


