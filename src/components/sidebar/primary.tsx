'use client'

import { useState } from 'react'

import { cn } from '../../lib/utils'
import { ScrollArea } from '../'
import { SidebarHeader, SidebarProfile } from './header'
import { SidebarFooter } from './footer'

interface SidebarProps  extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
  profile?: SidebarProfile
  logout?: () => void
}

export const Sidebar = ({ children, className, profile, logout }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleSidebar = () => setIsExpanded(!isExpanded)

  return (
    <aside
      tabIndex={-1}
      className={cn('sidebar bg-main dark:border-transparent', className)}
    >
      <ScrollArea className='w-full h-full p-4'>
        {/* <div className='grid grid-rows-[10%_70%_20%] h-full'> */}
          <SidebarHeader profile={profile} />

          {children}

          <SidebarFooter
            logout={logout}
            toggleSidebar={toggleSidebar}
            isExpanded={isExpanded}
          />
        {/* </div> */}
      </ScrollArea>
    </aside>
  )
}
