import * as z from 'zod/mini'

export const billEntitySchema = z.object({
  title: z.string(),
  price: z.coerce.number(),
  count: z.coerce.number(),
})

export const rawBillEntitySchema = z.omit(billEntitySchema, { count: true })

export type IBillEntity = z.infer<typeof billEntitySchema>
export type IRawBillEntity = z.infer<typeof rawBillEntitySchema>
