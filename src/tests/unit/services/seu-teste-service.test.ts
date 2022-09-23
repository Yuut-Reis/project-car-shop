 import * as sinon from 'sinon';
 import chai from 'chai';
import ModelCar from '../../../models/model.car';
import ServicesCar from '../../../services/service.car';
import { idMockModelCar, mockModelCar, mockModelCarError } from '../../mocks';
 const { expect } = chai;
 import { ZodError } from 'zod';

describe('Cars Service', () => {
    const carsModel = new ModelCar ();
    const carsService = new ServicesCar(carsModel);
  
    describe('Create new Car', () => {
      before(async () => {
        sinon
          .stub(carsModel, 'create')
          .resolves(idMockModelCar);
  
      });
  
      after(() => {
        sinon.restore();
      })
      it('Success', async () => {
        const carCreated = await carsService.create(mockModelCar);
        expect(carCreated).to.be.deep.equal(idMockModelCar)
      });
  
      it('Failed', async () => {
        let error;
        try {
          await carsService.create(mockModelCarError);
        } catch (err) {
          error = err
        }
        expect(error).to.be.instanceOf(ZodError);
      })
    })
  
  });