import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';

import './styles.css'
import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';

function HistoricoDeIndicacoes(){

    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [solucao, setSolucao] = useState('');
    const [conceito, setConceito] = useState('');

    useEffect(() => {
        api.get('/candidato').then(response =>{

            console.log(response.data)

            const {cpf, nome} = response.data;
            setCpf(cpf);
            setNome(nome);
        })
    },[])

    return(
        <div id="page-historico" >
            <PageHeader title="Histórico de indicação especial">
                <form id="formIdHistorico">
                    <Select 
                        name="convenio" 
                        value={conceito}
                        onChange={e =>{setConceito(e.target.value)}}
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
                
                <table>
                    <tr>
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Solução</th>
                    </tr>
                    <tr>
                        <td>{cpf}</td>
                        <td>{nome}</td>
                        <td>diovane@gmail.com</td>
                        <td>Express</td>
                        <td><a href="">Ver detalhes</a></td>
                        <td><a href="">Apagar</a></td>
                    </tr>
                </table>
            </div>

        </div>
    );
}

export default HistoricoDeIndicacoes;                                          