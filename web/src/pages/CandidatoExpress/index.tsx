import React from 'react';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import './styles.css';
import ListagemCandidato from '../../components/ListagemCandidato';
import Input from '../../components/Input';

function CandidatoExpress(){

    const listagem =[
        {cpf:"000.000.000-89", nome:"Luis", email:"luis@gmail.com" }


    ]

    return(
        <div className="page-candidato-express" >
            <PageHeader title="Indicação especial">
            <Select 
                name="convenio" 
                label="selecione o convênio vinculado aos estudantes que serão inidcados:" 
                options={[
                    {value:'Cred', label:'ULBRA EAD - Cred'},
                    {value:'Express', label:'ULBRA EAD - Cred/express'}
                    
                ]}
                
            />
            </PageHeader>
            <div className="cadastro-candidato-express">
                <form id="formulario-candidato">
                    <Input name="cpf" label="CPF" />
                    <Input name="nome" label="Nome" />
                    <Input name="email" label="Email" />
                    <Input name="telefone" label="Telefone" />
                </form>
                    <button type="button">Indicar candidato</button>
            </div>
            <div className="listando-candidatos">
                <ul>
                    {
                        listagem.map(lista =>{
                            return(
                                <ListagemCandidato />
                            )
                        })
                    }

                </ul>
            </div>


        </div>
    );
}

export default CandidatoExpress;