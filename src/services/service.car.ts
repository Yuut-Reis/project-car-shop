import { ICar, zCarSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

export default class ServicesCar implements IService<ICar> {
  protected _car: IModel<ICar>;
  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const parsed = zCarSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    const createCar = await this._car.create(obj);
    return createCar;
  }
}