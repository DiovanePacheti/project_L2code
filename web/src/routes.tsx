import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import EscolheConvenio from './pages/EscolheConvenio';
import Candidato from './pages/Candidato';
import HistoricoDeIndicacoes from './pages/HistoricoDeIndicacoes';
import CandidatoExpress from './pages/CandidatoExpress';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={EscolheConvenio} />
            <Route path="/candidato-express" component={CandidatoExpress} />
            <Route path="/candidato" component={Candidato} />
            <Route path="/historico-de-indicacoes" component={HistoricoDeIndicacoes} />
        </ BrowserRouter>
    );
}

export default Routes;