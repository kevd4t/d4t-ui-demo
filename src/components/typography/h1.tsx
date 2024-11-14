import { cn } from '../../lib/utils'

interface H1Props extends React.ComponentPropsWithoutRef<'h1'> { }

export function H1({ className, ...props }: H1Props) {
  return (
    <h1
      className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}
      {...props}
    />
  )
}
