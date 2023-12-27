import styled, {css} from 'styled-components';
import {theme} from '../../../styles/Theme';

const Main = styled.section`
  min-height: 100vh;
  display: flex;
`

const SmallText = styled.small`
  font-size: 24px;
  font-family: Nunito, sans-serif;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;

  @media ${theme.media.mobile} {
    font-size: 20px;
  }
`

const Name = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 45px;
  
  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;
    
    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 17px;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;

      @media ${theme.media.mobile} {
        height: 13px;
      }
    }
  }
  
  @media ${theme.media.mobile} {
    font-size: 35px;
  }
`

const MainTitle = styled.h1`
  font-size: 30px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  margin: 15px 0 20px 0;
  letter-spacing: 2px;

  @media ${theme.media.mobile} {
    font-size: 25px;
  }
`

type LinkProps = {
    background: 'accent' | 'font'
}

const Link = styled.a<LinkProps>`
  display: inline-block;
  width: 115px;
  height: 43px;
  color: black;
  font-size: 20px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  border-radius: 7px;
  text-align: center;

  padding: 10px 0;
  background-color: ${props => props.background || 'white'};

  ${props => props.background === 'accent' && css`
    background-color: ${theme.colors.accent};
  `}
  ${props => props.background === 'font' && css`
    background-color: ${theme.colors.font};
  `}
  & + a {
    margin-left: 12px;
  }

  &:hover {
    background-color: rgba(243, 227, 199, 0.7);
  }
`

const Photo = styled.img`
  width: 350px;
  height: 450px;
  object-fit: cover;
  
  @media ${theme.media.mobile} {
    width: 300px;
    height: 380px;
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 1;
  margin-right: 20px;

  &::before {
    content: '';
    width: 362px;
    height: 472px;
    border: 6px solid ${theme.colors.add};

    position: absolute;
    top: -16px;
    left: -6px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 312px;
      height: 402px;
    }
  }

  &::after {
    content: '';
    width: 360px;
    height: 472px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: 6px;
    left: 16px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 312px;
      height: 402px;
    }
  }

  @media ${theme.media.add} {
    margin-top: 30px;
    margin-left: 10px;
  }

  @media ${theme.media.small} {
    display: none;
  }
`

const Typewriter = styled.p`
  font-size: 26px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  margin: 45px 0 20px 0;
  letter-spacing: 2px;
  color: ${theme.colors.accent}
`

export const S = {
    Main,
    SmallText,
    Name,
    MainTitle,
    Link,
    Photo,
    PhotoWrapper,
    Typewriter
}