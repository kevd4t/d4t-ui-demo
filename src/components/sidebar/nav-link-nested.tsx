'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../'
import { NavSubLink, SublinksItem } from './nav-sublink'
import { useSidebar } from './primary'
import { NavLink } from './nav-link'

type LinkNavigationNestedProps = {
  label: string
  icon?: ReactNode
  pathname: string
  Link?: any
  sublinks: SublinksItem[]
}

export const NavLinkNested = ({ label, icon, sublinks, pathname, Link }: LinkNavigationNestedProps) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [show, setShow] = useState(false)
  const { isExpanded } = useSidebar()
  const containerRef = useRef(null)
  
  const toggleShow = () => setShow(prevState => !prevState)
  const labelReplaced = label.replaceAll(' ', '_')

  useEffect(() => {
    const updateTruncationMap = () => {
      const linkElement = containerRef.current.querySelector(`#${labelReplaced}`)

      if (linkElement) {
        const labelCollapsed = linkElement.offsetWidth < linkElement.scrollWidth
        setShowTooltip(labelCollapsed)
      }
    }
  
    window.addEventListener('resize', updateTruncationMap)
    updateTruncationMap()
  
    return () => window.removeEventListener('resize', updateTruncationMap)
  }, [label])


  if (!Link) {
    return (
      <TooltipProvider delayDuration={180}>
        <div
          ref={containerRef}
          onClick={toggleShow}
          className={`cursor-pointer border-2 border-transparent flex ${isExpanded ? 'justify-start h-[42px]' : 'justify-center'} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`}
        >
          <div>{icon}</div>

          {
            (!showTooltip && isExpanded) && (
              <span
                id={labelReplaced}
                className='pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block'
              >
                {label}
              </span>
            )
          }

          {
            (showTooltip && isExpanded) && (
                <Tooltip>
                  <TooltipTrigger className='truncate'>
                    <span
                      id={labelReplaced}
                      className='pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block'
                    >
                      {label}
                    </span>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>{label}</p>
                  </TooltipContent>
                </Tooltip>
            )
          }

          {
            show
              ? (<ChevronUp className='justify-self-end dark:text-white' size={32} />)
              : (<ChevronDown className='justify-self-end dark:text-white' size={32} />)
          }
        </div>


        <ul className={`${show ? 'block' : 'hidden'} space-y-2`}>
          {
            sublinks.map(subLink => {
              return (
                <li key={ subLink.to }>
                  <NavSubLink
                    {...subLink}
                    pathname={pathname}
                    isExpanded={isExpanded}
                  />
                </li>
              )
            })
          }
        </ul>
      </TooltipProvider>
    )
  }

  return (
    <>
      <button
        onClick={toggleShow}
        type='button'
        className='h-[42px] flex justify-center items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 hover:dark:bg-main-hover select-none'
        aria-controls='dropdown-example'
        data-collapse-toggle='dropdown-example'
      >
        { icon }

        {
          !isExpanded && (
            <span className='flex-1 pl-2 text-left whitespace-nowrap dark:text-white text-sm'>
              { label }
            </span>
          )
        }

        {
          show
            ? (<ChevronUp className='dark:text-white' size={20} />)
            : (<ChevronDown className='dark:text-white' size={20} />)
        }
      </button>

      <ul className={`${show ? 'block' : 'hidden'} space-y-2`}>
        {
          sublinks.map(subLink => {
            return (
              <li key={ subLink.to }>
                <Link
                  href={subLink?.to}
                  className={
                    `h-[42px] border-2 border-transparent flex ${isExpanded ? 'justify-center' : ''} items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg ${!isExpanded ? 'pl-6' : ''} group hover:bg-gray-100 hover:dark:bg-main-hover 
                  ${pathname.startsWith(subLink.to) && 'border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover'} select-none`
                  }
                >
                  <div>{ subLink?.icon }</div>
                  {
                    !isExpanded && (<span className='pl-2 mt-0.5 dark:text-white text-sm'>{ subLink.label }</span>)
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
