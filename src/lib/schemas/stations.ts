import * as z from 'zod'

export const stationIslandSchema = z.object({
  identifier: z.string({ required_error: 'Requerido' }),
  status: z.string({ required_error: 'Requerido' }),
  islandIssue: z.string({ required_error: 'Requerido' }).length(256, { message: 'Maximo 256 caracteres' }),
  maxDispensersAllowed: z.number()
    .min(1, { message: 'Minimo 1' })
})
