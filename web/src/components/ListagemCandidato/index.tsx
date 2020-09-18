import React, { ButtonHTMLAttributes, useState } from 'react';
import api from '../../services/api';
import Detalhes from '../Detalhes';
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

    const [solucao, setSolucao] = useState(" ") 
    const [dialog , setDialog] = useState(0);
    
   async function apagar(id: string, paramSolucao:string){

        try{
            console.log(paramSolucao)
            if(paramSolucao == 'Express'){

                const response = await api.delete(`candidatoExpress/${id}`)
                console.log(response.data)

            }else{
                const response = await api.delete(`candidato/${id}`)
                console.log(response.data)

            }

        }catch(err){
            alert('Erro ao deletar candidato ' + err)
        }
    }

    async function detalhes(id: string, paramSolucao:string){

        try{
            console.log(paramSolucao)
            setDialog(1);
            if(paramSolucao == 'Express'){

                const response = await api.get(`candidatoExpress/${id}`)
                console.log(response.data)

            }else{
                const response = await api.get(`candidato/${id}`)
                console.log(response.data)
                // setDialog(1);

            }


        }catch(err){
            alert('Erro ao deletar candidato ' + err)
        }
    }

    return(
        <Container>
                <DivLi>{lista.telefone}</DivLi> 
                <DivLi>{lista.email}</DivLi>
                <DivLi>{lista.cpf}</DivLi>
                <DivLi>{lista.nome}</DivLi>
                <DivLi>
                    <button 
                        type="button"
                        onClick={() => detalhes(lista.id, lista.solucao)} 
                    >Ver detalhes</button> </DivLi>
                <DivLi>
                    <button 
                        type="button"
                        onClick={() => apagar(lista.id, lista.solucao)} 
                    >Apagar</button>
                </DivLi>
                {
                    (dialog == 1 )? <Detalhes />:<></>

                }
                
        </Container>
            
    );
}

export default ListagemCandidato;