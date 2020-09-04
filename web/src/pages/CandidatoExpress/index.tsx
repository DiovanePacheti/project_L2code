import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import './styles.css';
import Input from '../../components/Input';



function CandidatoExpress(){

    

    const[cpf, setCpf] = useState('');
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[telefone, setTelefone] = useState('');

    return(
        <div className="page-candidato-express" >

            <PageHeader title="Indicação especial" />
            <Select 
                name="convenio" 
                label="selecione o convênio vinculado aos estudantes que serão inidcados:" 
                options={[
                    {value:'Cred', label:'ULBRA EAD - Cred'},
                    {value:'Express', label:'ULBRA EAD - Cred/express'}
                    
                ]}
            />

            <div className="cadastro-candidato-express">
                <form  id="formulario-candidato">
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
                    <Input 
                        name="email" 
                        label="Email" 
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                    <Input 
                        name="telefone" 
                        label="Telefone" 
                        value={telefone}
                        onChange={(e) => {setTelefone(e.target.value)}}
                    />
                    <button type="submit">Indicar candidato</button>
                </form>
            </div>
            <div className="listando-candidatos">
                <ul>
                    {
                        
                    }

                </ul>
            </div>


        </div>
    );
}

export default CandidatoExpress;