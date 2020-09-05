import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/img/logo.png';
import './styles.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock , faChartPie, faGraduationCap, faRedoAlt, faEllipsisV, faFileContract} from '@fortawesome/free-solid-svg-icons'
library.add({faClock, faChartPie, faGraduationCap,faRedoAlt,faEllipsisV,faFileContract});

interface PageHeaderProps{
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
                <nav>
                    <div className="img-logo">
                        <img src={logoImg} alt="l2code"/>
                    </div>
                    <div className="header-menu">
                        <ul>
                            <li><a href="#"><FontAwesomeIcon icon="file-contract" className="iconsMenu"/>Concessões</a></li>
                            <li><a href="#"><FontAwesomeIcon icon="graduation-cap" className="iconsMenu"/>Beneficiários</a></li>
                            <li><a href="#"><FontAwesomeIcon icon="redo-alt" className="iconsMenu"/>Renovações</a></li>
                            <li><a href="#"><FontAwesomeIcon icon="chart-pie" className="iconsMenu"/>Relatórios</a></li>
                            <li><a href="#"><FontAwesomeIcon icon="ellipsis-v" className="iconsMenu"/>Mais</a></li>
                        </ul>
                    </div>
                    <div className="sessaoLogado">
                        <p>Olá, Diovane</p>
                    </div>
                </nav>
                <div className="complementos-header">
                        <div className="historico-navegacao">
                             <p>Portal <span> {'>'} </span> indicação especial  </p>
                             <strong>{props.title}</strong>
                        </div>
                         <Link to="/historico-de-indicacoes" className="historico-indicacoes">
                            <FontAwesomeIcon icon="clock" className="clock-historico"/>
                            Acessar histórico de indicações
                        </Link>
                </div>
                {props.children}
            </header>
    );
}

export default PageHeader;