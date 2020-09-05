import React from 'react';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import './styles.css';
import Input from '../../components/Input';
import ListagemCandidato from '../../components/ListagemCandidato';

function Candidato(){

    const listagem =[
        {cpf:"000.000.000-89", nome:"Luis", email:"luis@gmail.com" }


    ]

    return(
        
        <div className="page-candidato" >
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
            <div className="cadastro-candidato">
                <form id="formulario-candidato">
                        <div className="dados-pessoais">
                            <Input name="cpf" label="CPF" />
                            <Input name="nome" label="Nome" />
                            <Input name="email" label="Email" />
                            <Input name="telefone" label="Telefone" />
                        </div>
                        <div className="button-carregar-lista-layout">
                            <button type="button">Carregar lista</button>
                            <button type="button">Baixar layout</button>
                        </div>
                    <button type="submit">Indicar candidato</button>
                </form>
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
    )
}

export default Candidato;