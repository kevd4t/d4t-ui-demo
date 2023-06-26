import { IconUser, IconSettings, IconMapPins, IconBusStop, IconChartDots, IconHierarchy2, IconBadgeAd, IconDeviceMobilePin, IconUserShield } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandList, CommandSeparator } from '@/components/ui/command'
import { GlobalCommandItem, GlobalCommandItemProps } from './Item'

interface CommandsItem {
  mainModules: {
    heading: string
    data: GlobalCommandItemProps[]
  }

  actionsToCreate: {
    heading: string
    data: GlobalCommandItemProps[]
  }

  settings: {
    heading: string
    data: GlobalCommandItemProps[]
  }
}

export function GlobalCommandMenu () {
  const [open, setOpen] = useState(false)

  const closeGlobalCommandMenuDialog = () => setOpen(false)

  // const handleKeyEnter = (event: KeyboardEvent) => {
  //   if (event.key === 'Enter') {
  //     event.preventDefault()
  //     router.push()
  //   }
  // }

  // useEffect(() => {
  //   const handleGlobalShortcuts = (event: KeyboardEvent) => {
  //     if (event.key === 'r') {
  //       if (open === false) {
  //         event.preventDefault()
  //         router.push('/monitoreo/rutas')
  //       }
  //     }

  //     if (event.key === 'e') {
  //       if (open === false) {
  //         event.preventDefault()
  //         router.push('/monitoreo/estaciones')
  //       }
  //     }

  //     if (event.key === 's') {
  //       if (open === false) {
  //         event.preventDefault()
  //         router.push('/ajustes/estados/crear')
  //       }
  //     }

  //     if (event.key === 'c') {
  //       if (open === false) {
  //         event.preventDefault()
  //         router.push('/ajustes/categorias/crear')
  //       }
  //     }

  //     if (event.key === 'f') {
  //       if (open === false) {
  //         event.preventDefault()
  //         router.push('/ajustes/flotas/crear')
  //       }
  //     }

  //     if (event.key === 'm') {
  //       if (open === false) {
  //         event.preventDefault()
  //         router.push('/ajustes/marcas-de-gps/crear')
  //       }
  //     }

  //     if (event.key === 'g') {
  //       if (open === false) {
  //         event.preventDefault()
  //         router.push('/ajustes/gps/crear')
  //       }
  //     }
  //   }

  //   document.addEventListener('keydown', handleGlobalShortcuts)
  //   return () => document.removeEventListener('keydown', handleGlobalShortcuts)
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [open])

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const commandItemsGroups: CommandsItem = {
    mainModules: {
      heading: 'Modulos Principales',
      data: [
        {
          title: 'Monitoreo de Rutas',
          icon: <IconMapPins className='mr-2 h-4 w-4' />,
          closeGlobalCommandMenuDialog,
          value: 'MONITORING_ROUTES',
          link: '/monitoreo/rutas'
        },
        {
          title: 'Monitoreo de Estaciones',
          icon: <IconBusStop className='mr-2 h-4 w-4' />,
          closeGlobalCommandMenuDialog,
          value: 'MONITORING_STATIONS',
          link: '/monitoreo/estaciones'
        }
      ]
    },

    actionsToCreate: {
      heading: 'Acciones de Creacion',
      data: [
        {
          title: 'Crear Estados',
          icon: <IconChartDots className='mr-2 h-4 w-4' />,
          closeGlobalCommandMenuDialog,
          value: 'CREATE_STATES',
          link: '/ajustes/estados/crear'
        },
        {
          title: 'Crear Categorias',
          icon: <IconHierarchy2 className='mr-2 h-4 w-4' />,
          closeGlobalCommandMenuDialog,
          value: 'CREATE_CATEGORY',
          link: '/ajustes/categorias/crear'
        },
        {
          title: 'Crear Flotas',
          icon: <IconBusStop className='mr-2 h-4 w-4' />,
          closeGlobalCommandMenuDialog,
          value: 'CREATE_FLEETS',
          link: '/ajustes/flotas/crear'
        },
        {
          title: 'Crear Marcas de GPS',
          icon: <IconBadgeAd className='mr-2 h-4 w-4' />,
          closeGlobalCommandMenuDialog,
          value: 'CREATE_GPS_MARKS',
          link: '/ajustes/marcas-de-gps/crear'
        },
        {
          title: 'Crear Dispositivo de GPS',
          icon: <IconDeviceMobilePin className='mr-2 h-4 w-4' />,
          closeGlobalCommandMenuDialog,
          value: 'CREATE_GPS_DEVICE',
          link: '/ajustes/dispositivos-gps/crear'
        }
      ]
    },

    settings: {
      heading: 'Configuracion',
      data: [
        {
          title: 'Mi Cuenta',
          icon: <IconUser className='mr-2 h-4 w-4' />,
          closeGlobalCommandMenuDialog,
          value: 'MY_ACCOUNT',
          link: '/mi-cuenta'
        },
        {
          title: 'Preferencias',
          icon: <IconSettings className='mr-2 h-4 w-4' />,
          closeGlobalCommandMenuDialog,
          value: 'PREFERENCES'
        },
        {
          title: 'Soporte Tecnico',
          icon: <IconUserShield className='mr-2 h-4 w-4' />,
          closeGlobalCommandMenuDialog,
          value: 'TECHNICAL_SUPPORT',
          link: '/soporte-tecnico'
        }
      ]
    }
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Command className='rounded-lg border shadow-md'>
        <CommandInput placeholder='Buscar atajo' />

        <CommandList>
          <CommandEmpty>Sin Resultados</CommandEmpty>

          <CommandGroup heading={commandItemsGroups.mainModules.heading} onKeyDown={(key) => console.log('key', key.target)}>
            {
              commandItemsGroups.mainModules.data.map(itemCommands =>
                <GlobalCommandItem
                  key={itemCommands.value}
                  value={itemCommands.value}
                  closeGlobalCommandMenuDialog={itemCommands.closeGlobalCommandMenuDialog}
                  title={itemCommands.title}
                  icon={itemCommands.icon}
                  commandKey={itemCommands.commandKey}
                  link={itemCommands.link}
                />
              )
            }
          </CommandGroup>

          <div className='w-full px-4'>
            <CommandSeparator />
          </div>

          <CommandGroup heading={commandItemsGroups.actionsToCreate.heading}>
            {
              commandItemsGroups.actionsToCreate.data.map(itemCommands =>
                <GlobalCommandItem
                  key={itemCommands.value}
                  value={itemCommands.value}
                  closeGlobalCommandMenuDialog={itemCommands.closeGlobalCommandMenuDialog}
                  title={itemCommands.title}
                  icon={itemCommands.icon}
                  commandKey={itemCommands.commandKey}
                  link={itemCommands.link}
                />
              )
            }
          </CommandGroup>

          <div className='w-full px-4'>
            <CommandSeparator />
          </div>

          <CommandGroup heading={commandItemsGroups.settings.heading}>
            {
              commandItemsGroups.settings.data.map(itemCommands =>
                <GlobalCommandItem
                  key={itemCommands.value}
                  value={itemCommands.value}
                  closeGlobalCommandMenuDialog={itemCommands.closeGlobalCommandMenuDialog}
                  title={itemCommands.title}
                  icon={itemCommands.icon}
                  commandKey={itemCommands.commandKey}
                  link={itemCommands.link}
                />
              )
            }
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  )
}
