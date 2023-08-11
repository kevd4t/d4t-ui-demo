'use client'

import { Moon, Sun } from 'lucide-react'

export interface SidebarTheme {
  toggleTheme: () => void
  value: 'dark' | 'light' | string
}


interface ToggleThemeProps {
  isExpanded: boolean
  theme: SidebarTheme
}

export const ToggleTheme = ({ isExpanded, theme }: ToggleThemeProps) => {
  return (
    <button
      onClick={theme.toggleTheme}
      className={`w-full border-2 border-transparent flex ${isExpanded ? 'justify-center' : ''} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`}
    >
      {
        theme.value === 'light'
          ? (
            <>
              <Moon className='dark:text-white' />
              {!isExpanded && <span className='pl-2 dark:text-white text-sm'>Oscuro</span>}
            </>
          )
          : (
            <>
              <Sun className='dark:text-white' />
              {!isExpanded && <span className='pl-2 dark:text-white text-sm'>Claro</span>}
            </>
          )
      }
    </button>
  )
}
