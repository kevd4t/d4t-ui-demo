import { AppLayout } from './layouts/Application';
import {
  D4TTable,
  GenericSelect,
  ITableColumn,
  ITablePagination,
  ITableSubmit,
  Form,
  BottomNavigation,
  Sidebar,
  SidebarContent,
  NavLink,
  NavLinkNested,
  Input,
  Button,
  IUploadImage,
  MultipleImages,
  Card,
  CardContent,
  CardHeader,
  D4TCardsList,
  IListColumn,
  ComboxCheckbox
} from './components';
import { useState } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';
import { Badge, BarChart, Building, DivideCircle, HelpCircle, LucideTruck, Router, Settings, StopCircle, Truck, User } from 'lucide-react';
import { ThemeProvider, useTheme } from 'next-themes';
import FileResizer from 'react-image-file-resizer';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface ITank {
  id: string;
  name: string;
  fuelLevel: number
}
export enum Hydrocarbon {
  Diesel = 'DIESEL',
  Gas = 'GAS',
  Gasoline = 'GASOLINE'
}
export const HydrocarbonSchema = z.nativeEnum(Hydrocarbon)

export const isFormEdited = (form: UseFormReturn<any, any, any>) => Boolean(!Object.entries(form.formState.dirtyFields).length)
const fuelSchema = z.object({
  fuel: z.array(HydrocarbonSchema),
})

function App() {
  const profile = { role: 'Administrador', name: 'Kevin', lastname: 'blanco', photo: 'https://www.hmiscfl.org/wp-content/uploads/2018/06/generic-person-icon-14.png' };
  const sections = [
    {
      titleDescription: 'Users',
      path: '/users',
      icon: <User />,
    },
    {
      titleDescription: 'Router',
      path: '/routes',
      icon: <Router />,
    },
    {
      titleDescription: 'Tracking',
      path: '/tracking',
      icon: <Truck />,
    },
    {
      titleDescription: 'Analytics',
      path: '/anaytics',
      icon: <Truck />,
    },
  ];

  const data = [
    {
      id: '234',
      name: 'Kevin',
    },
    {
      id: '235',
      name: 'Cristian',
    },
    {
      id: '236',
      name: 'Shamael',
    },
    {
      id: '237',
      name: 'Jose',
    },
    {
      id: '238',
      name: 'Ronald',
    },
    {
      id: '239',
      name: 'Jorge',
    },
    {
      id: '240',
      name: 'Jesus',
    },
    {
      id: '241',
      name: 'Nancy',
    },
  ];

  const dataFromBack: ITank[] = [
    {
      id: '3434',
      fuelLevel: 334,
      name: 'Tank 10999'
    },
    {
      id: '3434',
      fuelLevel: 34,
      name: 'Tan99'
    }, {
      id: '3434',
      fuelLevel: 4,
      name: 'PDV 10999'
    }, {
      id: '3434',
      fuelLevel: 3,
      name: 'Tank 10999',
    },

  ]

  const dataCardsColumns: IListColumn<ITank>[] = [
    {
      id: 'label',
      value: 'Mi Card',
      label: 'hello'
    },
    {
      id: 'description',
      value: 'the description',
      label: 'Nombre',
      filters: [{
        id: 'name',
        label: 'name',
        value: 'Kevin',
      }],
      isQuery: true
    },
    {
      id: 'content',
      value: 'Mi Card',
      label: 'hello',
      render: (tank) => (
        <CardContent>
          <CardHeader>Tank name: {tank.name}</CardHeader>
          <CardContent>
            <p>Fuel level: {tank.fuelLevel} L</p>
          </CardContent>
        </CardContent>
      )
    },
  ];

  const dataTableColumns: ITableColumn<ITank>[] = [
    {
      id: 'id',
      label: 'ID'
    },
    {
      id: 'name',
      label: 'Nombre',
      filters: [{
        id: 'name',
        label: 'name',
        value: 'Kevin',
      }],
      isQuery: true
    },
  ];

  const dataPagination: ITablePagination = {
    limit: 5,
    page: 1,
    labels: { plural: 'Items', single: 'Item' },
    hasPrevPage: false,
    hasNextPage: false,
  };
  const onSubmitTable: ITableSubmit = async ({ queries, filters, page, limit }) => {
    console.log({ queries, filters, page, limit })
  };

  const [uploadImages, setUploadImages] = useState<IUploadImage[]>([]);
  const [itemsOfMultiSel, setItemsOfMultisel] = useState([]);
  const { theme, setTheme } = useTheme()
  const probeForm = useForm<any, any, any>()

  const comboxForm = useForm<{ fuel: Hydrocarbon[] }>({
    defaultValues: { fuel: [HydrocarbonSchema.enum.Gasoline] },
    resolver: zodResolver(fuelSchema)
  })

  const toggleThemeFunc = () => {
    console.log(theme)
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const FUELS = [
    { id: 'Gasolina', label: 'Gasolina', value: Hydrocarbon.Gasoline },
    { id: 'Diesel', label: 'Diesel', value: Hydrocarbon.Diesel },
    { id: 'Gas', label: 'Gas', value: Hydrocarbon.Gas }
  ]

  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      <AppLayout>
        {/* Sidebar */}
        <Sidebar
          logout={() => { }}
          profile={profile}
          theme={{ toggleTheme: () => toggleThemeFunc(), value: theme }}
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
                  label:
                    'Ajaaaaa aaaaaaa aaaaa aaaaaaaaaaaaa asd asfsdf sdf sdgfds',
                  to: '/fino',
                  icon: <User className='dark:text-white' />,
                },
                {
                  label: 'ecole x 2',
                  to: '/ecole',
                  icon: <User className='dark:text-white' />,
                },
                {
                  label: 'ecole x 3',
                  to: '/ecol3',
                  icon: <User className='dark:text-white' />,
                },
                {
                  label: 'ecole x 4',
                  to: '/ecol4',
                  icon: <User className='dark:text-white' />,
                },
                {
                  label: 'ecole x 5',
                  to: '/ecol5',
                  icon: <User className='dark:text-white' />,
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
                  icon: <User className='dark:text-white' />,
                },
                {
                  label: 'ecole x 2',
                  to: '/ecole',
                  icon: <User className='dark:text-white' />,
                },
                {
                  label: 'ecole x 3',
                  to: '/ecol3',
                  icon: <User className='dark:text-white' />,
                },
                {
                  label: 'ecole x 4',
                  to: '/ecol4',
                  icon: <User className='dark:text-white' />,
                },
                {
                  label: 'ecole x 5',
                  to: '/ecol5',
                  icon: <User className='dark:text-white' />,
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
                  icon: <Building className='dark:text-white' size={20} />,
                },
                {
                  label: 'Categorias',
                  to: '/ajustes/categorias',
                  icon: <HelpCircle className='dark:text-white' size={20} />,
                },
                {
                  label: 'Estados',
                  to: '/ajustes/estados',
                  icon: <BarChart className='dark:text-white' size={20} />,
                },
                {
                  label: 'Choferes',
                  to: '/ajustes/choferes',
                  icon: <Truck className='dark:text-white' size={20} />,
                },
                {
                  label: 'Flotas',
                  to: '/ajustes/flotas',
                  icon: <StopCircle className='dark:text-white' size={20} />,
                },
                {
                  label: 'Marcas de Medidores',
                  to: '/ajustes/marcas-de-medidores',
                  icon: <Badge className='dark:text-white' size={20} />,
                },
                {
                  label: 'Medidores',
                  to: '/ajustes/medidores',
                  icon: <Router className='dark:text-white' size={20} />,
                },
                {
                  label: 'Marcas de GPS',
                  to: '/ajustes/marcas-de-gps',
                  icon: <LucideTruck className='dark:text-white' size={20} />,
                },
                {
                  label: 'Dispositivos GPS',
                  to: '/ajustes/dispositivos-gps',
                  icon: <DivideCircle className='dark:text-white' size={20} />,
                },
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
        <div className='grid'>
          <div className='grid grid-cols-2'>
            {/* Table */}
            <div className='m-10 max-w-4xl'>
              {/* <D4TTable
              data={data}
              onSubmitTable={onSubmitTable}
              pagination={dataPagination}
              columns={dataColumns}
              error={false}
              loading={false}
              limitOfMultiSelect={4}
              multiItemsSelected={itemsOfMultiSel}
              setMultiItemsSelected={setItemsOfMultisel}
            /> */}
            </div>

            {/* Forms */}
            {/* <div className='m-10'>
              <Form {...probeForm}>
                <GenericSelect
                  form={probeForm}
                  id='input'
                  placeholder='Selecciona'
                  classNameGroup=''
                  items={[]}
                />

                <Input
                  form={probeForm}
                  placeholder='Generic input'
                  id='inputText'
                  type='text'
                />

                <Button className='m-5 bg-brand-primary hover:bg-brand-primary-opaque'>This is a primary button</Button>
              </Form>
            </div> */}

            <div>
              Watch: { JSON.stringify(comboxForm.watch(), null, 2) } <br />
              DirtyFields { JSON.stringify(comboxForm.formState.dirtyFields) } <br />
              isDirty { JSON.stringify(comboxForm.formState.isDirty) } <br />
              <Form {...comboxForm}>
                <form>
                  <ComboxCheckbox
                    form={comboxForm}
                    id='fuel'
                    tabIndex={2}
                    label='Combustible'
                    options={FUELS}
                  />

                  <Button
                    type='submit'
                    tabIndex={16}
                    className='w-full py-2 text-sm'
                    disabled={isFormEdited(comboxForm)}
                    onClick={comboxForm.handleSubmit((data) => console.log({ data }))}
                  >
                    Editar Camión
                  </Button>
                </form>
              </Form>
            </div>

            {/* Images */}
            <div className='m-10'>
              <Card>
                <CardContent>
                  <MultipleImages
                    label='Multi upload images'
                    uploadLabel='upload'
                    setUploadImages={setUploadImages}
                    limit={1}
                    compress={{
                      openComparisons: () => { },
                      resizer: FileResizer,
                    }}
                  // initialPreview={[
                  //   {
                  //     data_url:
                  //       'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
                  //   },
                  // ]}
                  />

                </CardContent>
              </Card>
            </div>
          </div>

          <div>
          <MultipleImages
              limit={10}
              zoom
              compress={{ resizer: FileResizer }}
              setUploadImages={setUploadImages}
              initialPreview={[
                {
                  data_url: 'https://unavatar.io/github/ipacs13'
                }
              ]}
            />
          </div>

          {/* Cards list */}
          <div className='grid grid-cols-1 mb-10'>
            <D4TTable
              data={dataFromBack}
              onSubmitTable={onSubmitTable}
              pagination={dataPagination}
              columns={dataTableColumns}
              error={false}
              loading={false}
              limitOfMultiSelect={4}
              multiItemsSelected={itemsOfMultiSel}
              setMultiItemsSelected={setItemsOfMultisel}
            />
          </div>
        </div>


        {/* Bottom navigation */}
        <>
          <BottomNavigation
            Link={null}
            sidebar={{
              logout: () => { },
              profile,
              theme: { toggleTheme: () => { toggleThemeFunc() }, value: theme },
            }}
            bottomItems={sections}
            navLinksItems={[
              {
                label:
                  'Ajaaaaa aaaaaaa aaaaa aaaaaaaaaaaaa asd asfsdf sdf sdgfds',
                to: '/fino',
                icon: <User className='dark:text-white' />,
                pathname: '/asdfa',
              },
              {
                label: 'ecole x 2',
                to: '/ecole',
                pathname: '/asdfa',
                icon: <User className='dark:text-white' />,
              },
            ]}
            subLinksItems={[
              {
                label: 'Ajaaaaa aaaaaaa aaaaa aaaaaaaaaaaaa asd asfsdf sdf sdgfds',
                to: '/fino',
                icon: <User className='dark:text-white' />,
                pathname: '/asdfa',
                subLinks: [
                  {
                    label:
                      'Ajaaaaa aaaaaaa aaaaa aaaaaaaaaaaaa asd asfsdf sdf sdgfds',
                    to: '/fino',
                    icon: <User className='dark:text-white' />,
                    pathname: '/asdfa',
                  },
                  {
                    label: 'ecole x 2',
                    to: '/ecole',
                    pathname: '/asdfa',
                    icon: <User className='dark:text-white' />,
                  },
                ],
              },
              {
                label: 'BUNO',
                to: '/fino',
                icon: <User className='dark:text-white' />,
                pathname: '/asdfa',
                subLinks: [
                  {
                    label:
                      'Ajaaaaa aaaaaaa aaaaa aaaaaaaaaaaaa asd asfsdf sdf sdgfds',
                    to: '/fino',
                    icon: <User className='dark:text-white' />,
                    pathname: '/asdfa',
                  },
                  {
                    label: 'ecole x 2',
                    to: '/ecole',
                    pathname: '/asdfa',
                    icon: <User className='dark:text-white' />,
                  },
                ],
              }
            ]}
          />

        </>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
