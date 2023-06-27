import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { ReactNode, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { TModuleRoutes } from '@/lib/types/module-routes'

type LinkNavigationNestedProps = {
  label: string
  icon?: ReactNode
  onClick?: () => void
  subLinks: {
    to: TModuleRoutes
    label: string
    icon?: ReactNode
  }[]
  collapsed?: boolean
}

export const LinkNavigationNested = ({ label, icon, subLinks, onClick, collapsed }: LinkNavigationNestedProps) => {
  const [show, setShow] = useState(false)
  const router = useRouter()

  const toggleShow = () => setShow(prevState => !prevState)

  return (
    <>
      <button
        onClick={toggleShow}
        type='button'
        className='flex justify-center items-center w-full p-3 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 hover:dark:bg-main-hover select-none'
        aria-controls='dropdown-example'
        data-collapse-toggle='dropdown-example'
      >
        {icon}

        {
          !collapsed && (<span className='flex-1 ml-3 text-left whitespace-nowrap dark:text-white text-sm'>{ label }</span>)
        }

        {
          show
            ? (<IconChevronUp />)
            : (<IconChevronDown />)
        }

      </button>

      <ul id='dropdown-example' className={`${show ? 'block' : 'hidden'} py-2 space-y-2`}>
        {
          subLinks.map(subLink => {
            return (
              <li key={ subLink.to }>
                <Link
                  onClick={onClick}
                  href={ subLink.to }
                  className={
                    `border-2 border-transparent flex ${collapsed ? 'justify-center' : ''} items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg ${!collapsed ? 'pl-6' : ''} group hover:bg-gray-100 hover:dark:bg-main-hover 
                  ${router.pathname.startsWith(subLink.to) && 'border-2 border-gray-400 bg-gray-100 dark:border-dark dark:bg-main-hover'} select-none`
                  }
                >
                  <div>{ subLink?.icon }</div>
                  {
                    !collapsed && (<span className='pl-2 mt-0.5 dark:text-white text-sm'>{ subLink.label }</span>)
                  }
                </Link>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}
