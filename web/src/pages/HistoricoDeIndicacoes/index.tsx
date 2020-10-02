import React, { useState, useEffect, FormEvent, useCallback } from 'react';
import {Container, Form ,IconFiSearch ,SectionLista} from './styles';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ListagemCandidato ,{ Lista }from '../../components/ListagemCandidato';
import TopSection from '../../components/TopSection';
import { Link } from 'react-router-dom';

interface InterfaceCandidato{
    cpf:string;
    nome:string;
    solucao:string;
    convenio:string;
}    

const HistoricoDeIndicacoes: React.FC = () =>{

    const [listagemCanditatos, setListagemCanditatos] = useState([]);

    const[ busca , setBusca] = useState<InterfaceCandidato>({} as InterfaceCandidato)
    
    const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) =>{
        setBusca({
            ...busca,
            [e.currentTarget.name]: e.currentTarget.value,
            solucao:"Express",
            convenio:"ULBRA-EAD"
        })
    },[busca])

    
    async function searchCandidato(e: FormEvent){
        e.preventDefault();

        const response = await api.get('/historico', {
            params:{
                convenio:busca.convenio,
                cpf:busca.cpf,
                nome:busca.nome,
                solucao:busca.solucao,
            }
        })
            setListagemCanditatos(response.data);
    }

    return(
        <Container>
            <PageHeader />
            <TopSection title="Histórico de indicação especial" caminho="/" text="voltar" >
            <Form onSubmit={searchCandidato} >
                    <Select 
                        name="convenio" 
                        // value={convenio}
                        // onChange={e =>{setConvenio(e.target.value)}}
                        options={[
                            {value:'ULBRA-EAD', label:'ULBRA EAD '},
                            {value:'ULBRA-EAD', label:'ULBRA EAD '}
                    
                        ]}
                    />
                    <Select 
                        name="solucao" 
                        // value={solucao}
                        // onChange={e =>{setSolucao(e.target.value)}}
                        options={[
                            {value:'Cred', label:'Cred'},
                            {value:'Express', label:'Express'}
                        
                        ]}
                        />
                        <Input 
                            mask="nome"
                            name="nome" 
                            label="Nome"
                            onChange={handleChange} 
                        />
                        <Input 
                            mask="cpf"
                            name="cpf" 
                            label="CPF" 
                            onChange={handleChange}
                    
                        />
                        <Button children={<IconFiSearch />} name="Buscar" type="submit" />
                        
                </Form>
            </TopSection>
                
                        
                <SectionLista>
                    {
                        listagemCanditatos.map( (lista: Lista ) => {
                            return <ListagemCandidato key={lista.id} lista={lista} />
                        })
                    }     
                </SectionLista>
            </Container>
    );
}

export default HistoricoDeIndicacoes;                                          