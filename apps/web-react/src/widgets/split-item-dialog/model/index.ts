import * as z from 'zod/mini'

export const splitItemSchema = z.object({
  parts: z.string().check(
    z.minLength(1),
    z.refine((v) => {
      const n = Number(v)
      return Number.isInteger(n) && n >= 1
    }, 'Минимум 1 часть'),
  ),
})
