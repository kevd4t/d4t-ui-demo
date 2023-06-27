import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Link from 'next/link'
import { TModuleRoutes } from '@/lib/types/routes'

type LinkNavigationProps = {
  to: TModuleRoutes
  label: string
  icon?: ReactNode
  onClick?: () => void
}

export const LinkNavigation = ({ to, label, icon, onClick }: LinkNavigationProps) => {
  const router = useRouter()

  return (
    <Link
      onClick={onClick}
      href={`${to}`}
      className={
        `border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-dark-hover 
      ${router.pathname.startsWith(to) && 'border-2 border-gray-400 bg-gray-100 dark:border-dark dark:bg-dark-hover'} select-none`
      }
    >
      <div>{icon}</div>
      <span className='pl-2 mt-0.5 dark:text-white text-sm'>{label}</span>
    </Link>
  )
}
