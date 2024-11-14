import { cn } from '../../lib/utils'

interface H4Props extends React.ComponentPropsWithoutRef<'h4'> { }

export function H4({ className, ...props }: H4Props) {
  return (
    <h3
      className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}
      {...props}
    />
  )
}
