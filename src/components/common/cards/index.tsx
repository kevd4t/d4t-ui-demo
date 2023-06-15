import { CardUI } from '@/components/ui'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <CardUI className={`p-4 ${className}`} {...rest}>
      { children }
    </CardUI>
  )
}
