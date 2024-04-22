import React from 'react';
import myPhoto from '../../../assets/images/avatar.webp'
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from '../../../components/Container';
import {S} from './Main_Styles'
import ReactTypingEffect from 'react-typing-effect';
import cv from '../../../assets/cv.pdf'

export const Main = () => {

    return (
        <S.Main id='home'>
            <Container>
                <FlexWrapper align={'center'} justify={'space-evenly'} wrap={'wrap'}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name> I am <span> Natalia Khomich </span> </S.Name>
                        <S.MainTitle>
                            Front-end Developer
                        </S.MainTitle>

                        <S.Link href={cv} target="_blank"
                              background="accent">
                            Show CV
                        </S.Link>

                        <S.TextEffect>
                        <ReactTypingEffect
                            speed={100}
                            typingDelay={1000}
                            eraseDelay={1000}
                            text={['I front-end developer', 'I love coding']}
                        />
                        </S.TextEffect>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={myPhoto} alt={'photo'}/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

