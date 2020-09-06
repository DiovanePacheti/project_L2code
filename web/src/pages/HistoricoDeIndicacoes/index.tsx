import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';

import './styles.css'
import api from '../../services/api';

function HistoricoDeIndicacoes(){

    const [cpf, setCpf] = useState('0');
    const [nome, setNome] = useState('D');

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
            <PageHeader title="Histórico de indicação especial"/>
            <Select 
                name="convenio" 
                label="selecione o convênio vinculado aos estudantes que serão inidcados:" 
                options={[
                    {value:'Cred', label:'ULBRA EAD - Cred'},
                    {value:'Express', label:'ULBRA EAD - Cred/express'}
                    
                ]}
            />
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