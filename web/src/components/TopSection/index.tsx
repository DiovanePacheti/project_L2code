import React, { useState } from 'react';
import Select from '../Select';
import { Link } from 'react-router-dom';

import { 
    Container,
    Navegacao,
    TitleLinkHistorico,
    Title,
    Lincando,
    IconClock,
    Selecione
  } from './styles';

interface TopSectionProps{
    title: string;
    caminho: string;
    text : string;
}

const TopSection: React.FC<TopSectionProps> = (props) =>{

    
    return (
        <Container>
            <Navegacao >
                <Link to={props.caminho}>{props.text}</Link>
            </Navegacao>
            <TitleLinkHistorico>
                <Title>
                    {props.title}
                </Title>
                <Lincando>
                    <IconClock />
                    <Link to="/historico-de-indicacoes" className="historico-indicacoes" >Acessar histórico de indicações</Link>  
                </Lincando> 
            </TitleLinkHistorico>
            <Selecione>
                {props.children}
                
            </Selecione>
        </Container>
    );
}

export default TopSection;