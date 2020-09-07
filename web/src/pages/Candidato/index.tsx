import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import './styles.css';
import Input from '../../components/Input';
import Radio from '../../components/Radio';
import api from '../../services/api';
import Button from '../../components/Button';

function Candidato(){

    

    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [solucao, setSolucao] = useState('')
    const [convenio, SetConvenio] = useState('ULBRA-EAD')

    function handleCreateCandidato(e: FormEvent){
        e.preventDefault();

        api.post('/candidato',{
            cpf,
            nome,
            email,
            telefone,
            solucao,
            convenio
        }).then(() =>{
            alert('cadastro realizado com sucesso')
        }).catch(() =>{
            alert('erro na cadastro') 
        })

        console.log({
            cpf,
            nome,
            email,
            telefone,
            solucao,
            convenio
        })
    }

    return(
        
        <div className="page-candidato" >
            <PageHeader title="Indicação especial">
            <div className="selectConvenio"> 
            <Select 
                name="convenio" 
                label="selecione o convênio vinculado aos estudantes que serão inidcados:" 
                options={[
                    {value:'Cred', label:'ULBRA EAD - Cred'},
                    {value:'Express', label:'ULBRA EAD - Cred/express'}
                    
                ]}
                
            />
            </div>
            </PageHeader>
            <div className="cadastro-candidato">
                <form onSubmit={handleCreateCandidato} id="formulario-candidato">
                        <div className="field-set">
                            <Radio 
                                name="solucao" 
                                label="Express"
                                value="Express" 
                                id="express" 
                                onChange={(e) => {setSolucao(e.target.value)}}
                            />   
                            <Radio 
                                name="solucao" 
                                label="Cred"
                                value="Cred" 
                                id="cred" 
                                onChange={(e) => {setSolucao(e.target.value)}}
                            />   
                        </div>
                        <div className="field-set">
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
                        </div>
                        <div className="field-set button-carregar-lista-layout">
                            <Button name="Carregar lista" type="button" />
                            <Button name="Baixar layout" type="button" />
                        </div>
                        <Button name="Indicar Candidato" type="submit" />

                </form>
            </div>
           
        </div>
    )
}

export default Candidato;