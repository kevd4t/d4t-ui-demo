import { motion, AnimatePresence } from 'framer-motion'
import { IconGasStation } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'sonner'

import type { IContentTabs, ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { FormEditStation } from '@/components/page/estaciones/FormEditStation'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { Button, Card, CardContent } from '@/components/ui'

const { ROUTES } = siteConfig

const EditUserPage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [station, setStation] = useState(null)
  const [error, setError] = useState(null)

  const initialContentTabs: IContentTabs[] = [
    {
      tabKey: 'BASIC_INFO',
      label: 'Información Básica',
      isDisabled: false,
      isCompleted: true,
      icon: <IconGasStation />,
      content: <FormEditStation station={station} />
    },
    {
      tabKey: 'ISLANDS',
      label: 'Islas',
      isDisabled: false,
      isCompleted: false,
      icon: <IconGasStation />,
      content: <div>Islas</div>
    },
    {
      tabKey: 'TANKS',
      label: 'Tanques',
      isDisabled: false,
      isCompleted: false,
      icon: <IconGasStation />,
      content: <div>Tanques</div>
    },
    {
      tabKey: 'DISPENSERS',
      label: 'Dispensadores',
      isDisabled: false,
      isCompleted: false,
      icon: <IconGasStation />,
      content: <div>Dispensadores</div>
    },
    {
      tabKey: 'METERS',
      label: 'Medidores',
      isDisabled: false,
      isCompleted: false,
      icon: <IconGasStation />,
      content: <div>Medidores</div>
    }
  ]

  const initialTabActivated = initialContentTabs[0]

  const [tabActive, setTabActive] = useState<IContentTabs>(initialTabActivated)
  const [contentTabs] = useState<IContentTabs[]>(initialContentTabs)

  const handleButtonTab = ({ ...tabContent }) => setTabActive({
    label: tabContent.label,
    tabKey: tabContent.tabKey,
    isDisabled: tabContent.isDisabled,
    isCompleted: tabContent.isCompleted,
    content: tabContent.content,
    icon: tabContent.icon
  })

  const getStationDetail = async () => {
    setIsLoading(true)

    const res = await fetch(`/api/stations/${router.query.id}`)

    if (!res.ok) {
      toast.error('Hubo un Error')
      setError('Hubo un Error')
      setIsLoading(false)
      return
    }

    const data = await res.json()
    setStation(data.results)
    setIsLoading(false)
  }

  useEffect(() => {
    getStationDetail()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.id])

  if (error) {
    return (
      <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
        <WomanLoading className='w-96' />
        <h5 className='font-bold text-4xl'>Hubo un Error</h5>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
        <WomanLoading className='w-96' />
        <h5 className='font-bold text-4xl'>Cargando...</h5>
      </div>
    )
  }

  return (
    <>
      <HeaderPage allowGoBack title={`Detalle de Marca de Medidor ${router.query.id}`} />
      { station && (
        <Card>
          <CardContent className='p-4'>
            <div className='w-full h-full flex justify-start'>
              <section className='w-min flex relative'>
                <div className='flex flex-col justify-start items-start gap-y-4 h-min sticky top-0 left-0 pt-6 mt-7'>
                  {
                    contentTabs.map((contentTab, idx) => (
                      <Button
                        tabIndex={idx}
                        variant='outline'
                        key={contentTab.tabKey}
                        className={
                          `relative w-full justify-start whitespace-nowrap gap-x-2 ${tabActive.tabKey === contentTab.tabKey ? 'bg-accent' : ''}`
                        }
                        onClick={() => handleButtonTab({ ...contentTab })}
                        disabled={contentTab.isDisabled}
                      >
                        {
                          !contentTab.isCompleted && (
                            <div className='h-3 w-3 rounded-full bg-red-700 absolute -top-1 -left-1 animate-pulse'></div>
                          )
                        }

                        {contentTab.icon}
                        {contentTab.label}
                      </Button>
                    )
                    )
                  }
                </div>

                <div className='mx-7'></div>
              </section>

              <section className='w-full'>
                <h5 className='font-bold text-xl'>{tabActive.label}</h5>

                <div className='w-full h-full'>
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
          </CardContent>
        </Card>
      )
      }
    </>
  )
}

EditUserPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.USERS.DETAIL.TITLE} | ${siteConfig.TITLE}`}>
      {page}
    </AuthenticatedLayout>
  )
}

export default EditUserPage
