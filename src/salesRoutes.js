import { Router } from 'express';
import SalesController from './salesController.js';

const salesRoutes = Router();

salesRoutes.get('/', (req, res) => {
  const controller = new SalesController();
  controller.getSales();
  res.send('Done');
});

export default salesRoutes;
