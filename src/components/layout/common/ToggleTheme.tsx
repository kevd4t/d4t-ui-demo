import { useTheme } from 'next-themes'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui'
import { IconDeviceDesktop, IconMoon, IconSun } from '@tabler/icons-react'

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()

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

        <SelectItem value='system'>
          <div className='flex justify-center items-center'>
            <IconDeviceDesktop className='dark:text-white mr-2 h-5' />
            Tema del Sistema
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
