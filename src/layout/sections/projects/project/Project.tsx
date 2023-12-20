import React from 'react';
import styled from 'styled-components';
import {ProjectType} from '../../../../data/data';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import {theme} from '../../../../styles/Theme';
import {MdOutlineOpenInNew} from 'react-icons/md';
import {Icon} from '../../../../components/Icon';
import {FaGithub} from 'react-icons/fa';


export const Project = ({image, title, description, demoUrl, githubUrl, technologies}: ProjectType) => {
    return (
        <StyledProject>
            <FlexWrapper>
                <Image src={image}/>
                <ProjectWrapper>
                    <ProjectName>{title}</ProjectName>
                    <Technologies>
                        {technologies.map((technology, index) => {
                            return (<TechnologiesItem key={index}>{technology}</TechnologiesItem>)
                        })}
                    </Technologies>
                    <Description>{description}</Description>
                    <Link href={demoUrl} target="_blank">
                        <Icon icon={MdOutlineOpenInNew} size={'23px'} color={theme.colors.font}/>
                    </Link>
                    <Link href={githubUrl} target="_blank">
                        <Icon icon={FaGithub} size={'23px'} color={theme.colors.font}/>
                    </Link>
                </ProjectWrapper>
            </FlexWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  padding: 15px;
  background-color: ${theme.colors.add};
  width: 100%;
  margin-bottom: 15px;
`

const Image = styled.img`
  width: 40%;
  min-height: 300px;
  object-fit: cover;
  border-radius: 7px;
`

const ProjectWrapper = styled.div`
  margin: 10px 0 0 20px;
`

const ProjectName = styled.h4`
  font-size: 20px;
  font-weight: 700;
`

const Description = styled.p`
  color: #828282;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  margin-bottom: 15px;

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
`


