import * as z from 'zod'

export const stationIslandSchema = z.object({
  identifier: z.string({ required_error: 'Requerido' }),
  maxDispensersAllowed: z.number()
    .min(1, { message: 'Requerido' })
    .max(2)
})
