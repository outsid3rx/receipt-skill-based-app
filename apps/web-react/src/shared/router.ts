import { reatomRoute } from '@reatom/core'
import * as z from 'zod/mini'

import { decode } from '~entities/decoder'
import { reduce } from '~entities/entity-reducer'
import { splitBillsAtom } from '~features/split-item'

import { type IBillEntity, rawBillEntitySchema } from './types'

export const homeRoute = reatomRoute('')
export const listRoute = reatomRoute({
  path: 'list',
  search: z.object({
    q: z.string(),
  }),
  async loader(params) {
    const q = params.q.replaceAll(' ', '+')
    if (!q) {
      return []
    }

    try {
      const query = decode(q)
      const normalized = reduce(
        query.map((item: IBillEntity) => ({
          ...item,
          price: Number(item.price) || 0,
          count: Number(item.count) || 0,
        })),
      )

      await z.array(rawBillEntitySchema).parseAsync(normalized)
      return splitBillsAtom.set(normalized)
    } catch {
      return []
    }
  },
})
