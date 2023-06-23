import { IconUser, IconHeartRateMonitor, IconChartPie, IconLogout, IconUsers, IconUserCircle, IconUserShield, IconTruckDelivery, IconSun, IconMoon, IconSettings, IconBuildingSkyscraper, IconHierarchy2, IconChartDots, IconBusStop, IconBadgeAd, IconMapPins, IconDeviceMobilePin, IconLayoutSidebarLeftCollapse, IconLayoutSidebarRightExpand } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { toast } from 'sonner'
import { useState } from 'react'
// import { useTheme } from '@/lib/hooks/useTheme'

// import { handleFetchErrors } from '@/lib/utils/handleFetchErrors'
// import { getLocalStorage } from '@/lib/utils/localStorage'
// import { useDrawerStore } from '@/lib/store/Drawer'
// import { useAuthStore } from '@/lib/store/Auth'
// import { signOut } from '@/lib/services/auth'

import { LinkNavigationNested } from './LinkNavigationNested'
import { LinkNavigation } from './LinkNavigation'
import { useTheme } from 'next-themes'
import { Badge } from '@/components/ui/badge'
// import { Badge, Divider } from '@tremor/react'

export const Sidebar = () => {
  // const { removeAuth } = useAuthStore()
  const { theme, setTheme } = useTheme()
  // const [, setIsLoading] = useState(false)
  const [openSidebar, setIsOpenSidebar] = useState(true)
  // const { isOpen } = useDrawerStore()
  const router = useRouter()

  const logout = async () => {
    // setIsLoading(true)
    // const accessToken = getLocalStorage('accessToken')
    // const { error } = await signOut(accessToken)

    // if (error) {
    //   setIsLoading(false)
    //   handleFetchErrors(error.status, error.message)
    //   return
    // }

    // setIsLoading(false)
    // removeAuth()
    toast.message('Sesión Cerrada')
    router.push('/iniciar-sesion')
  }

  const toggleOpenSidebar = () => setIsOpenSidebar(prevState => !prevState)

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div
      id='drawer-navigation'
      tabIndex={-1}
      aria-labelledby='drawer-navigation-label'
      className='authLayout_sidebar bg-white dark:bg-dark'
    >
      <section className='flex justify-start items-center text-gray-500 capitalize'>
        <div className='p-4 mr-3 border border-gray-200 shadow-sm rounded-md'>
          <IconUser className='dark:text-white' />
        </div>

        <div className='text-left'>
          <span className='dark:text-white'>Kevin Blanco</span> <br />
          <Badge color='indigo' className='rounded-md text-xs mt-1 select-none'>Administrador</Badge>
        </div>
      </section>

      <section className='w-full py-4 overflow-y-auto'>
        <ul className='space-y-2'>
          <li>
            <LinkNavigation
              to='/dashboard'
              label='Dashboard'
              icon={<IconChartPie className='dark:text-white' />}
            />
          </li>

          <li>
            <LinkNavigation
              to='/usuarios'
              label='Usuarios'
              icon={<IconUsers className='dark:text-white' />}
            />
          </li>

          <li>
            <LinkNavigationNested
              label='Monitoreo'
              icon={<IconHeartRateMonitor className='dark:text-white' />}
              subLinks={[
                {
                  label: 'Rutas',
                  to: '/monitoreo/rutas',
                  icon: <IconMapPins className='dark:text-white' />
                },
                {
                  label: 'Estaciones',
                  to: '/monitoreo/estaciones',
                  icon: <IconBusStop className='dark:text-white' />
                }
              ]}
            />
          </li>

          {/* <li>
            <LinkNavigation
              to='/extraccion'
              label='Extraccion'
              icon={<IconFilter className='dark:text-white' />}
            />
          </li>

          <li>
            <LinkNavigation
              to='/surtido'
              label='Surtido'
              icon={<IconBuildingWarehouse className='dark:text-white' />}
            />
          </li>

          <li>
            <LinkNavigation
              to='/distribucion'
              label='Distribucion'
              icon={<IconTruck className='dark:text-white' />}
            />
          </li> */}

          <li>
            <LinkNavigation
              to='/estaciones'
              label='Estaciones'
              icon={<IconTruckDelivery className='dark:text-white' />}
            />
          </li>

          <li>
            <LinkNavigationNested
              label='Ajustes'
              icon={<IconSettings className='dark:text-white' />}
              subLinks={[
                {
                  label: 'Ciudades',
                  to: '/ajustes/ciudades',
                  icon: <IconBuildingSkyscraper className='dark:text-white' />
                },
                {
                  label: 'Categorias',
                  to: '/ajustes/categorias',
                  icon: <IconHierarchy2 className='dark:text-white' />
                },
                {
                  label: 'Estados',
                  to: '/ajustes/estados',
                  icon: <IconChartDots className='dark:text-white' />
                },
                {
                  label: 'Flotas',
                  to: '/ajustes/flotas',
                  icon: <IconBusStop className='dark:text-white' />
                },
                {
                  label: 'Marcas de GPS',
                  to: '/ajustes/marcas-de-gps',
                  icon: <IconBadgeAd className='dark:text-white' />
                },
                {
                  label: 'GPS',
                  to: '/ajustes/gps',
                  icon: <IconDeviceMobilePin className='dark:text-white' />
                }
              ]}
            />
          </li>
        </ul>

        {/* <Divider /> */}

        <ul className='mt-2 space-y-2'>
          <li>
            <LinkNavigation
              to='/mi-cuenta'
              label='Mi Cuenta'
              icon={<IconUserCircle className='dark:text-white' />}
            />
          </li>

          <li>
            <LinkNavigation
              to='/soporte-tecnico'
              label='Soporte Tecnico'
              icon={<IconUserShield className='dark:text-white' />}
            />
          </li>

          <div className='border border-slate-200 w-full'></div>

          <li>
            <button
              onClick={toggleTheme}
              className='w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-dark-hover select-none'
            >
              {
                theme === 'light'
                  ? (
                    <>
                      <IconMoon className='dark:text-white' />
                      <span className='pl-2 dark:text-white'>Oscuro</span>
                    </>
                  )
                  : (
                    <>
                      <IconSun className='dark:text-white' />
                      <span className='pl-2 dark:text-white'>Claro</span>
                    </>
                  )
              }
            </button>
          </li>

          <li>
            <button
              onClick={toggleOpenSidebar}
              className='w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-dark-hover select-none'
            >
              {
                openSidebar
                  ? (<IconLayoutSidebarLeftCollapse className='dark:text-white' />)
                  : (<IconLayoutSidebarRightExpand className='dark:text-white' />)
              }

              <span className='pl-2 dark:text-white'>
                { openSidebar ? 'Cerrar Menu' : 'Abrir Menu' }
              </span>
            </button>
          </li>

          <li>
            <button
              onClick={logout}
              className='w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-dark-hover select-none'
            >
              <IconLogout className='dark:text-white' />
              <span className='pl-2 dark:text-white'>Cerrar Sesión</span>
            </button>
          </li>
        </ul>
      </section>
    </div>
  )
}
