/* eslint-disable react-hooks/exhaustive-deps */
import { motion, AnimatePresence } from 'framer-motion'
import { IconBusStop } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { EHydrocarbon, type IStation, type ReactNode } from '@/lib/types'
import { useStationFlow } from '@/lib/store/stationFlow'

import { Card, Button, CardContent, CardHeader, Avatar, AvatarImage, AvatarFallback, Badge, Separator, Skeleton } from '@/components/ui'
import { getStationByID } from '@/lib/services/stations'

export const StationsLayout = ({ children }: { children: ReactNode }) => {
  const { stationTabs, isLoading, setStation, currentStation, setActiveAttributeTab, allowAttributeTabsToComplete, getAttributeTabActive, setIsLoading } = useStationFlow()
  const { asPath, push, query } = useRouter()

  const handleClick = (contentTab) => {
    push(`/estaciones/${query.id}/${contentTab.route}`)
  }

  useEffect(() => {
    setIsLoading(true)

    if (query.id && !currentStation) {
      (async () => {
        const station = await getStationByID({ id: query.id })
        setStation(station.results as IStation)
        setIsLoading(false)
      })()
    }

    if (currentStation) {
      setIsLoading(false)
    }
  }, [query, currentStation])

  useEffect(() => {
    if (currentStation) {
      stationTabs.PUMP.forEach((stationTab) => {
        if (asPath.includes(stationTab.route)) {
          setActiveAttributeTab(currentStation.type, stationTab.tabKey)
        }
      })

      stationTabs.STOCKAGE.forEach((stationTab) => {
        if (asPath.includes(stationTab.route)) {
          setActiveAttributeTab(currentStation.type, stationTab.tabKey)
        }
      })
    }
  }, [asPath, currentStation])

  useEffect(() => {
    if (currentStation) {
      if (!asPath.includes('/estaciones/crear')) {
        allowAttributeTabsToComplete(currentStation.type)
      }
    }
  }, [asPath, currentStation])

  return (
    <>
      <Card className='border-none'>
        <CardContent className='p-0'>
          <div className='w-full h-full flex justify-start'>
            <section className='w-min flex relative'>
              <div className='flex flex-col justify-start items-start gap-y-4 h-min sticky top-0 left-0 pt-6'>
                {
                  (isLoading && !currentStation && !asPath.includes('/crear'))
                    ? (
                      <>
                        <Skeleton className='w-44 h-12 justify-start whitespace-nowrap gap-x-2' />
                        <Skeleton className='w-44 h-12 justify-start whitespace-nowrap gap-x-2' />
                        <Skeleton className='w-44 h-12 justify-start whitespace-nowrap gap-x-2' />
                        <Skeleton className='w-44 h-12 justify-start whitespace-nowrap gap-x-2' />
                        <Skeleton className='w-44 h-12 justify-start whitespace-nowrap gap-x-2' />
                      </>
                    )
                    : (
                      <>
                        {
                          stationTabs[currentStation.type].map((contentTab, idx) => (
                            <Button
                              tabIndex={idx}
                              variant='outline'
                              key={contentTab.tabKey}
                              disabled={contentTab.isDisabled}
                              onClick={() => handleClick(contentTab)}
                              className={`relative w-full py-6 justify-start whitespace-nowrap gap-x-2 ${query?.attribute?.includes(contentTab.route.replace('/', '')) ? 'bg-accent' : ''}`}
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
                      </>
                    )
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
                    key={getAttributeTabActive().tabKey}
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
                          <AvatarImage src={currentStation?.images[0]?.url} className='object-contain w-full h-full' />

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
                            <span className='dark:text-gray-300'>{currentStation.name}</span>
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
                            <span className='dark:text-gray-300'>{currentStation.provider_services.includes(EHydrocarbon.GASOLINE) ? 'Si' : 'No'}</span>
                          </li>

                          <li className='flex justify-start items-center text-sm text-primary-gray'>
                            <span className='font-semibold dark:text-white'>Despacha Disel:</span> &nbsp;
                            <span className='dark:text-gray-300'>{currentStation.provider_services.includes(EHydrocarbon.DIESEL) ? 'Si' : 'No'}</span>
                          </li>
                        </ul>

                        <Separator className='my-2' />

                        <Badge className='w-full text-sm h-full py-1.5'>
                          {currentStation.state}
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
