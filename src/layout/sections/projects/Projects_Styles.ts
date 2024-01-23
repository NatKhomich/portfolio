import styled from 'styled-components';
import {theme} from '../../../styles/Theme';

const Projects = styled.section`
position: relative;
`

const Project = styled.div`
  display: flex;
  padding: 15px;
  background-color: ${theme.colors.add};
  width: 100%;
  margin-bottom: 15px;
  
    @media ${theme.media.tablet} {
      flex-wrap: wrap;
    }
`

const ImageWrapper = styled.div`
  width: 400px;
  min-width: 400px;
  min-height: 300px;
  object-fit: cover;
  border-radius: 7px;
  
  &:hover {
    filter: blur(1px);
    transition: ${theme.animations.transition};
  }

  @media ${theme.media.tablet} {
    width: 100%;
    min-width: 100%;
  }
`

const Image = styled.img`
  width: 100%;
  min-height: 300px;
  object-fit: cover;
  border-radius: 7px;
  
  @media ${theme.media.tablet} {
    width: 100%;
    max-height: 350px;
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

const Technologies = styled.div`
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


export const S = {
    Projects,
    Project,
    Image,
    ProjectWrapper,
    ProjectName,
    Description,
    Link,
    Technologies,
    TechnologiesItem,
    ImageWrapper
}