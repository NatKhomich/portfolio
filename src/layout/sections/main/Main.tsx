import React from 'react';
import myPhoto from '../../../assets/images/avatar.webp'
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from '../../../components/Container';
import {S} from './Main_Styles'

export const Main = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={'center'} justify={'space-evenly'} wrap={'wrap'}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name> I am <span> Natalia Khomich </span> </S.Name>
                        <S.MainTitle> Front-end Developer </S.MainTitle>

                        <S.Link href="https://www.linkedin.com/in/nat-khomich/" target="_blank"
                              background="accent">
                            LinkedIn
                        </S.Link>

                        <S.Link href="https://github.com/NatKhomich" target="_blank"
                              background="font">
                            Github
                        </S.Link>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={myPhoto} alt={'photo'}/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

