import { reatomComponent } from '@reatom/react'

import { HomePage } from '~pages/home'
import { ListPage } from '~pages/list'
import { Toaster } from '~shared/components/ui/sonner'

import { homeRoute, listRoute } from '../shared/router'

export const App = reatomComponent(() => (
  <>
    {homeRoute.exact() && <HomePage />}
    {listRoute.exact() && <ListPage />}
    <Toaster />
  </>
))
