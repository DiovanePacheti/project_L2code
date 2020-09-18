import React, { ButtonHTMLAttributes, useState } from 'react';
import api from '../../services/api';
import Button from '../Button';
import Detalhes from '../Detalhes';
import { Container, DivLi, Top, Titulo , IconFaTrashAlt, IconFaListUl}from './styles';

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

interface InterDetalhes {
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

interface Detalh<InterDetalhes> {
    det:InterDetalhes;
}


const ListagemCandidato: React.FC<ListagemItemProps> = ({lista}) => { 

    const [detalhes, setDetalhes] = useState([]); 
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

    async function handelDetalhes(id: string, paramSolucao:string){

        try{
            console.log(paramSolucao)
            setDialog(1);
            if(paramSolucao == 'Express'){

                const response = await api.get(`candidatoExpress/${id}`)
                setDetalhes(response.data)

            }else{
                const response = await api.get(`candidato/${id}`)
                setDetalhes(response.data)
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
                        onClick={() => handelDetalhes(lista.id, lista.solucao)} 
                    ><IconFaListUl />Ver detalhes</button> </DivLi>
                <DivLi>
                    <button 
                        type="button"
                        onClick={() => apagar(lista.id, lista.solucao)} 
                    ><IconFaTrashAlt />Apagar</button>
                </DivLi>
                {
                    (dialog == 1 )? <Detalhes >
                        
                        <Top>
                            <Titulo>Detalhes da indicação especial</Titulo>
                            <Button onClick={() => setDialog(0)} name="X"/>
                        </Top>
                        detalhes
                        {
                            
                            detalhes.map((detalhe: InterDetalhes) =>{
                                return(
                                    detalhe.nome, 
                                    detalhe.cpf,
                                    detalhe.convenio
                                    )
                            })
                        }
                    </Detalhes>:<></>

                }
                
        </Container>
            
    );
}

export default ListagemCandidato;