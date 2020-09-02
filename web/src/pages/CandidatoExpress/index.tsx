import React from 'react';
import './styles.css';

import logoImg from '../../assets/img/logo.png';


function CandidatoExpress() {
    return(
        <div id="page-candidato-express" className="container">
            <header className="page-header">
                <div className="top-bar-container">
                    <img src={logoImg} alt="l2code"/>
                </div>
                <div className="header-menu">
                    <ul>
                        <li>Concessões</li>
                        <li>Beneficiários</li>
                        <li>Renovações</li>
                        <li>Relatórios</li>
                        <li>Mais</li>
                    </ul>
                </div>
                <div className="sessaoLogado">
                    <p>Olá, Diovane</p>
                </div>

            </header>
        </div>
    );
}

export default CandidatoExpress;