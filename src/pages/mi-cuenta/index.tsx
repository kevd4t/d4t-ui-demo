import { AuthenticatedLayout } from '@/layouts/Authenticated'
import type { ReactElement, ReactNode } from '@/lib/types'
import { siteConfig } from '@/config'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { Card } from '@/components/common/cards'
import { Avatar, AvatarFallback, AvatarImage, Button, Separator } from '@/components/ui'
import { Input } from '@/components/common/inputs/Input'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const { ROUTES } = siteConfig

type TAccountTabKey = 'MY_PROFILE' | 'SECURITY' | 'PREFERENCES' | 'NOTIFICATIONS'

interface IContentTabs {
  label: string
  tabKey: TAccountTabKey
  content: ReactNode
}

const MyProfileViewTab = () => {
  return (
    <>
      <div
        className='rounded-md w-full h-48'
        style={{ background: 'linear-gradient(90deg, rgba(255,175,189,1) 0%, rgba(255,195,160,1) 100%)' }}
      ></div>

      <div className='w-full justify-center items-start -mt-16'>
        <Avatar className='w-32 h-32 mx-auto'>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>KB</AvatarFallback>
        </Avatar>
      </div>

      <div className='mt-4'>
        <div className='w-full flex justify-between items-start gap-x-6'>
          <Input
            id='username'
            type='text'
            label='Nombre de Usuario'
            tabIndex={5}
            classNameContainer='w-1/2'
            value='kevelscy'
            readOnly
          />

          <Input
            id='name'
            type='text'
            label='Nombre'
            tabIndex={6}
            classNameContainer='w-1/2'
            value='Kevin'
            readOnly
          />

          <Input
            id='lastname'
            type='text'
            label='Apellido'
            tabIndex={7}
            classNameContainer='w-1/2'
            value='Blanco'
            readOnly
          />
        </div>
      </div>

      <div className='mt-4'>
        <div className='w-full flex justify-between items-start gap-x-6'>
          <Input
            id='phone'
            type='text'
            label='Telefono'
            tabIndex={8}
            classNameContainer='w-1/2'
            value='(0412) 123 4567'
            readOnly
          />

          <Input
            id='ci'
            type='text'
            label='Cedula de Identidad'
            tabIndex={9}
            classNameContainer='w-1/2'
            value='12.234.456'
            readOnly
          />

          <Input
            id='email'
            type='text'
            label='Correo Electronico'
            tabIndex={10}
            classNameContainer='w-1/2'
            value='k.blanco@d4t.tech'
            readOnly
          />
        </div>
      </div>

      <div className='mt-4'>
        <div className='w-full flex justify-start items-start gap-x-6'>
          <Input
            id='role'
            type='text'
            label='Rol'
            tabIndex={11}
            classNameContainer='w-1/2'
            value='Coordinador'
            readOnly
          />

          <Input
            id='isActive'
            type='text'
            label='Estado'
            tabIndex={12}
            classNameContainer='w-1/2'
            value='Activo'
            readOnly
          />

        </div>
      </div>
    </>
  )
}

const MyAccountPage = () => {
  const [tabActive, setTabActive] = useState<IContentTabs>({ label: 'Mi Perfil', tabKey: 'MY_PROFILE', content: <MyProfileViewTab /> })

  const contentTabs: IContentTabs[] = [
    {
      tabKey: 'MY_PROFILE',
      label: 'Mi Perfil',
      content: <MyProfileViewTab />
    },
    {
      tabKey: 'SECURITY',
      label: 'Seguridad',
      content: <div>Seguridad</div>
    },
    {
      tabKey: 'PREFERENCES',
      label: 'Preferencias',
      content: <div>Preferencias</div>
    },
    {
      tabKey: 'NOTIFICATIONS',
      label: 'Notificaciones',
      content: <div>Notificaciones</div>
    }
  ]

  return (
    <div className='w-full h-full'>
      <HeaderPage title='Mi Cuenta' />

      <Card>
        <div className='w-full h-full flex justify-start'>
          <section className='w-min flex'>
            <div className='flex flex-col justify-start items-start gap-y-4'>
              {
                contentTabs.map((contentTab, idx) => (
                  <Button
                    tabIndex={idx}
                    variant='outline'
                    key={contentTab.tabKey}
                    onClick={() => setTabActive({ label: contentTab.label, tabKey: contentTab.tabKey, content: contentTab.content })}
                    className={`w-full justify-start whitespace-nowrap ${tabActive.tabKey === contentTab.tabKey ? 'bg-accent' : ''}`}
                  >
                    {contentTab.label}
                  </Button>
                )
                )
              }
            </div>

            <Separator className='h-full mx-7' orientation='vertical' />
          </section>

          <section className='w-full'>
            <h5 className='font-bold text-xl'>{tabActive.label}</h5>

            <div className='w-full h-full mt-4'>
              <AnimatePresence initial={false} mode='wait'>
                <motion.div
                  key={tabActive.tabKey}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {tabActive.content}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        </div>
      </Card>
    </div>
  )
}

MyAccountPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.MY_ACCOUNT.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default MyAccountPage
