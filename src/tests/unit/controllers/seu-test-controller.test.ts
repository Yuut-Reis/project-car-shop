import * as sinon from 'sinon';
import chai from 'chai';
import { Request, Response } from 'express';
import ControlerCar from '../../../controllers/controller.car';
import ServicesCar from '../../../services/service.car';
import ModelCar from '../../../models/model.car';
import { mockModelCar } from '../../mocks';
const { expect } = chai;


describe('Cars Controller', () => {
    const carsModel = new ModelCar()
    const carsService = new ServicesCar(carsModel);
    const carsController = new ControlerCar(carsService);
    
    const req = {} as Request;
    const res = {} as Response;
  
    before(() => {
      sinon.stub(carsService, 'create').resolves(mockModelCar);
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    describe('Create car', () => {
      it('Success', async () => {
        req.body = mockModelCar;
        await carsController.create(req, res);
        expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      });
    });
  
  });