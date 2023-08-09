'use client'

import { LogOut, SidebarClose, SidebarOpen } from "lucide-react"
import { ToggleTheme } from "./toggle-theme"

interface SidebarFooterProps {
  logout: () => void
  isExpanded: boolean
  toggleSidebar: () => void
}

export const SidebarFooter = ({ logout, isExpanded, toggleSidebar }: SidebarFooterProps) => {
  return (
    <section>
      <ul className='mt-2 space-y-2'>
        <li>
          <ToggleTheme collapsed={!isExpanded} />
        </li>

        <li>
          <button
            onClick={toggleSidebar}
            className={`w-full border-2 border-transparent flex ${!isExpanded ? 'justify-center' : ''} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`}
          >
            {
              isExpanded
                ? (<SidebarClose className='dark:text-white' />)
                : (<SidebarOpen className='dark:text-white' />)
            }

            {
              isExpanded && (
                <span className='pl-2 dark:text-white text-sm'>
                  Cerrar Menu
                </span>
              )
            }
          </button>
        </li>

        <li>
          {
            logout && (
              <button
                onClick={logout}
                className={`w-full border-2 border-transparent flex ${!isExpanded ? 'justify-center' : ''} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`}
              >
                <LogOut className='dark:text-white' />

                { isExpanded && (<span className='pl-2 dark:text-white text-sm'>Cerrar Sesión</span>) }
              </button>
            )
          }
        </li>
      </ul>
    </section>
  )
}
