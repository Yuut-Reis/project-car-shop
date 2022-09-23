import { Router } from 'express';
import ControlerCar from '../controllers/controller.car';
import ServiceCar from '../services/service.car';
import ModelCar from '../models/model.car';

const RouterCars = Router();
const model = new ModelCar();
const service = new ServiceCar(model);
const controller = new ControlerCar(service);

RouterCars.route('/')
  .post((req, res) => controller.create(req, res));

export default RouterCars;