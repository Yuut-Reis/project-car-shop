import { z } from 'zod';
import { vehicleSchema } from './IVehicle';

export const zCarSchema = vehicleSchema.merge(z.object({
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
}));

export type ICar = z.infer<typeof zCarSchema>;