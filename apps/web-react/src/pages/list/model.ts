import { toast } from 'sonner'

export const shareAction = async () => {
  try {
    await navigator.share({
      title: 'Раздели чек',
      url: window.location.href,
    })
  } catch {
    await navigator.clipboard.writeText(window.location.href)
    toast.info('Ссылка скопирована', {
      position: 'bottom-center',
    })
  }
}
