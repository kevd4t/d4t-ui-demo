import { Badge, BarChart, Building, DivideCircle, HelpCircle, LucideTruck, Router, Settings, StopCircle, Truck, User } from 'lucide-react'

import { SidebarContent } from './components/sidebar/content'
import { NavLink } from './components/sidebar/nav-link'
import { AppLayout } from './layouts/Application'
import { FormLogin } from './examples/FormLogin'
import { NavLinkNested, Sidebar } from './components/sidebar'
import { Table } from './components/data-table/GenericTable'
import { useState } from 'react'
import { PaginationState } from '@tanstack/react-table'
import { getStatusColumns } from './status-table'

function App() {
  const profile = {role: 'Administrador', name: 'Kevin', lastname: 'blanco' }
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Estados', singularItem: 'Estado' }
  }


  return (
    <AppLayout>
      <Sidebar
        logout={() => {}}
        profile={profile}
        theme={{ toggleTheme: () => {}, value: 'dark' }}
      >
        <SidebarContent>
          <NavLink
            to='/asd'
            pathname='/asd'
            label='Esto es un label muy largo asi que se va a cortar'
            icon={<Settings className='dark:text-white' size={20} />}
          />

          <NavLinkNested
            pathname='/fino'
            label='Todo bien mi compa todo finoo aaaaa'
            icon={<Settings className='dark:text-white' size={20} />}
            sublinks={[
              {
                label: 'Ajaaaaa aaaaaaa aaaaa aaaaaaaaaaaaa asd asfsdf sdf sdgfds',
                to: '/fino',
                icon: <User className='dark:text-white' />
              },
              {
                label: 'ecole x 2',
                to: '/ecole',
                icon: <User className='dark:text-white' />
              },
              {
                label: 'ecole x 3',
                to: '/ecol3',
                icon: <User className='dark:text-white' />
              },
              {
                label: 'ecole x 4',
                to: '/ecol4',
                icon: <User className='dark:text-white' />
              },
              {
                label: 'ecole x 5',
                to: '/ecol5',
                icon: <User className='dark:text-white' />
              },
            ]}
          />

         <NavLink
            to='/ja'
            pathname='/'
            label='Eventos'
            icon={<Settings className='dark:text-white' size={20} />}
          />

          <NavLink
            to='/xd'
            pathname='/'
            label='Lo que sea'
            icon={<Settings className='dark:text-white' size={20} />}
          />

          
          <NavLink
            to='/xd2'
            pathname='/'
            label='Lo que sea2'
            icon={<Settings className='dark:text-white' size={20} />}
          />

          <NavLinkNested
            pathname='/fino'
            label='Epa'
            icon={<Settings className='dark:text-white' size={20} />}
            sublinks={[
              {
                label: 'Aja',
                to: '/fino',
                icon: <User className='dark:text-white' />
              },
              {
                label: 'ecole x 2',
                to: '/ecole',
                icon: <User className='dark:text-white' />
              },
              {
                label: 'ecole x 3',
                to: '/ecol3',
                icon: <User className='dark:text-white' />
              },
              {
                label: 'ecole x 4',
                to: '/ecol4',
                icon: <User className='dark:text-white' />
              },
              {
                label: 'ecole x 5',
                to: '/ecol5',
                icon: <User className='dark:text-white' />
              },
            ]}
          />
          <NavLink
            to='/xd3'
            pathname='/'
            label='Lo que sea3'
            icon={<Settings className='dark:text-white' size={20} />}
          />

          <NavLinkNested
            label='Ajustes'
            pathname='/'
            icon={<Settings className='dark:text-white' size={20} />}
            sublinks={[
              {
                label: 'Ubicaciones',
                to: '/ajustes/ubicaciones/estados',
                icon: <Building className='dark:text-white' size={20} />
              },
              {
                label: 'Categorias',
                to: '/ajustes/categorias',
                icon: <HelpCircle className='dark:text-white' size={20} />
              },
              {
                label: 'Estados',
                to: '/ajustes/estados',
                icon: <BarChart className='dark:text-white' size={20} />
              },
              {
                label: 'Choferes',
                to: '/ajustes/choferes',
                icon: <Truck className='dark:text-white' size={20} />
              },
              {
                label: 'Flotas',
                to: '/ajustes/flotas',
                icon: <StopCircle className='dark:text-white' size={20} />
              },
              {
                label: 'Marcas de Medidores',
                to: '/ajustes/marcas-de-medidores',
                icon: <Badge className='dark:text-white' size={20} />
              },
              {
                label: 'Medidores',
                to: '/ajustes/medidores',
                icon: <Router className='dark:text-white' size={20} />
              },
              {
                label: 'Marcas de GPS',
                to: '/ajustes/marcas-de-gps',
                icon: <LucideTruck className='dark:text-white' size={20} />
              },
              {
                label: 'Dispositivos GPS',
                to: '/ajustes/dispositivos-gps',
                icon: <DivideCircle className='dark:text-white' size={20} />
              }
            ]}
          />

          <NavLink
            to='/almacenamiento'
            pathname='/'
            label='Almacenamiento'
            icon={<Settings className='dark:text-white' size={20} />}
          /> 
        </SidebarContent>
      </Sidebar>

      <div>
        <FormLogin />

        <Table
          visibilityColumns
          pagination={pagination}
          data={[
            {
              id: 345,
              title: 'Epale',
              color: '#eeeeee',
              description: 'Descripcion',
              isActive: true
            }
          ]}
          queryInfo={{ error: null, isFetching: false }}
          columns={getStatusColumns({ selection: false, actions: { detail: true } })}
        />
      </div>
    </AppLayout>
  )
}

export default App
