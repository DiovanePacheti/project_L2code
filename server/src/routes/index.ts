import Router from 'express';
import candidatoExpressRoutes from './candidatoExpress.routes';
import candidatoRoutes from './candidato.routes';
import historicoDeIndicacaoEspeciaal from './historicoDeIndicacaoEspecial.routes';

const routes = Router();

routes.use('/candidatoExpress', candidatoExpressRoutes);
routes.use('/candidato', candidatoRoutes);
routes.use('/historico', historicoDeIndicacaoEspeciaal);

export default routes;