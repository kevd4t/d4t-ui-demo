import { ReactNode, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { TModuleRoutes } from '@/lib/types/routes'

type LinkNavigationNestedProps = {
  label: string
  icon?: ReactNode
  onClick?: () => void
  subLinks: {
    to: TModuleRoutes
    label: string
    icon?: ReactNode
}[]
}

export const LinkNavigationNested = ({ label, icon, subLinks, onClick }: LinkNavigationNestedProps) => {
  const [show, setShow] = useState(false)
  const router = useRouter()

  const toggleShow = () => setShow(prevState => !prevState)

  return (
    <>
      <button
        onClick={toggleShow}
        type='button'
        className='flex items-center w-full p-3 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 hover:dark:bg-dark-hover select-none'
        aria-controls='dropdown-example'
        data-collapse-toggle='dropdown-example'
      >
        {icon}
        <span className='flex-1 ml-3 text-left whitespace-nowrap dark:text-white'>{ label }</span>
        <svg className='w-6 h-6 dark:text-white' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
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
                    `border-2 border-transparent flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-6 group hover:bg-gray-100 hover:dark:bg-dark-hover 
                  ${router.pathname.startsWith(subLink.to) && 'border-2 border-gray-400 bg-gray-100 dark:border-dark dark:bg-dark-hover'} select-none`
                  }
                >
                  <div>{ subLink?.icon }</div>
                  <span className='pl-2 mt-0.5 dark:text-white'>{ subLink.label }</span>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}
