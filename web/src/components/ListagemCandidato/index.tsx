import React from 'react';
import { Container, DivLi }from './styles';

export interface Lista {
    cpf:string;
        id:string;
        nome:string;
        solucao:string;
        convenio:string;
        telefone:string;
        email:string;
        apagar:string;
        detalhe:string;
}
interface ListagemItemProps {
    lista:Lista;
}

const ListagemCandidato: React.FC<ListagemItemProps> = ({lista}) => { 
    return(
        <Container>
                <DivLi>{lista.telefone}</DivLi> 
                <DivLi>{lista.email}</DivLi>
                <DivLi>{lista.cpf}</DivLi>
                <DivLi>{lista.nome}</DivLi>
                <DivLi><a href="">Ver detalhes</a> </DivLi>
                <DivLi><a href="">Apagar</a></DivLi>

                
                
        </Container>
            
    );
}

export default ListagemCandidato;