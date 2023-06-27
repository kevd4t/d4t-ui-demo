import { IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

export const ToggleTheme = ({ collapsed }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <button
      onClick={toggleTheme}
      className={`w-full border-2 border-transparent flex ${collapsed ? 'justify-center' : ''} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`}
    >
      {
        theme === 'light'
          ? (
            <>
              <IconMoon className='dark:text-white' />
              {!collapsed && <span className='pl-2 dark:text-white text-sm'>Oscuro</span>}
            </>
          )
          : (
            <>
              <IconSun className='dark:text-white' />
              {!collapsed && <span className='pl-2 dark:text-white text-sm'>Claro</span>}
            </>
          )
      }
    </button>
  )
}
