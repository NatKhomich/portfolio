import React from 'react';
import myPhoto from '../../../assets/images/myPhoto.webp'
import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <Name> Hello, I’m Natalia Khomich </Name>
                    <MainTitle> Front-end Developer </MainTitle>
                </div>
                <Photo src={myPhoto} alt={'photo'}/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #d5eff5;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name = styled.h2`

`