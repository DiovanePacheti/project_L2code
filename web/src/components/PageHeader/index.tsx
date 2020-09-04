import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/img/logo.png';
import './styles.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
library.add(faClock);

interface PageHeaderProps{
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
                <nav>
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
                </nav>
                <div className="complementos-header">
                    <div className="titulo-navegacao">
                        <p>Portal <span> {'>'} </span> indicação especial  </p>
                        <strong>{props.title}</strong>
                    </div>
                    <Link to="/historico-de-indicacoes" className="historico-indicacoes">
                        <FontAwesomeIcon icon="clock" className="clock-historico"/>
                        Acessar histórico de indicações
                    </Link>
                </div>
            </header>
    );
}

export default PageHeader;