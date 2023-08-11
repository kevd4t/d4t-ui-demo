import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../'

export interface SublinksItem {
  to: string
  label: string
  icon?: ReactNode
}

interface NavSubLinkProps extends SublinksItem {
  isExpanded: boolean
  Link?: any
  pathname: string
}

export const NavSubLink = ({ isExpanded, pathname, to, icon, label, Link }: NavSubLinkProps) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const containerRef = useRef(null)
 
  useEffect(() => { 
    const updateTruncationMap = () => {
      const linkElement = containerRef.current.querySelector(`#${to.replaceAll('/', '_')}`)

      if (linkElement) {
        const labelCollapsed = linkElement.offsetWidth < linkElement.scrollWidth
        setShowTooltip(labelCollapsed)
      }
    }
  
    window.addEventListener('resize', updateTruncationMap)
    updateTruncationMap()
  
    return () => window.removeEventListener('resize', updateTruncationMap)
  }, [to])

  if (!Link) {
    return (
      <TooltipProvider delayDuration={180}>
        <div
          ref={containerRef}
          className={
            `pl-4 cursor-pointer border-2 border-transparent flex ${isExpanded ? 'justify-start h-[42px]' : 'justify-center'} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
          ${pathname.startsWith(to) && 'border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover'} select-none`
          }
        >
          <div>{icon}</div>

          {
            (!showTooltip && isExpanded) && (
              <span
                id={to.replaceAll('/', '_')}
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
                      id={to.replaceAll('/', '_')}
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
        </div>
      </TooltipProvider>
    )
  }
}