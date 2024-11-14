import { cn } from '../../lib/utils'

interface PProps extends React.ComponentPropsWithoutRef<'p'> { }

export function P({ className, ...props }: PProps) {
  return (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  )
}
