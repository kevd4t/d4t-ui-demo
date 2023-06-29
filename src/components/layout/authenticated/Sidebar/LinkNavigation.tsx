import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Link from 'next/link'
import { TModuleRoutes } from '@/lib/types/module-routes'

type LinkNavigationProps = {
  to: TModuleRoutes
  label: string
  icon?: ReactNode
  onClick?: () => void
  collapsed?: boolean
}

export const LinkNavigation = ({ to, label, icon, onClick, collapsed }: LinkNavigationProps) => {
  const router = useRouter()

  return (
    <Link
      onClick={onClick}
      href={`${to}`}
      className={
        `border-2 border-transparent flex ${collapsed ? 'justify-center' : ''} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
      ${router.pathname.startsWith(to) && 'border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover'} select-none`
      }
    >
      <div>{icon}</div>

      { !collapsed && (<span className='pl-2 mt-0.5 dark:text-white text-sm'>{label}</span>) }
    </Link>
  )
}
