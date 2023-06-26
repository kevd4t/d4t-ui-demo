import { IconMoon, IconSun } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui'

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Select value={theme} defaultValue={theme} onValueChange={setTheme}>
      <SelectTrigger className='w-[190px]'>
        <SelectValue placeholder='Seleccione un Tema' />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value='light'>
          <div className='flex justify-center items-center'>
            <IconSun className='dark:text-white mr-2 h-5' />
              Modo Claro
          </div>
        </SelectItem>

        <SelectItem value='dark'>
          <div className='flex justify-center items-center'>
            <IconMoon className='dark:text-white mr-2 h-5' />
            Modo Oscuro
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
