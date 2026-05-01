import { action, atom, computed, reatomBoolean } from '@reatom/core'

import type { IRawBillEntity } from '~shared/types'

export interface ISplitBillEntity extends IRawBillEntity {
  parts: number
  isSelected: boolean
}

export const splitBillsAtom = atom<ISplitBillEntity[]>([]).extend((target) => ({
  changeSelectedAction: (index: number, isSelected: boolean) => {
    target.set((prev) =>
      prev.map((item, i) => (i === index ? { ...item, isSelected } : item)),
    )
  },
}))

export const splitItemsTotalPriceAtom = computed(() =>
  splitBillsAtom().reduce(
    (acc, item) =>
      item.isSelected
        ? item.parts === 1
          ? acc + item.price
          : acc + Math.round(item.price / item.parts)
        : acc,
    0,
  ),
)

export const isSplitModalOpenAtom = reatomBoolean(false).extend((target) => ({
  trigger: (index: number) => {
    splitItemIndexAtom.set(index)
    target.setTrue()
  },
  dismiss: () => {
    splitItemIndexAtom.set(undefined)
    target.setFalse()
  },
}))
export const splitItemIndexAtom = atom<number | undefined>(undefined)

export const splitItemAction = action((parts: number) => {
  const index = splitItemIndexAtom()
  if (index === undefined) {
    return
  }

  splitBillsAtom.set((prev) =>
    prev.map((item, i) => (i === index ? { ...item, parts } : item)),
  )

  isSplitModalOpenAtom.dismiss()
})
