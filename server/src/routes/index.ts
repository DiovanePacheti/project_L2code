import Router from 'express';
import candidatoExpressRoutes from './candidatoExpress.routes';

const routes = Router();

routes.use('/candidatoExpress', candidatoExpressRoutes);

export default routes;