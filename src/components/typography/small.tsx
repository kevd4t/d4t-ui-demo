import { cn } from '../../lib/utils'

interface SmallProps extends React.ComponentPropsWithoutRef<'small'> { }

export function Small({ className, ...props }: SmallProps) {
  return (
    <small
      className={cn('text-sm font-medium leading-none', className)}
      {...props}
    />
  )
}
