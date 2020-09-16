import React from 'react';
import { Container, SelectTop } from './styles';
import PageHeader from '../../components/PageHeader';
import TopSection from '../../components/TopSection';
import Formulario from '../../components/Formulario';
import Select from '../../components/Select';

function Candidato(){

    return(

        <Container>
            <PageHeader />
            <TopSection title="Indicação espeial">
                <SelectTop>
                    <Select 
                        name="convenio" 
                        label="selecione o convênio vinculado aos estudantes que serão inidcados:" 
                        options={[
                            {value:'Cred', label:'ULBRA EAD - Cred'},
                            {value:'Express', label:'ULBRA EAD - Cred/express'}
                        ]}
                    />
                </SelectTop>    
            </TopSection>
            <Formulario />
        </Container>    
        
    );
}

export default Candidato;