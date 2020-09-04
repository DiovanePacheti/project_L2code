import React from 'react';
import Select from '../../components/Select';
import PageHeader from '../../components/PageHeader';

import './styles.css';

function EscolheConvenio() {
    return(
        <div id="page-escolher-convenio" >
            <PageHeader title="Indicação especial" />
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

export default EscolheConvenio;