import React, { useState, useEffect, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';

import './styles.css'
import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ListagemCandidato ,{ Lista }from '../../components/ListagemCandidato';


function HistoricoDeIndicacoes(){

    const [listagemCanditatos, setListagemCanditatos] = useState([]);

    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [solucao, setSolucao] = useState('');
    const [convenio, setConvenio] = useState('');
    
    async function searchCandidato(e: FormEvent){
        e.preventDefault();

        const response = await api.get('/historico', {
            params:{
                nome,
                cpf,
                solucao,
                convenio    
            }
        })
            setListagemCanditatos(response.data);
        console.log({
            nome,
            cpf,
            solucao,
            convenio
        })
    }

    return(
        <div id="page-historico" >
            <PageHeader title="Histórico de indicação especial">
                <form id="formIdHistorico" onSubmit={searchCandidato} >
                    <Select 
                        name="convenio" 
                        value={convenio}
                        onChange={e =>{setConvenio(e.target.value)}}
                        options={[
                            {value:'ULBRA-EAD', label:'ULBRA EAD '},
                            {value:'ULBRA-EAD', label:'ULBRA EAD '}
                    
                        ]}
                    />
                    <Select 
                        name="solucao" 
                        value={solucao}
                        onChange={e =>{setSolucao(e.target.value)}}
                        options={[
                            {value:'Cred', label:'Cred'},
                            {value:'Express', label:'Express'}
                        
                        ]}
                        />
                        <Input 
                                name="cpf" 
                                label="CPF" 
                                value={cpf}
                                onChange={(e) => {setCpf(e.target.value)}}
                        />
                        <Input 
                                name="nome" 
                                label="Nome"
                                value={nome}
                                onChange={(e) => {setNome(e.target.value)}} 
                        />
                        <Button name="Indicar Candidato" type="submit" />
                </form>
            </PageHeader>
             <div className="listando-candidatos">
                 {
                     listagemCanditatos.map( (lista: Lista ) => {
                         return <ListagemCandidato key={lista.id} lista={lista} />
                     })
                 }     

                 
            </div>

        </div>
    );
}

export default HistoricoDeIndicacoes;                                          