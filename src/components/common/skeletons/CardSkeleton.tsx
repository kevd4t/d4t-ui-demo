import type { HTMLAttributes } from 'react'

import { Card, CardContent, CardHeader, Skeleton } from '@/components/ui'
import { cn } from '@/lib/utils'

interface CardSkeletonProps extends HTMLAttributes<HTMLDivElement> {
  image?: boolean
}

export const CardSkeleton = ({ className, image = true }: CardSkeletonProps) => {
  return (
    <Card className={cn('w-full max-w-xs', className)}>
      <CardHeader>
        <section className='flex w-full justify-between items-end'>
          <Skeleton className='w-36 h-[18px]' />

          <Skeleton className='w-16 h-5 mt-2' />
        </section>

        <Skeleton className='w-full h-4'/>
      </CardHeader>

      <CardContent className='space-y-5'>
        {
          image && (
            <div className='w-full rounded-md p-4 bg-gray-100 dark:bg-slate-50 dark:bg-opacity-5'>
              <Skeleton
                className='mx-auto rounded-md w-[100px] h-[100px]'
              />
            </div>
          )
        }

        <Skeleton className='w-full h-10' />
      </CardContent>
    </Card>
  )
}
