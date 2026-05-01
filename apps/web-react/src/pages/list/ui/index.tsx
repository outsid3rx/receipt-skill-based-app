import { reatomComponent } from '@reatom/react'
import { isEmpty } from 'es-toolkit/compat'
import { Percent } from 'lucide-react'

import {
  isSplitModalOpenAtom,
  splitBillsAtom,
  splitItemsTotalPriceAtom,
} from '~features/split-item'
import { Button } from '~shared/components/ui/button'
import { Checkbox } from '~shared/components/ui/checkbox'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from '~shared/components/ui/field'
import { listRoute } from '~shared/router'
import { MainLoader } from '~shared/ui/main-loader'
import { PageTemplate } from '~shared/ui/page-template'
import { SplitItemDialog } from '~widgets/split-item-dialog'

import { shareAction } from '../model'

export const ListPage = reatomComponent(() => {
  if (!listRoute.loader.ready()) {
    return <MainLoader />
  }

  if (isEmpty(splitBillsAtom())) {
    return (
      <div className="text-center text-gray-500 py-8">В чеке нет позиций</div>
    )
  }

  return (
    <PageTemplate
      title="Просмотр чека"
      subtitle="Выбери нужные позиции и плати только за свое. Чтобы оплатить долю от позиции нажми на кнопку справа от названия"
    >
      <div className="flex max-w-md min-w-0 flex-col gap-2">
        {splitBillsAtom().map((item, index) => (
          <FieldLabel key={item.title + index}>
            <Field orientation="horizontal">
              <Checkbox
                checked={item.isSelected}
                onCheckedChange={(isSelected) =>
                  splitBillsAtom.changeSelectedAction(index, isSelected)
                }
              />
              <FieldContent>
                <FieldTitle>{item.title}</FieldTitle>
                <FieldDescription>
                  {item.price} Р
                  {item.parts > 1
                    ? ` (Делится на ${item.parts} человек)`
                    : null}
                </FieldDescription>
              </FieldContent>
              <Button
                className="self-center"
                variant="outline"
                size="icon"
                onClick={() => isSplitModalOpenAtom.trigger(index)}
              >
                <Percent />
              </Button>
            </Field>
          </FieldLabel>
        ))}
      </div>
      <div className="sticky bottom-0 flex flex-col gap-2 border-t bg-background py-4">
        <p className="font-medium">Всего: {splitItemsTotalPriceAtom()} Р</p>
        <Button className="w-full" size="lg" onClick={shareAction}>
          Поделиться ссылкой
        </Button>
      </div>
      {isSplitModalOpenAtom() && <SplitItemDialog />}
    </PageTemplate>
  )
})
