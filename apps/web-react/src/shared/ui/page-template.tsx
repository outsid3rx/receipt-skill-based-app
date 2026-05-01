import type { PropsWithChildren, ReactNode } from 'react'

interface IProps {
  title: ReactNode
  subtitle: ReactNode
  footer?: ReactNode
}

export const PageTemplate = ({
  children,
  footer,
  subtitle,
  title,
}: PropsWithChildren<IProps>) => (
  <div className="flex min-h-svh px-6 pt-6">
    <div className="flex min-w-0 flex-col gap-2 text-sm leading-loose w-full">
      <div className="flex flex-col gap-2">
        <h1 className="font-medium text-xl">{title}</h1>
        <p className="leading-7 [&:not(:first-child)]:my-2">{subtitle}</p>
      </div>
      {children}
      {footer && (
        <div className="sticky bottom-0 flex flex-col gap-2 border-t bg-background py-4">
          {footer}
        </div>
      )}
    </div>
  </div>
)
