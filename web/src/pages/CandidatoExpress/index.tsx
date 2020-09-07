import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import './styles.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Radio from '../../components/Radio';
import api from '../../services/api';

function CandidatoExpress(){

    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [solucao, setSolucao] = useState('')
    const [convenio, SetConvenio] = useState('ULBRA-EAD')
    const [curso, setCurso] = useState('');
    const [previsaoDeFormatura]

    function handleCreateCandidato(e:FormEvent){
        e.preventDefault();

        api.post('/candidatoExpress',{
            cpf,
            nome,
            email,
            telefone,
            solucao,
            convenio
        })
    }
 
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
                <form  onSubmit={handleCreateCandidato} id="formulario-candidato">
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
                            onChange={(e) =>{setEmail(e.target.value)}}
                        />
                        <Input 
                            name="telefone"     
                            label="Telefone" 
                            value={telefone}
                            onChange={(e) =>{setTelefone(e.target.value)}}
                        />
                    </div>
                    <div className="field-set">
                        <Select 
                            name="curso" 
                            label="" 
                            value={curso}
                            onChange={(e) =>{setCurso(e.target.value)}}
                            options={[
                                {value:'Analise Desenvolvimento de Sistema', label:'Analise Desenvolvimento de Sistema'},
                                {value:'Redes', label:'Redes'}
                            
                            ]}
                
                        />
                        <Input 
                            name="previsao-de-formatura" 
                            label="Previsão de formatura" 
                            placeholder="ANO/SEMESTRE" 
                            value{}
                        />
                        <Input name="email" label="Valor contratado" />
                        <Input name="telefone" label="Parcelas cobertas" />
                    </div> 
                    <div className="field-set">
                        <Input name="cpf" label="Parcelas restituir" />
                        <div className="field-set-interno">
                            <Input name="nome" label="validade" placeholder="De" />
                            <Input name="email" label="" placeholder="Até"/>
                        </div>
                        <Input name="email" label="inicio da restituição" placeholder="MÊS/ANO" />
                    </div>           
                    <Button type="submit" name="Indicar candidato" />
                </form>
            </div>
           


        </div>
    );
}

export default CandidatoExpress;