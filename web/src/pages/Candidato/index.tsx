import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import './styles.css';
import Input from '../../components/Input';
import ListagemCandidato from '../../components/ListagemCandidato';
import Radio from '../../components/Radio';
import api from '../../services/api';

function Candidato(){

    const listagem =[
        {cpf:"000.000.000-89", nome:"Luis", email:"luis@gmail.com" }
    ]

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
                <form onSubmit={handleCreateCandidato} id="formulario-candidato">
                        <div className="radio-solucao">
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
                        <div className="dados-pessoais">
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