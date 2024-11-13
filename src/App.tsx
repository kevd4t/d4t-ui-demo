import { Badge, BarChart, Building, DivideCircle, HelpCircle, Info, LucideTruck, Router, Settings, StopCircle, Truck, User } from 'lucide-react';
import { UseFormReturn, useForm } from 'react-hook-form';
import { ThemeProvider, useTheme } from 'next-themes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { z } from 'zod';

import { AppLayout } from './layouts/Application';
import type { ComboxItem } from './components/combox/types';
import { D4TTable, GenericSelect, ITableColumn, ITablePagination, ITableSubmit, Form, Sidebar, SidebarContent, NavLink, NavLinkNested, Input, Button, InputPID, TextArea, GenericCombobox, D4TImage, Dialog, DialogTrigger, DialogContent, IImage, Tabs, TabsList, TabsTrigger, TabsContent } from './components';
import { characterColumns } from './examples/tables/rick-and-morty/RickAndMorty';
import { useGetCharacters } from './examples/tables/rick-and-morty/use-get-characters';
import { FormCreateGPS } from './examples/create-gps';
import { useDialogStore } from './lib/store/dialog';

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

const DNI_TYPES = z.enum(['v', 'e', 'p', 'j', 'g'])

export const IDENTIFIER_TYPE_SCHEMA = z.enum(['EMAIL', 'PID'])

export const pidLoginSchema = z.object({
  identifier: z.string(),
  password: z.string(),
  type: z.enum([IDENTIFIER_TYPE_SCHEMA.Enum.PID])
})

export const pidLoginSchemaForm = pidLoginSchema.extend({
  pidType: DNI_TYPES,
  pidNumber: z.string()
})

export interface ILoginWithPID extends z.infer<typeof pidLoginSchemaForm> { }


export const defaultLoginPID: ILoginWithPID = {
  identifier: '',
  password: '',
  type: 'PID',
  pidNumber: '',
  pidType: 'v'
}

function App() {
  const { characters, loadingCharacters, onSubmitCharactersTable } = useGetCharacters()

  const [images, setImages] = useState<IImage[]>([
    {
      data_url: 'https://www.hmiscfl.org/wp-content/uploads/2018/06/generic-person-icon-14.png',
      imageId: '1234'
    },
    {
      data_url: 'https://unavatar.io/github/ipacs13',
      imageId: '567890'
    }
  ]);
  const [itemsOfMultiSel, setItemsOfMultisel] = useState([]);

  const formPid = useForm<ILoginWithPID>({ defaultValues: defaultLoginPID, resolver: zodResolver(pidLoginSchemaForm) })
  const probeForm = useForm<any, any, any>()

  const { theme, setTheme } = useTheme()
  const { openDialog } = useDialogStore()

  const profile = { role: 'Administrador', name: 'Kevin', lastname: 'blanco', photo: 'https://www.hmiscfl.org/wp-content/uploads/2018/06/generic-person-icon-14.png' };

  const dataPagination: ITablePagination = {
    limit: 5,
    page: 1,
    labels: { plural: 'Items', single: 'Item' },
    hasPrevPage: false,
    hasNextPage: false,
  };

  const comboxForm = useForm<{ fuel: Hydrocarbon[] }>({
    defaultValues: { fuel: [] },
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

  const FUELS: ComboxItem[] = [
    { id: 'Gasolina', label: 'Gasolina SUPER SPER ASDKAS ODASK DOASD ASD', value: Hydrocarbon.Gasoline },
    { id: 'Diesel', label: 'Diesel SUPER DIESEL loREM IPSU', value: Hydrocarbon.Diesel },
    { id: 'Gas', label: 'Gas', value: Hydrocarbon.Gas }
  ]

  useEffect(() => {
    setTimeout(() => {
      // Update Images
      const newImage = {
        data_url: 'https://img.freepik.com/fotos-premium/imagen-fotografica-foto-stock-fondo-pantalla-hd-8k-hermosa-naturaleza-gratuita_915071-82095.jpg',
        imageId: 'LO_QUE_SEA'
      }

      setImages([...images, newImage])

      // Update ComboxForm
      comboxForm.reset((prevForm) => ({
        ...prevForm,
        fuel: [FUELS[0].value as Hydrocarbon]
      }))
    }, 2000)
  }, [])

  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      <AppLayout>

        <div className='w-full bg-card rounded-md  p-4'>
          <Button onClick={() => openDialog()}>
            Agregar Carrier
          </Button>
          <FormCreateGPS />
        </div>

        {/* <Dialog>
          <DialogTrigger>
            <Info size={18} className='mr-2' />
            Mas Info
          </DialogTrigger>

          <DialogContent className='pt-8'>
            formatAndUpdateTruckStatus
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">Make changes to your account here.</TabsContent>
              <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog> */}

        <div className='grid bg-card mt-4 rounded-md p-4'>
          <div className='grid grid-cols-2'>
            {/* Forms */}
            <div className='m-10'>
              <Form {...probeForm}>
                <InputPID
                  form={formPid}
                  label='Cedula'
                />

                <div className='grid grid-cols-1 md:grid-cols-2 mt-5 gap-x-2 gap-y-2'>
                  <Input
                    form={probeForm}
                    description='This is a description'
                    id='name'
                    placeholder='This is the placeholder'
                    icon={<Settings className='dark:text-white' size={20} />}
                    isLoading={false}
                  // readOnly
                  />

                  <GenericSelect
                    description='This is a description'
                    form={probeForm}
                    id='name'
                    placeholder='This is the placeholder'
                    items={[]}
                    isLoading={false}
                  />

                  <TextArea
                    readOnly
                    form={probeForm}
                    id='description'
                    isLoading={false}
                    placeholder='This is the placeholder'
                  />

                  <GenericCombobox
                    buttonClassName='w-full'
                    form={probeForm}
                    id='fuel'
                    items={[{ label: 'hello', value: 'hello' }, { label: 'Item 2', value: 'ITEM_2', disabled: true }]}
                    ctaPlaceholder='Add'
                    notFoundLabel='Not found'
                    label='label'
                    isLoading={false}
                  />
                </div>
                <Button className='m-5 bg-brand-primary hover:bg-brand-primary-opaque'>Primary button</Button>
              </Form>
            </div>
          </div>

          {/* Table */}
          <div className='m-10 max-w-4xl'>
            <D4TTable
              data={characters?.results}
              onSubmitTable={onSubmitCharactersTable}
              pagination={{ limit: 5, page: 1, hasPrevPage: true, hasNextPage: true }}
              columns={characterColumns}
              error={false}
              loading={false}
              limitOfMultiSelect={4}
              multiItemsSelected={itemsOfMultiSel}
              setMultiItemsSelected={setItemsOfMultisel}
            />
          </div>
          <div>

          </div>

          <div className='my-20'>
            <Dialog>
              <DialogTrigger>
                <Button>
                  Abrir Modal con Imagen
                </Button>
              </DialogTrigger>
              <DialogContent className='flex justify-center items-center flex-col'>
                <div className='flex justify-center items-center gap-x-6'>
                  <D4TImage zoom download src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Documento_Espa%C3%B1ol.jpg/347px-Documento_Espa%C3%B1ol.jpg' />
                  <D4TImage zoom src='https://happy-families.s3.ap-southeast-2.amazonaws.com/s3fs-public/styles/max_1300x1300/public/2021-09/Settle-down-about-selfies.jpg?VersionId=s9.37sTnWP4lwLl5TdYkISDea8UM6V4s&itok=pQEgg--h' />
                </div>
                <D4TImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8x_ff5v-OhvOAigzgO3n_laRg-KrejjGd7w&usqp=CAU' />
              </DialogContent>
            </Dialog>
          </div>


        </div>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
