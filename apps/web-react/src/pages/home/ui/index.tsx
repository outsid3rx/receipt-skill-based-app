import { reatomComponent } from '@reatom/react'
import { ExternalLink } from 'lucide-react'

import { Button } from '~shared/components/ui/button'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldTitle,
} from '~shared/components/ui/field'
import { PageTemplate } from '~shared/ui/page-template'

interface HowToUseStepProps {
  step: number
  title: string
  description: string
}

const HowToUseStep = ({ step, title, description }: HowToUseStepProps) => (
  <Field>
    <FieldContent>
      <FieldTitle>
        {step}. {title}
      </FieldTitle>
      <FieldDescription>{description}</FieldDescription>
    </FieldContent>
  </Field>
)

export const HomePage = reatomComponent(() => (
  <PageTemplate
    title="Раздели чек"
    subtitle="Используй навык для ИИ, чтобы получить ссылку на удобное разделение чека из фотографии"
    footer={
      <footer className="flex flex-col gap-2">
        <Button
          className="w-full"
          size="lg"
          onClick={() =>
            window.open(
              'https://github.com/outsid3rx/receipt-skill-based-app',
              '_blank',
            )
          }
        >
          Открыть на Github
          <ExternalLink className="ml-2 size-4" />
        </Button>
      </footer>
    }
  >
    <div className="flex min-w-0 flex-col gap-2">
      <Field>
        <FieldContent>
          <FieldTitle>Как использовать</FieldTitle>
          <FieldDescription>
            Загрузи навык в Google AI Edge Gallery и используй его для
            разделения чеков
          </FieldDescription>
        </FieldContent>
      </Field>
      <HowToUseStep
        step={1}
        title="Скачай приложение"
        description="Скачай Google AI Edge Gallery из Google Play или App Store"
      />
      <HowToUseStep
        step={2}
        title="Загрузи навык"
        description="В приложении перейди в раздел Agent Skills и добавь навык по ссылке"
      />
      <HowToUseStep
        step={3}
        title="Отправь фото чека"
        description="Отправь фотографию чека в чат и попроси разделить чек"
      />
      <HowToUseStep
        step={4}
        title="Получи ссылку"
        description="Нажми на ссылку, чтобы открыть чек и выбрать нужные позиции"
      />
    </div>
  </PageTemplate>
))
