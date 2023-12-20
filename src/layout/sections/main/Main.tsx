import React from 'react';
import myPhoto from '../../../assets/images/avatar.webp'
import styled, {css} from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from '../../../components/Container';
import {theme} from '../../../styles/Theme';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name> I am <span> Natalia Khomich </span> </Name>
                        <MainTitle> Front-end Developer </MainTitle>

                        <Link href="https://www.linkedin.com/in/nat-khomich/" target="_blank"
                              background="accent">
                            LinkedIn
                        </Link>

                        <Link href="https://github.com/NatKhomich" target="_blank"
                              background="font">
                            Github
                        </Link>
                    </div>
                    <PhotoWrapper>
                        <Photo src={myPhoto} alt={'photo'}/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>

    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`

const SmallText = styled.small`
  font-size: 24px;
  font-family: Nunito, sans-serif;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word
`

const Name = styled.h2`
  font-size: 50px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  
  span {
    position: relative;
    z-index: 0;
    
    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 17px;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`

const MainTitle = styled.h1`
  font-size: 30px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  margin: 15px 0 32px 0;
  letter-spacing: 2px;
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
`

const PhotoWrapper = styled.div`
position: relative;
  z-index: 0;
  
  &::before {
    content: '';
    width: 359px;
    height: 470px;
    border: 5px solid ${theme.colors.add};
    
    position: absolute;
    top: -16px;
    left: -4px;
    z-index: 2;
  }

  &::after {
    content: '';
    width: 359px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: 5px;
    left: 15px;
    z-index: -1;
  }
`