import React from 'react';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';

import './styles.css'

function HistoricoDeIndicacoes(){
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

        </div>
    );
}

export default HistoricoDeIndicacoes;                                          