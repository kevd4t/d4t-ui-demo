import { cn } from '../../lib/utils'

interface LeadProps extends React.ComponentPropsWithoutRef<'p'> { }

export function TypographyLead({ className, ...props }: LeadProps) {
  return (
    <p
      className={cn('text-xl text-muted-foreground', className)}
      {...props}
    />
  )
}
