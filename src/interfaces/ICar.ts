import { z } from 'zod';
import { vehicleSchema } from './IVehicle';

export const zCarSchema = vehicleSchema.merge(z.object({
  doorsQty: z.number({
    invalid_type_error: 'doorsQty must be a number',
  })
    .gte(2, { message: 'doorsQty must be greater than 2' })
    .lte(4, { message: 'doorsQty cannot be greater than 4' }),
  seatsQty: z.number({
    invalid_type_error: 'seatsQty must be a number',
  })
    .gte(2, { message: 'seatsQty must be greater than 2' })
    .lte(7, { message: 'seatsQty cannot be greater than 7' }),
}));

export type ICar = z.infer<typeof zCarSchema>;