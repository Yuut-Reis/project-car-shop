import { ICar } from '../interfaces/ICar';

const mockModelCar: ICar = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

const idMockModelCar: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
};

const mockModelCarError: ICar = {
  model: '',
  year: 0,
  color: '',
  buyValue: 0,
  doorsQty: 0,
  seatsQty: 0
}

export { mockModelCar, idMockModelCar, mockModelCarError };