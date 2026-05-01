import { reatomComponent } from '@reatom/react'
import { useForm } from '@tanstack/react-form'

import { isSplitModalOpenAtom, splitItemAction } from '~features/split-item'
import { Button } from '~shared/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '~shared/components/ui/dialog'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '~shared/components/ui/field'
import { Input } from '~shared/components/ui/input'

import { splitItemSchema } from '../model'

export const SplitItemDialog = reatomComponent(() => {
  const form = useForm({
    defaultValues: {
      parts: '1',
    },
    validators: {
      onSubmit: splitItemSchema,
    },
    onSubmit: ({ value }) => splitItemAction(Number(value.parts)),
  })

  return (
    <Dialog open>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Разделить позицию</DialogTitle>
          <DialogDescription>
            <p>Укажите, на сколько частей разделить стоимость</p>
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field
              name="parts"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor="parts">Количество частей</FieldLabel>
                    <Input
                      id="parts"
                      type="number"
                      placeholder="1"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      aria-invalid={isInvalid}
                    />
                    <FieldDescription>
                      На сколько частей разделить цену
                    </FieldDescription>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
          </FieldGroup>
          <DialogFooter className="flex-col mt-4">
            <DialogClose
              className="w-full"
              onClick={isSplitModalOpenAtom.dismiss}
            >
              <Button className="w-full" variant="outline" size="lg">
                Отменить
              </Button>
            </DialogClose>
            <Button className="w-full" type="submit" size="lg">
              Сохранить
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
})
