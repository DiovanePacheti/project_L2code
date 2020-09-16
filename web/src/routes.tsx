import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Candidato from './pages/Candidato';
import HistoricoDeIndicacoes from './pages/HistoricoDeIndicacoes';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Candidato} />
            <Route path="/historico-de-indicacoes" component={HistoricoDeIndicacoes} />
        </ BrowserRouter>
    );
}

export default Routes;