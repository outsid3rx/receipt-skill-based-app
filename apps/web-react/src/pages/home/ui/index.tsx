import { reatomComponent } from '@reatom/react'

import { PageTemplate } from '~shared/ui/page-template'

export const HomePage = reatomComponent(() => (
  <PageTemplate
    title="Раздели чек"
    subtitle="Используй навык для ИИ, чтобы получить ссылку на удобное разделение чека из фотографии"
  >
    <p className="leading-7 [&:not(:first-child)]:my-2">
      Читай подробнее на Github
    </p>
  </PageTemplate>
))
