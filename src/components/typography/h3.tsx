import { cn } from '../../lib/utils'

interface H3Props extends React.ComponentPropsWithoutRef<'h3'> { }

export function H3({ className, ...props }: H3Props) {
  return (
    <h3
      className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}
      {...props}
    />
  )
}
