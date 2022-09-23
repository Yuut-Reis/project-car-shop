import * as sinon from 'sinon';
import chai from 'chai';
import ModelCar from '../../../models/model.car';
import { Model } from 'mongoose';
import { idMockModelCar, mockModelCar } from '../../mocks';
const { expect } = chai;

describe('Cars Model teste', () => {
    const carsModel = new ModelCar();
  
    describe('New car', () => {
  
      before(async () => {
        sinon
          .stub(Model, 'create')
          .resolves(idMockModelCar);
      });
  
      after(() => {
        sinon.restore();
  
        it('correct created car', async () => {
          const newCar = await carsModel.create(mockModelCar);
          expect(newCar).to.be.deep.equal(idMockModelCar);
        });
      })
    });
  
    describe('Search all Cars', () => {
      before(async () => {
        sinon
          .stub(Model, 'find')
          .resolves();
      });
  
      after(() => {
        sinon.restore();
  
        it('correct  search', async () => {
          const allCars = await carsModel.read();
          expect(allCars).to.be.an('array');
          expect(allCars).to.have.length(4)
        });
      })
    })
  })