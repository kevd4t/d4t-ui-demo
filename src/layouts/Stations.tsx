/* eslint-disable react-hooks/exhaustive-deps */
import { motion, AnimatePresence } from 'framer-motion'
import { IconBusStop } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useStationFlow } from '@/lib/store/stationFlow'
import type { IStation, ReactNode } from '@/lib/types'

import { Card, Button, CardContent, CardHeader, Avatar, AvatarImage, AvatarFallback, Badge, Separator } from '@/components/ui'
import { getStationByID } from '@/lib/services/stations'

export const StationsLayout = ({ children }: { children: ReactNode }) => {
  const { stationTabs, setStation, currentStation, setActiveTab, allowTabsToComplete, getTabActive } = useStationFlow()
  const { asPath, push, query } = useRouter()

  const handleClick = (contentTab) => {
    push(`/estaciones/${query.id}/${contentTab.route}`)
  }

  useEffect(() => {
    if (query.id && !currentStation) {
      (async () => {
        const station = await getStationByID({ id: query.id })
        setStation(station.results as IStation)
      })()
    }
  }, [query])

  useEffect(() => {
    stationTabs.forEach((stationTab) => {
      if (asPath.includes(stationTab.route)) {
        setActiveTab(stationTab.tabKey)
      }
    })
  }, [asPath])

  useEffect(() => {
    if (!asPath.includes('/estaciones/crear')) {
      allowTabsToComplete()
    }
  }, [asPath])

  return (
    <>
      <Card className='border-none'>
        <CardContent className='p-0'>
          <div className='w-full h-full flex justify-start'>
            <section className='w-min flex relative'>
              <div className='flex flex-col justify-start items-start gap-y-4 h-min sticky top-0 left-0 pt-6'>
                {
                  stationTabs.map((contentTab, idx) => (
                    <Button
                      tabIndex={idx}
                      variant='outline'
                      key={contentTab.tabKey}
                      disabled={contentTab.isDisabled}
                      onClick={() => handleClick(contentTab)}
                      className={`relative w-full py-6 justify-start whitespace-nowrap gap-x-2 ${getTabActive().tabKey === contentTab.tabKey ? 'bg-accent' : ''}`}
                    >
                      {
                        !contentTab.isCompleted && (
                          <div className='h-3 w-3 rounded-full bg-red-700 animate-pulse'></div>
                        )
                      }

                      {contentTab.icon}
                      {contentTab.label}
                    </Button>
                  ))
                }
              </div>

              <div className='mx-7'></div>
            </section>

            <section className='w-full flex justify-between items-start relative'>
              <div className='w-full h-full'>
                <AnimatePresence initial={false} mode='wait'>
                  <motion.div
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    key={getTabActive().tabKey}
                    transition={{ duration: 0.2 }}
                  >
                    {children}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className='mx-7'></div>

              {
                currentStation && (
                  <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
                    <Card className='w-full sticky top-0 left-0'>
                      <CardHeader>
                        <Avatar className='w-full h-32 rounded-sm mx-auto'>
                          <AvatarImage src={currentStation.images[0]} className='object-contain w-full h-full' />

                          <AvatarFallback className='rounded-md'>
                            <IconBusStop className='text-zinc-500 w-10 h-10' />
                          </AvatarFallback>
                        </Avatar>
                      </CardHeader>

                      <CardContent>
                        <h6 className='font-semibold'>Informacion Basica</h6>

                        <ul className='mt-2'>
                          <li className='flex justify-start items-center text-sm text-primary-gray'>
                            <span className='font-semibold dark:text-white'>Título:</span> &nbsp;
                            <span className='dark:text-gray-300'>{currentStation.title}</span>
                          </li>

                          <li className='flex justify-start items-center text-sm text-primary-gray'>
                            <span className='font-semibold dark:text-white'>RIF:</span> &nbsp;
                            <span className='dark:text-gray-300'>{currentStation.rif}</span>
                          </li>

                          <li className='flex justify-start items-center text-sm text-primary-gray'>
                            <span className='font-semibold dark:text-white'>Modalidad:</span> &nbsp;
                            <span className='dark:text-gray-300'>{currentStation.modality}</span>
                          </li>

                          <li className='flex justify-start items-center text-sm text-primary-gray'>
                            <span className='font-semibold dark:text-white'>Despacha Gasolina:</span> &nbsp;
                            <span className='dark:text-gray-300'>{currentStation.isGasolineDispatch ? 'Si' : 'No'}</span>
                          </li>

                          <li className='flex justify-start items-center text-sm text-primary-gray'>
                            <span className='font-semibold dark:text-white'>Despacha Disel:</span> &nbsp;
                            <span className='dark:text-gray-300'>{currentStation.isDiselDispatch ? 'Si' : 'No'}</span>
                          </li>
                        </ul>

                        <Separator className='my-2' />

                        <Badge
                          className={`w-full text-sm h-full py-1.5 ${currentStation.isActive ? 'border-2 bg-green-100 border-green-500 text-green-500' : 'border-2 bg-red-100 border-red-500 text-red-500'}`}
                        >
                          {currentStation.isActive ? 'Activo' : 'Bloqueado'}
                        </Badge>

                        <Separator className='my-2' />

                        <Badge className='w-full text-sm h-full py-1.5'>
                          {currentStation.status || 'Vacio'}
                        </Badge>
                      </CardContent>
                    </Card>
                  </div>
                )
              }
            </section>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
