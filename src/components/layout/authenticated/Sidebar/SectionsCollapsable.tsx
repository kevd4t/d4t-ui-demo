import { Badge } from '@/components/ui'
import { IconBadgeAd, IconBuildingSkyscraper, IconBusStop, IconChartDots, IconChartPie, IconDeviceMobilePin, IconHeartRateMonitor, IconHierarchy2, IconLayoutSidebarLeftCollapse, IconLayoutSidebarLeftExpand, IconLogout, IconMapPins, IconRouter, IconSettings, IconTruckDelivery, IconUser, IconUserCircle, IconUserShield, IconUsers } from '@tabler/icons-react'
import React from 'react'
import { LinkNavigation } from './LinkNavigation'
import { LinkNavigationNested } from './LinkNavigationNested'
import { ToggleTheme } from './ToggleTheme'

export const SectionsCollapsable = ({ toggleSidebar, isOpen, logout }) => {
  return (
    <>
      <section className={`flex ${!isOpen ? 'justify-center' : ''} items-center text-gray-500 capitalize`}>
        <div className={`${isOpen ? 'p-4 mr-3' : 'p-2'} border border-gray-200 shadow-sm rounded-md`}>
          <IconUser className='dark:text-white' />
        </div>

        {
          isOpen && (
            <div className='text-left'>
              <span className='dark:text-white'>Kevin Blanco</span> <br />
              <Badge color='indigo' className='rounded-md text-xs mt-1 select-none'>Administrador</Badge>
            </div>
          )
        }
      </section>

      <section className='w-full py-4 overflow-y-auto'>
        <ul className='space-y-2'>
          <li>
            <LinkNavigation
              collapsed={!isOpen}
              to='/dashboard'
              label='Dashboard'
              icon={<IconChartPie className='dark:text-white' />}
            />
          </li>

          <li>
            <LinkNavigation
              collapsed={!isOpen}
              to='/usuarios'
              label='Usuarios'
              icon={<IconUsers className='dark:text-white' />}
            />
          </li>

          <li>
            <LinkNavigationNested
              collapsed={!isOpen}
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

          <li>
            <LinkNavigation
              collapsed={!isOpen}
              to='/estaciones'
              label='Estaciones'
              icon={<IconTruckDelivery className='dark:text-white' />}
            />
          </li>

          <li>
            <LinkNavigationNested
              collapsed={!isOpen}
              label='Ajustes'
              icon={<IconSettings className='dark:text-white' />}
              subLinks={[
                {
                  label: 'Ubicaciones',
                  to: '/ajustes/ubicaciones/estados',
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
                  label: 'Choferes',
                  to: '/ajustes/choferes',
                  icon: <IconTruckDelivery className='dark:text-white' />
                },
                {
                  label: 'Flotas',
                  to: '/ajustes/flotas',
                  icon: <IconBusStop className='dark:text-white' />
                },
                {
                  label: 'Marcas de Medidores',
                  to: '/ajustes/marcas-de-medidores',
                  icon: <IconBadgeAd className='dark:text-white' />
                },
                {
                  label: 'Medidores',
                  to: '/ajustes/medidores',
                  icon: <IconRouter className='dark:text-white' />
                },
                {
                  label: 'Marcas de GPS',
                  to: '/ajustes/marcas-de-gps',
                  icon: <IconBadgeAd className='dark:text-white' />
                },
                {
                  label: 'Dispositivos GPS',
                  to: '/ajustes/dispositivos-gps',
                  icon: <IconDeviceMobilePin className='dark:text-white' />
                }
              ]}
            />
          </li>
        </ul>

        <ul className='mt-2 space-y-2'>
          <li>
            <LinkNavigation
              collapsed={!isOpen}
              to='/mi-cuenta'
              label='Mi Cuenta'
              icon={<IconUserCircle className='dark:text-white' />}
            />
          </li>

          <li>
            <LinkNavigation
              collapsed={!isOpen}
              to='/soporte-tecnico'
              label='Soporte Tecnico'
              icon={<IconUserShield className='dark:text-white' />}
            />
          </li>

          <div className='border border-slate-200 w-full'></div>

          <li>
            <ToggleTheme collapsed={!isOpen} />
          </li>

          <li>
            <button
              onClick={toggleSidebar}
              className={`w-full border-2 border-transparent flex ${!isOpen ? 'justify-center' : ''} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`}
            >
              {
                isOpen
                  ? (<IconLayoutSidebarLeftCollapse className='dark:text-white' />)
                  : (<IconLayoutSidebarLeftExpand className='dark:text-white' />)
              }

              {
                isOpen && (
                  <span className='pl-2 dark:text-white text-sm'>
                    Cerrar Menu
                  </span>
                )
              }
            </button>
          </li>

          <li>
            <button
              onClick={logout}
              className={`w-full border-2 border-transparent flex ${!isOpen ? 'justify-center' : ''} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`}
            >
              <IconLogout className='dark:text-white' />

              { isOpen && (<span className='pl-2 dark:text-white text-sm'>Cerrar Sesión</span>) }
            </button>
          </li>
        </ul>
      </section>
    </>
  )
}
