import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

export default class ControlerCar {
  private _car: IService<ICar>;
  constructor(service: IService<ICar>) {
    this._car = service;
  }

  public async create(req: Request & { body: ICar }, res: Response<ICar>): Promise<void> {
    const newCar = await this._car.create(req.body);
    res.status(201).json(newCar);
  }

  public async getAll(_req: Request, res: Response): Promise<void> {
    const getCar = await this._car.getAll();
    res.status(200).json(getCar);
  }
}