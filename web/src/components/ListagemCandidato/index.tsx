import React, { useState } from 'react';
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

    const [ids, setIds] = useState(lista.id || " ") 
    
    function detalhes(e:any){
        e.preventDefault();
        console.log(ids)
    }
    return(
        <Container>
                <DivLi>{lista.telefone}</DivLi> 
                <DivLi>{lista.email}</DivLi>
                <DivLi>{lista.cpf}</DivLi>
                <DivLi>{lista.nome}</DivLi>
                <DivLi>
                    <button 
                        // type="button"
                        // value={ids}
                        // onChange={(e) => {setIds(e.target.value)}}
                        // onClick={detalhes} 
                    >Ver detalhes</button> </DivLi>
                <DivLi><a href="">Apagar</a></DivLi>

                
                
        </Container>
            
    );
}

export default ListagemCandidato;