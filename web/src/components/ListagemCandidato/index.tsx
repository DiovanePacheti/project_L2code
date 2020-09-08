import React from 'react';

import './styles.css';
export interface Lista {
    cpf:string;
        id:string;
        nome:string;
        solucao:string;
        convenio:string;
        telefone:string;
        email:string;
        apagar:string;
        detalhe:string;
}
interface ListagemItemProps {
    lista:Lista;
}

const ListagemCandidato: React.FC<ListagemItemProps> = ({lista}) => { 
    return(
        <li className="li-listagem">
            <div className="item">
                <strong>{lista?.telefone}</strong> <strong>{lista?.email}</strong><strong>{lista.cpf}</strong><strong>{lista.nome}</strong><a href="">Ver detalhes</a> <a href="">Apagar</a>
            </div>
        </li>
            
    );
}

export default ListagemCandidato;