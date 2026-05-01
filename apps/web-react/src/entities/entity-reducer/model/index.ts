import type { ISplitBillEntity } from '~features/split-item'
import type { IBillEntity } from '~shared/types'

export const reduce = (entities: IBillEntity[]): ISplitBillEntity[] => {
  const result: ISplitBillEntity[] = []

  for (const entity of entities) {
    const pricePerUnit = Math.ceil(entity.price / entity.count)

    for (let i = 0; i < entity.count; i++) {
      result.push({
        title: entity.title,
        price: pricePerUnit,
        parts: 1,
        isSelected: false,
      })
    }
  }

  return result
}
